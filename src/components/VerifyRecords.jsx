import { useState, useEffect } from 'react';
import { apiService } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PageHeader, Card, StatusBadge, Button } from '../styles/CommonStyles';
import { theme } from '../styles/theme';
import { MdCheckCircle, MdCancel, MdVisibility, MdDescription } from 'react-icons/md';
import { ConfirmModal } from './Modal';
import { useToast } from '../contexts/ToastContext';
import { useSettings } from '../contexts/SettingsContext';
import { TableSkeleton } from './LoadingSkeleton';
import EmptyState from './EmptyState';
import Modal from './Modal';

const RecordsContainer = styled.div`
  font-family: ${theme.fonts.body};
`;

const RecordsCard = styled(Card)`
  h3 { 
    font-size: 18px; 
    font-weight: 700; 
    color: ${theme.colors.gray900}; 
    margin: 0 0 ${theme.spacing.lg} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.gray200};

  body.dark-theme & {
    border-color: #3d3d3d;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;

  thead { 
    background: ${theme.colors.gray50};
    
    body.dark-theme & {
      background: #1f1f1f;
    }
  }

  th { 
    padding: 12px 16px; 
    text-align: left; 
    font-weight: 600; 
    color: ${theme.colors.gray700}; 
    border-bottom: 2px solid ${theme.colors.gray200}; 
    font-size: 12px; 
    text-transform: uppercase; 
    letter-spacing: 0.5px;

    body.dark-theme & {
      color: #b0b0b0;
      border-bottom-color: #3d3d3d;
    }
  }

  td { 
    padding: 16px;
    color: ${theme.colors.textPrimary}; 
    border-bottom: 1px solid ${theme.colors.gray200};
    
    body.dark-theme & {
      color: #e5e5e5;
      border-bottom-color: #3d3d3d;
    }
  }

  tbody tr { 
    transition: all ${theme.transitions.fast}; 
    &:hover { 
      background: ${theme.colors.gray50};
      
      body.dark-theme & {
        background: #353535;
      }
    } 
  }
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  padding: 6px;
  cursor: pointer;
  color: ${theme.colors.gray600};
  font-size: 18px;
  border-radius: 4px;
  transition: all ${theme.transitions.fast};

  body.dark-theme & {
    color: #b0b0b0;
  }

  &:hover { 
    background: ${theme.colors.gray100}; 
    
    body.dark-theme & {
      background: #3d3d3d;
    }
  }

  &.verify:hover { color: ${theme.colors.success}; background: #d1fae5; }
  &.reject:hover { color: ${theme.colors.danger}; background: #fee2e2; }
  &.view:hover { color: ${theme.colors.primarySolid}; }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid ${theme.colors.gray200};

  body.dark-theme & {
    border-top-color: #3d3d3d;
  }

  button {
    padding: 8px 12px;
    background: white;
    border: 1px solid ${theme.colors.gray300};
    border-radius: ${theme.borderRadius.md};
    color: ${theme.colors.gray700};
    font-size: 13px;
    cursor: pointer;
    font-weight: 500;
    
    body.dark-theme & {
      background: #2d2d2d;
      border-color: #3d3d3d;
      color: #e5e5e5;
    }

    &:hover:not(:disabled) { 
      background: ${theme.colors.gray50};
      
      body.dark-theme & {
        background: #353535;
      }
    }
    
    &.active { 
      background: ${theme.colors.primarySolid}; 
      color: white; 
      border-color: ${theme.colors.primarySolid};
    }
    
    &:disabled { opacity: 0.5; cursor: not-allowed; }
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid ${theme.colors.gray300};
  border-radius: 8px;
  min-height: 100px;
  margin-top: 8px;
  font-family: ${theme.fonts.body};
  resize: vertical;

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #3d3d3d;
    color: #e5e5e5;
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primarySolid};
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

const ViewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ViewItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const ViewLabel = styled.span`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${theme.colors.gray500};

  body.dark-theme & {
    color: #a0a0a0;
  }
