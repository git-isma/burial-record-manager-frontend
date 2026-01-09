import { useState, useEffect } from 'react';
import { apiService } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PageHeader, Card, StatusBadge } from '../styles/CommonStyles';
import { theme } from '../styles/theme';
import ModernDatePicker from './ModernDatePicker';
import { MdVisibility, MdEdit, MdDownload, MdDelete, MdSchedule, MdCheckCircle, MdVerified, MdCancel } from 'react-icons/md';
import { ConfirmModal } from './Modal';
import { useToast } from '../contexts/ToastContext';
import { useSettings } from '../contexts/SettingsContext';
import { TableSkeleton } from './LoadingSkeleton';
import EmptyState from './EmptyState';
import { MdDescription } from 'react-icons/md';

const RecordsContainer = styled.div`
  font-family: ${theme.fonts.body};
`;

const FilterSection = styled(Card)`
  margin-bottom: ${theme.spacing.xl};
  position: relative;
  z-index: 50;
  
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

const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  label { 
    font-size: 13px; 
    font-weight: 500; 
    color: ${theme.colors.gray700}; 
    margin-bottom: 6px;

    body.dark-theme & {
      color: #b0b0b0;
    }
  }
  input, select {
    padding: 10px 12px;
    border: 1px solid ${theme.colors.gray300};
    border-radius: ${theme.borderRadius.md};
    font-size: 14px;
    color: ${theme.colors.textPrimary};
    background: white;
    transition: all ${theme.transitions.fast};

    body.dark-theme & {
      background: #2d2d2d;
      border-color: #3d3d3d;
      color: #e5e5e5;
    }

    &:focus { 
      outline: none; 
      border-color: ${theme.colors.primarySolid}; 
      box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.1);

      body.dark-theme & {
        border-color: #7c3aed;
      }
    }
    &::placeholder { 
      color: ${theme.colors.gray400};

      body.dark-theme & {
        color: #6d6d6d;
      }
    }
  }
`;

const SearchGroup = styled(FormGroup)`
  position: relative;
  input { padding-left: 36px; }
  &::before { content: '🔍'; position: absolute; left: 12px; bottom: 11px; font-size: 14px; }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  button {
    width: 100%;

    @media (min-width: 640px) {
      width: auto;
    }
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: ${theme.borderRadius.md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  border: none;
  ${props => props.$variant === 'primary' && `background: ${theme.colors.primarySolid}; color: white; &:hover { background: ${theme.colors.primaryHover}; }`}
  ${props => props.$variant === 'secondary' && `background: white; color: ${theme.colors.gray700}; border: 1px solid ${theme.colors.gray300}; &:hover { background: ${theme.colors.gray50}; }`}
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

  @media (min-width: 768px) {
    border: none;
    overflow-x: visible;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
  min-width: 600px;

  @media (min-width: 768px) {
    min-width: auto;
    font-size: 13px;
  }

  thead { 
    background: ${theme.colors.gray50};
    display: none;
    position: sticky;
    top: 0;
    z-index: 10;

    body.dark-theme & {
      background: #1f1f1f;
    }

    @media (min-width: 768px) {
      display: table-header-group;
    }
  }

  th { 
    padding: 12px 16px; 
    text-align: left; 
    font-weight: 600; 
    color: ${theme.colors.gray700}; 
    border-bottom: 2px solid ${theme.colors.gray200}; 
    font-size: 11px; 
    text-transform: uppercase; 
    letter-spacing: 0.5px;
    white-space: nowrap;

    body.dark-theme & {
      color: #b0b0b0;
      border-bottom-color: #3d3d3d;
    }

    @media (min-width: 768px) {
      font-size: 12px;
    }
  }

  tbody {
    display: block;

    @media (min-width: 768px) {
      display: table-row-group;
    }
  }

  tr {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 0;
    margin-bottom: 12px;
    border: 1px solid ${theme.colors.gray200};
    border-radius: ${theme.borderRadius.lg};
    overflow: hidden;
    background: white;

    body.dark-theme & {
      background: #2d2d2d;
      border-color: #3d3d3d;
    }

    @media (min-width: 640px) {
      margin-bottom: 14px;
    }

    @media (min-width: 768px) {
      display: table-row;
      margin-bottom: 0;
      border: none;
      border-bottom: 1px solid ${theme.colors.gray200};
      border-radius: 0;
      background: transparent;
    }
  }

  td { 
    padding: 12px 16px;
    color: ${theme.colors.textPrimary}; 
    border-bottom: 1px solid ${theme.colors.gray200};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    text-align: left;
    position: relative;
    min-height: 44px;
    flex-direction: column;
    gap: 4px;

    body.dark-theme & {
      color: #e5e5e5;
      border-bottom-color: #3d3d3d;
    }

    @media (min-width: 768px) {
      display: table-cell;
      text-align: left;
      justify-content: flex-start;
      flex-direction: row;
      gap: 0;
      padding: 16px;
      border-bottom: 1px solid ${theme.colors.gray200};
      min-height: auto;

      body.dark-theme & {
        border-bottom-color: #3d3d3d;
      }
    }

    &:first-child {
      grid-column: 1;
      justify-content: center;
      flex-direction: row;
      padding: 12px 8px;

      @media (min-width: 768px) {
        grid-column: auto;
        padding: 16px;
      }
    }

    &:not(:first-child) {
      grid-column: 2;
      border-left: 1px solid ${theme.colors.gray200};
      flex-direction: column;
      align-items: flex-start;

      body.dark-theme & {
        border-left-color: #3d3d3d;
      }

      @media (min-width: 768px) {
        grid-column: auto;
        border-left: none;
        flex-direction: row;
        align-items: center;
      }

      &::before {
        content: attr(data-label);
        font-weight: 600;
        color: ${theme.colors.gray700};
        font-size: 10px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        order: -1;

        body.dark-theme & {
          color: #b0b0b0;
        }

        @media (min-width: 768px) {
          display: none;
        }
      }
    }
  }

  tbody tr { 
    transition: all ${theme.transitions.fast}; 
    &:hover { 
      background: ${theme.colors.gray50};
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

      body.dark-theme & {
        background: #353535;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      }

      @media (min-width: 768px) {
        background: ${theme.colors.gray50};
        box-shadow: none;
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
  font-size: 16px;
  border-radius: 4px;
  transition: all ${theme.transitions.fast};

  body.dark-theme & {
    color: #b0b0b0;
  }

  &:hover { 
    background: ${theme.colors.gray100}; 
    color: ${theme.colors.primarySolid};

    body.dark-theme & {
      background: #3d3d3d;
      color: #a78bfa;
    }
  }
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
    min-width: 36px;
    transition: all ${theme.transitions.fast};

    body.dark-theme & {
      background: #2d2d2d;
      border-color: #3d3d3d;
      color: #e5e5e5;
    }

    &:hover:not(:disabled) { 
      background: ${theme.colors.gray50}; 
      border-color: ${theme.colors.primarySolid}; 
      color: ${theme.colors.primarySolid};

      body.dark-theme & {
        background: #353535;
        border-color: #7c3aed;
        color: #a78bfa;
      }
    }
    &.active { 
      background: ${theme.colors.primarySolid}; 
      color: white; 
      border-color: ${theme.colors.primarySolid};

      body.dark-theme & {
        background: #7c3aed;
        border-color: #7c3aed;
      }
    }
    &:disabled { opacity: 0.5; cursor: not-allowed; }
  }
  span { 
    color: ${theme.colors.gray400};
    padding: 0 4px;

    body.dark-theme & {
      color: #6d6d6d;
    }
  }
`;

const Footer = styled.div`
  text-align: center;
  padding: 24px;
  color: ${theme.colors.gray500};
  font-size: 12px;

  body.dark-theme & {
    color: #a0a0a0;
  }
`;