`;

const ViewValue = styled.div`
  font-size: 15px;
  color: ${theme.colors.textPrimary};
  font-weight: 500;
  padding: 10px 14px;
  background: ${theme.colors.gray50};
  border-radius: ${theme.borderRadius.md};
  border: 1px solid ${theme.colors.gray200};
  min-height: 42px;
  display: flex;
  align-items: center;

  body.dark-theme & {
    color: #e5e5e5;
    background: #2d2d2d;
    border-color: #3d3d3d;
  }
`;

const SectionTitle = styled.h4`
    margin: 0 0 16px 0;
    font-size: 14px;
    color: ${theme.colors.primary};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 8px;
    
    &::after {
      content: '';
      flex: 1;
      height: 1px;
      background: ${theme.colors.gray200};
    }

    body.dark-theme & {
        color: #a78bfa;
        &::after {
          background: #3d3d3d;
        }
    }
`;

const AttachmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.sm};
`;

const AttachmentCard = styled.div`
  border: 1px solid ${theme.colors.gray200};
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${theme.transitions.base};
  background: white;
  
  body.dark-theme & {
    background: #2d2d2d;
    border-color: #3d3d3d;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
    border-color: ${theme.colors.primary};
  }
`;

const AttachmentPreview = styled.div`
    width: 100%;
    height: 120px;
    background: ${theme.colors.gray100};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    body.dark-theme & {
      background: #1f1f1f;
    }
`;

const AttachmentMeta = styled.div`
  padding: 8px 12px;
  font-size: 12px;
  border-top: 1px solid ${theme.colors.gray200};
  
  body.dark-theme & {
    border-top-color: #3d3d3d;
  }

  .name {
    font-weight: 600;
    color: ${theme.colors.textPrimary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2px;
    
    body.dark-theme & {
      color: #e5e5e5;
    }
  }

  .type {
    color: ${theme.colors.gray500};
    font-size: 11px;
  }
`;

function VerifyRecords() {
  const navigate = useNavigate();
  const { formatDate } = useSettings();
  const { showToast } = useToast();
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ currentPage: 1, totalPages: 1, total: 0 });
  
  // Modal States
  const [verifyModal, setVerifyModal] = useState({ isOpen: false, recordId: null, recordName: '' });
  const [rejectModal, setRejectModal] = useState({ isOpen: false, recordId: null, recordName: '' });
  const [viewModal, setViewModal] = useState({ isOpen: false, record: null });
  const [rejectionReason, setRejectionReason] = useState('');
  const [processing, setProcessing] = useState(false);

  useEffect(() => { fetchRecords(); }, [pagination.currentPage]);

  const fetchRecords = async () => {
    setLoading(true);
    try {
      // Assuming GET /public-records?status=Pending is what we want
      const params = { page: pagination.currentPage, limit: 10, status: 'Pending' };
      const res = await apiService.getPublicRecords(params);
      
      if (res.data.success) {
        setRecords(res.data.data || []);
        const paging = res.data.pagination || {};
        setPagination({ 
          currentPage: paging.currentPage || 1, 
          totalPages: paging.totalPages || 1, 
          total: paging.total || 0 
        });
      } else {
        setRecords([]);
      }
    } catch (err) {
      console.error('Error fetching public records:', err);
      // Fallback or empty state if API fails (e.g., pending backend implementation)
      setRecords([]); 
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyClick = (record) => {
    setVerifyModal({ 
      isOpen: true, 
      recordId: record._id, 
      recordName: `${record.firstName} ${record.lastName}` 
    });
  };

  const handleRejectClick = (record) => {
    setRejectModal({ 
      isOpen: true, 
      recordId: record._id, 
      recordName: `${record.firstName} ${record.lastName}` 
    });
    setRejectionReason('');
  };

  const handleViewClick = async (record) => {
    setViewModal({ isOpen: true, record: record }); // Show list data initially
    try {
        const res = await apiService.getPublicRecord(record._id);
        // Handle both { success: true, data: {...} } and direct object response
        let recordData = res.data.success === true ? res.data.data : res.data;
        
        // If it's an array (from list endpoint filtering), take the first item
        if (Array.isArray(recordData) && recordData.length > 0) {
            recordData = recordData[0];
        } else if (recordData && recordData.docs && Array.isArray(recordData.docs)) {
            // Handle valid mongoose-paginate response if applicable
             recordData = recordData.docs[0];
        }
        
        if (recordData && recordData._id) {
            setViewModal(prev => ({ ...prev, record: recordData }));
        }
    } catch(err) {
        console.error("Failed to fetch details", err);
    }
  };

  const confirmVerify = async () => {
    setProcessing(true);
    try {
      const res = await apiService.verifyPublicRecord(verifyModal.recordId, { status: 'Verified' });
      showToast(res.data.message || 'Record verified successfully', 'success');
      setVerifyModal({ isOpen: false, recordId: null, recordName: '' });
      fetchRecords(); // Refresh list
    } catch (err) {
      showToast(err.response?.data?.msg || 'Error verifying record', 'error');
    } finally {
      setProcessing(false);
    }
  };

  const confirmReject = async () => {
    if (!rejectionReason.trim()) {
      showToast('Please provide a reason for rejection', 'warning');
      return;
    }
    setProcessing(true);
    try {
      const res = await apiService.verifyPublicRecord(rejectModal.recordId, { 
        status: 'Rejected', 
        rejectionReason 
      });
      showToast(res.data.message || 'Record rejected', 'info');
      setRejectModal({ isOpen: false, recordId: null, recordName: '' });
      fetchRecords(); // Refresh list
    } catch (err) {
      showToast(err.response?.data?.msg || 'Error rejecting record', 'error');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <RecordsContainer>
      <PageHeader>
        <h1>Verify Public Records</h1>
        <p>Review and verify burial record submissions from the public.</p>
      </PageHeader>

      <RecordsCard>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ margin: 0 }}>Pending Verification Records</h3>
        </div>

        {loading ? (
          <TableSkeleton rows={5} />
        ) : records.length === 0 ? (
          <EmptyState
            icon={<MdDescription size={48} />}
            title="No Pending Records"
            description="There are no public record submissions waiting for verification."
          />
        ) : (
          <>
            <TableWrapper>
              <StyledTable>
                <thead>
                  <tr>
                    <th>Submitted Date</th>
                    <th>Name</th>
                    <th>Date of Death</th>
                    <th>Burial Location</th>
                    <th>Submitted By</th>
                    {/* <th>Status</th> */}
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map(record => (
                    <tr key={record._id}>
                      <td>{formatDate(record.createdAt)}</td>
                      <td>{`${record.firstName} ${record.middleName || ''} ${record.lastName}`}</td>
                      <td>{formatDate(record.dateOfDeath)}</td>
                      <td>{record.burialLocation}</td>
                      <td>{record.applicantEmail || 'N/A'}</td>
                      {/* <td>
                        <StatusBadge $status="Pending">
                          Pending Verify
                        </StatusBadge>
                      </td> */}
                      <td>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <ActionButton 
                            className="view" 
                            title="View Details" 
                            onClick={() => handleViewClick(record)}
                          >
                            <MdVisibility />
                          </ActionButton>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </StyledTable>
            </TableWrapper>
            {records.length > 0 && pagination.totalPages > 1 && (
              <Pagination>
                <button onClick={() => setPagination({ ...pagination, currentPage: pagination.currentPage - 1 })} disabled={pagination.currentPage === 1}>« Previous</button>
                <button className="active">{pagination.currentPage}</button>
                <button onClick={() => setPagination({ ...pagination, currentPage: pagination.currentPage + 1 })} disabled={pagination.currentPage === pagination.totalPages}>Next »</button>
              </Pagination>
            )}
          </>
        )}
      </RecordsCard>

      {/* Verify Confirmation Modal */}
      <ConfirmModal
        isOpen={verifyModal.isOpen}
        onClose={() => setVerifyModal({ isOpen: false, recordId: null, recordName: '' })}
        onConfirm={confirmVerify}
        title="Verify Record"
        message={`Are you sure you want to verify the record for "${verifyModal.recordName}"? This will move it to the main burial records.`}
        confirmText={processing ? "Verifying..." : "Verify Record"}
        cancelText="Cancel"
        variant="success"
      />

      {/* Reject Modal */}
      <Modal
        isOpen={rejectModal.isOpen}
        onClose={() => setRejectModal({ isOpen: false, recordId: null, recordName: '' })}
        title="Reject Record"
      >
        <div style={{ padding: '0 4px' }}>
          <p style={{ marginBottom: '12px', color: theme.colors.gray700 }}>
            Please provide a reason for rejecting the record for <strong>{rejectModal.recordName}</strong>. 
            This will be sent to the applicant.
          </p>
          <TextArea
            placeholder="Enter rejection reason..."
            value={rejectionReason}
            onChange={(e) => setRejectionReason(e.target.value)}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '24px' }}>
            <button
              onClick={() => setRejectModal({ isOpen: false, recordId: null, recordName: '' })}
              style={{
                padding: '10px 16px',
                background: 'white',
                border: `1px solid ${theme.colors.gray300}`,
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 600,
                color: theme.colors.gray700
              }}
            >
              Cancel
            </button>
            <button
              onClick={confirmReject}
              disabled={processing}
              style={{
                padding: '10px 16px',
                background: theme.colors.danger,
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 600,
                color: 'white',
                opacity: processing ? 0.7 : 1
              }}
            >
              {processing ? "Rejecting..." : "Reject Record"}
            </button>
          </div>
        </div>
      </Modal>

      {/* View Details Modal */}
      <Modal
          isOpen={viewModal.isOpen}
          onClose={() => setViewModal({ isOpen: false, record: null })}
          title="Record Details"
          maxWidth="800px"
          footer={
            <div style={{ display: 'flex', gap: '12px', width: '100%', justifyContent: 'flex-end' }}>
               <Button
                  $variant="secondary"
                  onClick={() => setViewModal({ isOpen: false, record: null })}
                >
                  Close
                </Button>
               {viewModal.record && (
                 <>
                    <Button
                      $variant="danger"
                      onClick={() => {
                        const rec = viewModal.record;
                        setViewModal({ isOpen: false, record: null });
                        handleRejectClick(rec);
                      }}
                    >
                      Reject
                    </Button>
                    <Button
                      $variant="success"
                      onClick={() => {
                         const rec = viewModal.record;
                         setViewModal({ isOpen: false, record: null });
                         handleVerifyClick(rec);
                      }}
                    >
                      Verify
                    </Button>
                 </>
               )}
            </div>
          }
        >
          {viewModal.record ? (
            <div style={{ padding: '0 8px' }}>
              <SectionTitle>Deceased Information</SectionTitle>
              <ViewGrid>
                <ViewItem>
                  <ViewLabel>Full Name</ViewLabel>
                  <ViewValue>{`${viewModal.record.firstName} ${viewModal.record.lastName}`}</ViewValue>
                </ViewItem>
                <ViewItem>
                  <ViewLabel>Gender</ViewLabel>
                  <ViewValue>{viewModal.record.gender || 'N/A'}</ViewValue>
                </ViewItem>
                <ViewItem>
                  <ViewLabel>Age</ViewLabel>
                  <ViewValue>{viewModal.record.age ? `${viewModal.record.age} (${viewModal.record.ageCategory})` : 'N/A'}</ViewValue>
                </ViewItem>
                <ViewItem>
                  <ViewLabel>Date of Death</ViewLabel>
                  <ViewValue>{formatDate(viewModal.record.dateOfDeath)}</ViewValue>
                </ViewItem>
                <ViewItem>
                  <ViewLabel>Burial Location</ViewLabel>
                  <ViewValue>{viewModal.record.burialLocation || 'N/A'}</ViewValue>
                </ViewItem>
              </ViewGrid>
              
              <SectionTitle>Next of Kin Details</SectionTitle>
              <ViewGrid>
                <ViewItem>
                  <ViewLabel>Name</ViewLabel>
                  <ViewValue>{viewModal.record.nextOfKinName || 'N/A'}</ViewValue>
                </ViewItem>
                <ViewItem>
                  <ViewLabel>Contact</ViewLabel>
                  <ViewValue>{viewModal.record.nextOfKinContact || 'N/A'}</ViewValue>
                </ViewItem>
              </ViewGrid>

              <SectionTitle>Services & Payment</SectionTitle>
              <ViewGrid>
                <ViewItem>
                  <ViewLabel>Primary Service</ViewLabel>
                  <ViewValue>{viewModal.record.primaryService || 'N/A'}</ViewValue>
                </ViewItem>
                <ViewItem>
                  <ViewLabel>Primary Amount</ViewLabel>
                  <ViewValue>{viewModal.record.amountPaidBurial ? `KES ${viewModal.record.amountPaidBurial.toLocaleString()}` : '0'}</ViewValue>
                </ViewItem>
                
                {viewModal.record.secondaryService && viewModal.record.secondaryService !== 'None' && (
                  <>
                    <ViewItem>
                        <ViewLabel>Secondary Service</ViewLabel>
                        <ViewValue>{viewModal.record.secondaryService}</ViewValue>
                    </ViewItem>
                    <ViewItem>
                        <ViewLabel>Secondary Amount</ViewLabel>
                        <ViewValue>{viewModal.record.amountPaidSecondary ? `KES ${viewModal.record.amountPaidSecondary.toLocaleString()}` : '0'}</ViewValue>
                    </ViewItem>
                  </>
                )}
                
                 {viewModal.record.tertiaryService && viewModal.record.tertiaryService !== 'None' && (
                  <>
                    <ViewItem>
                        <ViewLabel>Tertiary Service</ViewLabel>
                        <ViewValue>{viewModal.record.tertiaryService}</ViewValue>
                    </ViewItem>
                    <ViewItem>
                        <ViewLabel>Tertiary Amount</ViewLabel>
                        <ViewValue>{viewModal.record.amountPaidTertiary ? `KES ${viewModal.record.amountPaidTertiary.toLocaleString()}` : '0'}</ViewValue>
                    </ViewItem>
                  </>
                )}
                
                 <ViewItem>
                  <ViewLabel>M-Pesa Ref No</ViewLabel>
                  <ViewValue>{viewModal.record.mpesaRefNo || 'N/A'}</ViewValue>
                </ViewItem>
                <ViewItem>
                  <ViewLabel>Receipt No</ViewLabel>
                  <ViewValue>{viewModal.record.receiptNo || 'N/A'}</ViewValue>
                </ViewItem>
              </ViewGrid>

              <SectionTitle>Submission Info</SectionTitle>
               <ViewGrid>
                <ViewItem>
                  <ViewLabel>Submitted On</ViewLabel>
                  <ViewValue>{formatDate(viewModal.record.createdAt)}</ViewValue>
                </ViewItem>
              </ViewGrid>
  
              <SectionTitle>Attachments</SectionTitle>
              {viewModal.record.attachments && viewModal.record.attachments.length > 0 ? (
                <AttachmentGrid>
                  {viewModal.record.attachments.map((att, index) => {
                      // Handle both new structure (filename, path) and potential old structure (name, url)
                      const attachmentUrl = att.path || att.url;
                      const attachmentName = att.filename || att.name || `Attachment ${index + 1}`;
                      // Check extension for image
                      const isImage = attachmentUrl?.match(/\.(jpeg|jpg|gif|png|webp)$/i) || (att.type && att.type.startsWith('image/'));

                      return (
                        <AttachmentCard key={index} onClick={() => window.open(attachmentUrl, '_blank')} style={{ cursor: 'pointer' }}>
                        <AttachmentPreview>
                            {isImage ? (
                            <img src={attachmentUrl} alt="Attachment" />
                            ) : (
                            <MdDescription size={48} color={theme.colors.primarySolid} />
                            )}
                        </AttachmentPreview>
                        <AttachmentMeta>
                            <div className="name" title={attachmentName}>{attachmentName}</div>
                            <div className="type">{isImage ? 'Image' : 'Document'}</div>
                        </AttachmentMeta>
                        </AttachmentCard>
                    );
                  })}
                </AttachmentGrid>
              ) : (
                <div style={{ padding: '24px', textAlign: 'center', color: theme.colors.gray500, background: theme.colors.gray50, borderRadius: theme.borderRadius.md, border: `1px dashed ${theme.colors.gray300}` }}>
                  No attachments available for this record.
                </div>
              )}
            </div>
          ) : (
            <div style={{ padding: '40px', textAlign: 'center', color: theme.colors.gray500 }}>
              Searching records...
            </div>
          )}
        </Modal>

    </RecordsContainer>
  );
}

export default VerifyRecords;