function Records({ user }) {
  const navigate = useNavigate();
  const { formatDate } = useSettings();
  const [records, setRecords] = useState([]);
  const [filters, setFilters] = useState({ 
    search: '', 
    burialLocation: '', 
    status: '', 
    gender: '', 
    dateRange: new Date().toISOString().split('T')[0] 
  });
  const [pagination, setPagination] = useState({ currentPage: 1, totalPages: 1, total: 0 });
  const [loading, setLoading] = useState(false);
  const [selectedRecords, setSelectedRecords] = useState([]);
  const [bulkDeleteModal, setBulkDeleteModal] = useState({ isOpen: false });

  useEffect(() => { fetchRecords(); }, []);
  useEffect(() => { fetchRecords(); }, [pagination.currentPage]);

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const params = { ...filters, page: pagination.currentPage, limit: 10 };
      
      // If user is data entry, only show their records
      if (user?.role === 'data_entry') {
        params.createdBy = user._id;
      }
      
      const res = await apiService.getRecords(params);
      setRecords(res.data.records || []);
      setPagination({ currentPage: res.data.currentPage || 1, totalPages: res.data.totalPages || 1, total: res.data.total || 0 });
    } catch (err) {
      console.error('Error fetching records:', err);
      showToast(err.response?.data?.msg || 'Failed to load records', 'error');
      setRecords([]);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (e) => { setFilters({ ...filters, [e.target.name]: e.target.value }); };
  const applyFilters = () => { setPagination({ ...pagination, currentPage: 1 }); fetchRecords(); };
  const resetFilters = () => { 
    setFilters({ 
      search: '', 
      burialLocation: '', 
      status: '', 
      gender: '', 
      dateRange: new Date().toISOString().split('T')[0] 
    }); 
    setPagination({ ...pagination, currentPage: 1 }); 
    setTimeout(fetchRecords, 100); 
  };
  const handleView = (id) => { navigate(`/document/${id}`); };
  const handleEdit = (id) => { navigate(`/data-capture?edit=${id}`); };
  const handleDownload = (record) => {
    const fullName = `${record.firstName} ${record.middleName || ''} ${record.lastName}`.replace(/\s+/g, ' ').trim();
    const recordData = `Burial Record: ${record.recordNumber}\nName: ${fullName}\nDate of Death: ${formatDate(record.dateOfDeath)}\nNext of Kin: ${record.nextOfKinName}\nBurial Location: ${record.burialLocation}\nStatus: ${record.status}`;
    const blob = new Blob([recordData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${record.recordNumber}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const { showToast } = useToast();

  const handleSelectRecord = (recordId) => {
    setSelectedRecords(prev =>
      prev.includes(recordId)
        ? prev.filter(id => id !== recordId)
        : [...prev, recordId]
    );
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedRecords(records.map(record => record._id));
    } else {
      setSelectedRecords([]);
    }
  };

  const handleBulkDeleteClick = () => {
    if (selectedRecords.length === 0) {
      showToast('Please select records to delete', 'warning');
      return;
    }
    setBulkDeleteModal({ isOpen: true });
  };

  const confirmBulkDelete = async () => {
    try {
      const res = await apiService.bulkDeleteRecords(selectedRecords);

      // Close modal first
      setBulkDeleteModal({ isOpen: false });
      setSelectedRecords([]);

      // Show toast after a brief delay
      setTimeout(() => {
        showToast(res.data.msg || 'Records deleted successfully', 'success');
      }, 100);

      fetchRecords();
    } catch (err) {
      showToast(err.response?.data?.msg || 'Error deleting records', 'error');
    }
  };

  return (
    <RecordsContainer>
      <PageHeader>
        <h1>Burial Records</h1>
        <p>Manage and search through all recorded burial records efficiently.</p>
      </PageHeader>
      <FilterSection>
        <h3>Filter Records</h3>
        <FiltersGrid>
          <FormGroup>
            <label>Date Range</label>
            <ModernDatePicker
              value={filters.dateRange}
              onChange={handleFilterChange}
              name="dateRange"
              placeholder="Pick a date"
            />
          </FormGroup>
          <FormGroup>
            <label>Burial Location</label>
            <select name="burialLocation" value={filters.burialLocation} onChange={handleFilterChange}>
              <option value="">All Locations</option>
              <option value="Block A">Block A</option>
              <option value="Main">Main</option>
              <option value="Block B">Block B</option>
              <option value="Lan'gata">Lan'gata</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>Gender</label>
            <select name="gender" value={filters.gender} onChange={handleFilterChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>Status</label>
            <select name="status" value={filters.status} onChange={handleFilterChange}>
              <option value="">Select Status</option>
              <option value="Pending">Pending</option>
              <option value="Verified">Verified</option>
              <option value="Rejected">Rejected</option>
            </select>
          </FormGroup>
          <SearchGroup>
            <label>Search by Record ID/Name</label>
            <input type="text" name="search" placeholder="Enter Record ID or Name" value={filters.search} onChange={handleFilterChange} />
          </SearchGroup>
        </FiltersGrid>
        <FilterButtons>
          <Button $variant="primary" onClick={applyFilters}>Apply Filters</Button>
          <Button $variant="secondary" onClick={resetFilters}>Reset</Button>
        </FilterButtons>
      </FilterSection>
      <RecordsCard>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ margin: 0 }}>All Burial Records</h3>
          {selectedRecords.length > 0 && (
            <Button
              $variant="danger"
              onClick={handleBulkDeleteClick}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <MdDelete size={18} /> Delete Selected ({selectedRecords.length})
            </Button>
          )}
        </div>
        {loading ? (
          <TableSkeleton rows={10} />
        ) : records.length === 0 ? (
          <EmptyState
            icon={<MdDescription size={48} />}
            title="No Records Found"
            description="No burial records match your current filters. Try adjusting your search criteria or create a new record."
            action={() => navigate('/data-capture')}
            actionText="Create New Record"
            secondaryAction={resetFilters}
            secondaryActionText="Clear Filters"
          />
        ) : (
          <>
            <TableWrapper>
              <StyledTable>
                <thead>
                  <tr>
                    <th style={{ width: '40px' }}>
                      <input
                        type="checkbox"
                        onChange={handleSelectAll}
                        checked={selectedRecords.length === records.length && records.length > 0}
                        style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                      />
                    </th>
                    <th>Record No</th>
                    <th>Name</th>
                    <th>Date of Death</th>
                    <th>Burial Location</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map(record => (
                    <tr key={record._id}>
                      <td>
                        <input
                          type="checkbox"
                          checked={selectedRecords.includes(record._id)}
                          onChange={() => handleSelectRecord(record._id)}
                          style={{ cursor: 'pointer', width: '16px', height: '16px' }}
                        />
                      </td>
                      <td data-label="Record No" style={{ fontWeight: 600 }}>{record.recordNumber}</td>
                      <td data-label="Name">{`${record.firstName} ${record.middleName || ''} ${record.lastName}`.replace(/\s+/g, ' ').trim()}</td>
                      <td data-label="Date of Death">{formatDate(record.dateOfDeath)}</td>
                      <td data-label="Location">{record.burialLocation}</td>
                      <td data-label="Status">
                        <StatusBadge $status={record.status}>
                          {record.status === 'Pending' && <MdSchedule size={16} style={{ marginRight: '6px' }} />}
                          {record.status === 'Verified' && <MdVerified size={16} style={{ marginRight: '6px' }} />}
                          {record.status === 'Rejected' && <MdCancel size={16} style={{ marginRight: '6px' }} />}
                          {record.status}
                        </StatusBadge>
                      </td>
                      <td data-label="Actions">
                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                          <ActionButton title="View Details" onClick={() => handleView(record._id)}>
                            <MdVisibility size={18} />
                          </ActionButton>
                          <ActionButton title="Edit" onClick={() => handleEdit(record._id)}>
                            <MdEdit size={18} />
                          </ActionButton>
                          <ActionButton title="Download" onClick={() => handleDownload(record)}>
                            <MdDownload size={18} />
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
                {pagination.currentPage < pagination.totalPages - 1 && <span>...</span>}
                {pagination.currentPage < pagination.totalPages && <button>{pagination.totalPages}</button>}
                <button onClick={() => setPagination({ ...pagination, currentPage: pagination.currentPage + 1 })} disabled={pagination.currentPage === pagination.totalPages}>Next »</button>
              </Pagination>
            )}
          </>
        )}
      </RecordsCard>
      <Footer>© 2025 Burial Record Manager. All rights reserved.</Footer>

      {/* Bulk Delete Confirmation Modal */}
      <ConfirmModal
        isOpen={bulkDeleteModal.isOpen}
        onClose={() => setBulkDeleteModal({ isOpen: false })}
        onConfirm={confirmBulkDelete}
        title="Delete Multiple Records"
        message={`Are you sure you want to delete ${selectedRecords.length} record(s)? This action cannot be undone.`}
        confirmText="Delete All"
        cancelText="Cancel"
        variant="danger"
      />
    </RecordsContainer>
  );
}

export default Records;
