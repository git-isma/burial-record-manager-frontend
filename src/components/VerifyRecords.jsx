import { useState, useEffect } from 'react';
import { apiService } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PageHeader, Card, StatusBadge, Button } from '../styles/CommonStyles';
import { theme } from '../styles/theme';
import { MdCheckCircle, MdCancel, MdVisibility, MdDescription, MdSearch, MdEdit } from 'react-icons/md';
import ModernDatePicker from './ModernDatePicker';
import { ConfirmModal } from './Modal';
import { useToast } from '../contexts/ToastContext';
import { useSettings } from '../contexts/SettingsContext';
import { TableSkeleton } from './LoadingSkeleton';
import EmptyState from './EmptyState';
import Modal from './Modal';

const FilterSection = styled(Card)`
  margin-bottom: ${theme.spacing.xl};
  
  h3 { 
    font-size: 16px; 
    font-weight: 700; 
    color: ${theme.colors.gray900}; 
    margin: 0 0 ${theme.spacing.lg} 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;

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
    width: 100%;

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
  &::before { 
    content: ''; 
    position: absolute; 
    left: 12px; 
    bottom: 12px; 
    width: 16px; 
    height: 16px; 
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%239ca3af" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>'); 
    background-repeat: no-repeat;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  flex-direction: column;
  justify-content: flex-start;
  margin-top: ${theme.spacing.sm};

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
    padding: 12px 10px; 
    text-align: left; 
    font-weight: 600; 
    color: ${theme.colors.gray700}; 
    border-bottom: 2px solid ${theme.colors.gray200}; 
    font-size: 11px; 
    text-transform: uppercase; 
    letter-spacing: 0.5px;

    body.dark-theme & {
      color: #b0b0b0;
      border-bottom-color: #3d3d3d;
    }
  }

  td { 
    padding: 12px 10px;
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


const VerifyContent = styled.div`
  text-align: center;
  padding: 8px 0;
`;

const VerifyIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: ${props => props.$variant === 'success' ? '#ecfdf5' : '#fff7ed'};
  color: ${props => props.$variant === 'success' ? '#10b981' : '#f59e0b'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 24px;
  font-size: 40px;
  box-shadow: 0 10px 20px -5px ${props => props.$variant === 'success' ? 'rgba(16, 185, 129, 0.25)' : 'rgba(245, 158, 11, 0.25)'};

  body.dark-theme & {
    background: ${props => props.$variant === 'success' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(245, 158, 11, 0.15)'};
  }
`;

const InfoCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.gray50} 0%, white 100%);
  border: 1px solid ${theme.colors.gray200};
  border-radius: 16px;
  padding: 24px;
  margin-top: 24px;
  text-align: left;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);

  body.dark-theme & {
    background: linear-gradient(135deg, #1f1f1f 0%, #2d2d2d 100%);
    border-color: #3d3d3d;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px dashed ${theme.colors.gray200};

  body.dark-theme & {
    border-bottom-color: #3d3d3d;
  }

  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const InfoLabel = styled.span`
  font-size: 11px;
  color: ${theme.colors.gray500};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.8px;
`;

const InfoValue = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.textPrimary};

  body.dark-theme & {
    color: white;
  }
`;

const ModalTitle = styled.h2`
  font-size: 22px;
  font-weight: 800;
  color: ${theme.colors.textPrimary};
  margin-bottom: 8px;
  letter-spacing: -0.5px;

  body.dark-theme & {
    color: white;
  }
`;

const ModalDesc = styled.p`
  font-size: 15px;
  color: ${theme.colors.gray600};
  line-height: 1.6;
  max-width: 400px;
  margin: 0 auto;

  body.dark-theme & {
    color: #9ca3af;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.xl};
  border-bottom: 2px solid ${theme.colors.gray200};

  body.dark-theme & {
    border-bottom-color: #3d3d3d;
  }
`;

const Tab = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  background: none;
  border: none;
  border-bottom: 3px solid transparent;
  color: ${theme.colors.gray600};
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  position: relative;
  bottom: -2px;

  body.dark-theme & {
    color: #9ca3af;
  }

  &:hover {
    color: ${theme.colors.primarySolid};
    background: ${theme.colors.gray50};

    body.dark-theme & {
      color: #a78bfa;
      background: #2d2d2d;
    }
  }

  &.active {
    color: ${theme.colors.primarySolid};
    border-bottom-color: ${theme.colors.primarySolid};

    body.dark-theme & {
      color: #a78bfa;
      border-bottom-color: #7c3aed;
    }
  }

  .count {
    display: inline-block;
    margin-left: ${theme.spacing.xs};
    padding: 2px 8px;
    background: ${theme.colors.gray200};
    border-radius: ${theme.borderRadius.full};
    font-size: 12px;
    font-weight: 700;

    body.dark-theme & {
      background: #3d3d3d;
    }
  }

  &.active .count {
    background: ${theme.colors.primarySolid};
    color: white;

    body.dark-theme & {
      background: #7c3aed;
    }
  }
`;

function VerifyRecords() {
  const navigate = useNavigate();
  const { formatDate } = useSettings();
  const { showToast } = useToast();
  const [activeTab, setActiveTab] = useState('public'); // 'public' or 'staff'
  const [records, setRecords] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ currentPage: 1, totalPages: 1, total: 0 });
  const [publicCount, setPublicCount] = useState(0);
  const [staffCount, setStaffCount] = useState(0);
  const [filters, setFilters] = useState({
    dateOfDeath: '',
    burialLocation: '',
    gender: '',
    applicantEmail: '',
    ageCategory: '',
    status: 'Pending'
  });

  // Modal States
  const [verifyModal, setVerifyModal] = useState({ isOpen: false, recordId: null, recordName: '' });
  const [rejectModal, setRejectModal] = useState({ isOpen: false, recordId: null, recordName: '' });
  const [viewModal, setViewModal] = useState({ isOpen: false, record: null });
  const [rejectionReason, setRejectionReason] = useState('');
  const [processing, setProcessing] = useState(false);
  const [nextNumbers, setNextNumbers] = useState({ recordNumber: '', receiptNo: '', discountApprovedBy: '' });

  useEffect(() => {
    fetchRecords();
    fetchLocations();
  }, [pagination.currentPage, activeTab]);

  // Fetch counts separately on mount and after actions
  useEffect(() => {
    fetchAllCounts();
  }, []);

  const fetchAllCounts = async () => {
    try {
      const res = await apiService.getPendingCounts();
      if (res.data.success) {
        setPublicCount(res.data.publicCount || 0);
        setStaffCount(res.data.staffCount || 0);
      }
    } catch (err) {
      console.error('Error fetching pending counts:', err);
    }
  };

  const fetchLocations = async () => {
    try {
      const res = await apiService.getLocations();
      if (Array.isArray(res.data)) {
        setLocations(res.data);
      } else if (res.data.success) {
        setLocations(res.data.data || []);
      }
    } catch (err) {
      console.error('Error fetching locations:', err);
    }
  };

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const params = {
        page: pagination.currentPage,
        limit: 10,
        ...filters,
        endDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0],
      };

      let res;
      if (activeTab === 'public') {
        // Fetch public records (from public submissions)
        res = await apiService.getPublicRecords(params);
      } else {
        // Fetch staff records (from staff data capture)
        res = await apiService.getRecords(params);
      }

      console.log('Fetch records response:', res.data);

      // Handle different response structures
      let data = [];
      let paging = {};

      if (activeTab === 'public') {
        // Public records response: { success: true, data: [...], pagination: {...} }
        if (res.data.success) {
          data = res.data.data || [];
          paging = res.data.pagination || {};
        }
      } else {
        // Staff records response: { records: [...], totalPages: X, currentPage: Y, totalRecords: Z }
        if (res.data.records) {
          data = res.data.records || [];
          paging = {
            currentPage: res.data.currentPage || 1,
            totalPages: res.data.totalPages || 1,
            total: res.data.totalRecords || 0
          };
        } else if (res.data.docs) {
          // Mongoose paginate format
          data = res.data.docs || [];
          paging = {
            currentPage: res.data.page || 1,
            totalPages: res.data.totalPages || 1,
            total: res.data.totalDocs || 0
          };
        }
      }

      setRecords(data);
      setPagination({
        currentPage: paging.currentPage || 1,
        totalPages: paging.totalPages || 1,
        total: paging.total || 0
      });
    } catch (err) {
      console.error('Error fetching records:', err);
      setRecords([]);
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyClick = async (record) => {
    setProcessing(true);
    try {
      const [recordRes, receiptRes] = await Promise.all([
        apiService.getLatestRecordNumber(),
        apiService.getLatestReceiptNumber()
      ]);

      const nextRecNum = recordRes.data.recordNumber;
      const nextReceiptNum = receiptRes.data.receiptNo;

      setNextNumbers({ recordNumber: nextRecNum, receiptNo: nextReceiptNum });
      setVerifyModal({
        isOpen: true,
        recordId: record._id,
        recordName: `${record.firstName} ${record.lastName}`,
        recordNumber: nextRecNum,
        receiptNo: nextReceiptNum,
        amountToPayNow: record.amountToPayNow,
        pendingAmount: record.pendingAmount,
        amountPayableBurial: record.amountPayableBurial,
        discountApprovedBy: record.discountApprovedBy
      });
    } catch (err) {
      console.error('Error fetching next numbers:', err);
      showToast('Error preparing verification. Please try again.', 'error');
    } finally {
      setProcessing(false);
    }
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
      let res;
      if (activeTab === 'public') {
        res = await apiService.getPublicRecord(record._id);
      } else {
        res = await apiService.getRecord(record._id);
      }

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
    } catch (err) {
      console.error("Failed to fetch details", err);
    }
  };

  const confirmVerify = async () => {
    setProcessing(true);
    try {
      const verifyData = {
        status: 'Verified',
        recordNumber: verifyModal.recordNumber,
        receiptNo: verifyModal.receiptNo,
        discountApprovedBy: verifyModal.discountApprovedBy
      };

      let res;
      if (activeTab === 'public') {
        res = await apiService.verifyPublicRecord(verifyModal.recordId, verifyData);
      } else {
        // For staff records, use the regular update endpoint
        res = await apiService.updateRecord(verifyModal.recordId, verifyData);
      }

      showToast(res.data.message || 'Record verified successfully', 'success');
      setVerifyModal({ isOpen: false, recordId: null, recordName: '', recordNumber: '', receiptNo: '', discountApprovedBy: '' });
      fetchRecords(); // Refresh list
      fetchAllCounts(); // Refresh counts
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
      const rejectData = {
        status: 'Rejected',
        rejectionReason
      };

      let res;
      if (activeTab === 'public') {
        res = await apiService.verifyPublicRecord(rejectModal.recordId, rejectData);
      } else {
        // For staff records, use the regular update endpoint
        res = await apiService.updateRecord(rejectModal.recordId, rejectData);
      }

      showToast(res.data.message || 'Record rejected', 'info');
      setRejectModal({ isOpen: false, recordId: null, recordName: '' });
      fetchRecords(); // Refresh list
      fetchAllCounts(); // Refresh counts
    } catch (err) {
      showToast(err.response?.data?.msg || 'Error rejecting record', 'error');
    } finally {
      setProcessing(false);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const applyFilters = () => {
    setPagination(prev => ({ ...prev, currentPage: 1 }));
    fetchRecords();
  };

  const resetFilters = () => {
    setFilters({
      dateOfDeath: '',
      burialLocation: '',
      gender: '',
      applicantEmail: '',
      ageCategory: ''
    });
    setPagination(prev => ({ ...prev, currentPage: 1 }));
    // Use timeout to ensure state update before fetch (or define fetchRecords to use passed params)
    // Here relying on effect dependency or manual call. 
    // Since fetchRecords uses 'filters' state, we need to wait for state update.
    // Better way: pass empty filters to fetchRecords, but our fetchRecords uses state.
    // Simple workaround:
    setTimeout(() => {
      // Trigger fetch manually with cleared filters for this call, or rely on effect if we add filters to dep array?
      // Current effect only watches pagination.currentPage.
      // So detailed fetchRecords is needed or a helper.
      // Let's just create a quick internal fetch with cleared params
      setLoading(true);
      apiService.getPublicRecords({
        page: 1,
        limit: 10,
        status: 'Pending',
        endDate: new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().split('T')[0]
      })
        .then(res => {
          if (res.data.success) {
            setRecords(res.data.data || []);
            const paging = res.data.pagination || {};
            setPagination({
              currentPage: 1,
              totalPages: paging.totalPages || 1,
              total: paging.total || 0
            });
          } else {
            setRecords([]);
          }
        })
        .finally(() => setLoading(false));
    }, 0);
  };

  return (
    <RecordsContainer>
      <PageHeader>
        <h1>Verify Records</h1>
        <p>Review and verify burial record submissions.</p>
      </PageHeader>

      <TabContainer>
        <Tab
          className={activeTab === 'public' ? 'active' : ''}
          onClick={() => {
            setActiveTab('public');
            setPagination({ currentPage: 1, totalPages: 1, total: 0 });
          }}
        >
          Public Submissions
          <span className="count">{publicCount}</span>
        </Tab>
        <Tab
          className={activeTab === 'staff' ? 'active' : ''}
          onClick={() => {
            setActiveTab('staff');
            setPagination({ currentPage: 1, totalPages: 1, total: 0 });
          }}
        >
          Staff Records
          <span className="count">{staffCount}</span>
        </Tab>
      </TabContainer>

      <FilterSection>
        <h3>Filter Records</h3>
        <FiltersGrid>
          <FormGroup>
            <label>Date of Death</label>
            <ModernDatePicker
              value={filters.dateOfDeath}
              onChange={handleFilterChange}
              name="dateOfDeath"
              placeholder="Pick a date"
            />
          </FormGroup>
          <FormGroup>
            <label>Burial Location</label>
            <select name="burialLocation" value={filters.burialLocation} onChange={handleFilterChange}>
              <option value="">All Locations</option>
              {locations.map((loc) => (
                <option key={loc._id} value={loc.name}>
                  {loc.name}
                </option>
              ))}
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
            <label>Applicant Email / ID</label>
            <input
              type="text"
              name="applicantEmail"
              placeholder="Enter Email or ID"
              value={filters.applicantEmail}
              onChange={handleFilterChange}
            />
          </FormGroup>
          <FormGroup>
            <label>Age Category</label>
            <select name="ageCategory" value={filters.ageCategory} onChange={handleFilterChange}>
              <option value="">All Categories</option>
              <option value="Stillborn">Stillborn</option>
              <option value="Infant">Infant</option>
              <option value="Child">Child</option>
              <option value="Adult">Adult</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>Status</label>
            <select name="status" value={filters.status} onChange={handleFilterChange}>
              <option value="Pending">Pending Verification</option>
              <option value="Rejected">Rejected</option>
              <option value="Verified">Verified (Public)</option>
            </select>
          </FormGroup>
        </FiltersGrid>
        <FilterButtons>
          <Button $variant="primary" onClick={applyFilters}>
            Apply Filters
          </Button>
          <Button $variant="secondary" onClick={resetFilters}>
            Reset
          </Button>
        </FilterButtons>
      </FilterSection>

      <RecordsCard>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ margin: 0 }}>
            {activeTab === 'public' ? 'Public Submissions' : 'Staff Records'} - Pending Verification
          </h3>
        </div>

        {loading ? (
          <TableSkeleton rows={5} />
        ) : records.length === 0 ? (
          <EmptyState
            icon={<MdDescription size={48} />}
            title="No Verification Pending Records"
            description={activeTab === 'public'
              ? "There are no public record submissions waiting for verification."
              : "There are no staff records waiting for verification."}
          />
        ) : (
          <>
            <TableWrapper>
              <StyledTable>
                <thead>
                  <tr>
                    <th>Applicant ID</th>
                    <th>Name</th>
                    <th>Date of Death</th>
                    <th>Burial Location</th>
                    <th>Submitted By</th>
                    <th>Applicant Mobile</th>
                    <th>Receipt No</th>
                    <th>Pending Amount</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {records.map(record => (
                    <tr key={record._id}>
                      <td>{record.applicantId || 'N/A'}</td>
                      <td>{`${record.firstName} ${record.middleName || ''} ${record.lastName}`}</td>
                      <td>{formatDate(record.dateOfDeath)}</td>
                      <td>{record.burialLocation}</td>
                      <td>{record.applicantEmail || 'N/A'}</td>
                      <td>{record.applicantPhone || 'N/A'}</td>
                      <td>{record.tempReceiptNo || record.receiptNo}</td>
                      <td>
                        <span style={{ fontWeight: 600, color: (record.pendingAmount || 0) > 0 ? theme.colors.danger : theme.colors.success }}>
                          KES {(record.pendingAmount || 0).toLocaleString()}
                        </span>
                      </td>
                      <td>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <ActionButton
                            className="view"
                            title="View Details"
                            onClick={() => handleViewClick(record)}
                          >
                            <MdVisibility />
                          </ActionButton>
                          {record.status === 'Pending' && (
                            <>
                              <ActionButton
                                className="verify"
                                title="Verify Record"
                                style={{ color: theme.colors.success }}
                                onClick={() => handleVerifyClick(record)}
                              >
                                <MdCheckCircle />
                              </ActionButton>
                              <ActionButton
                                className="reject"
                                title="Reject Record"
                                style={{ color: theme.colors.danger }}
                                onClick={() => handleRejectClick(record)}
                              >
                                <MdCancel />
                              </ActionButton>
                            </>
                          )}
                          {record.status === 'Rejected' && (
                            <ActionButton
                              className="edit"
                              title="Edit Rejected Record"
                              style={{ color: theme.colors.warning }}
                              onClick={() => navigate(`/data-capture?edit=${record._id}${activeTab === 'public' ? '&type=public' : ''}`)}
                            >
                              <MdEdit />
                            </ActionButton>
                          )}
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
                {pagination.currentPage < pagination.totalPages && (
                  <button onClick={() => setPagination({ ...pagination, currentPage: pagination.totalPages })}>
                    {pagination.totalPages}
                  </button>
                )}
                <button onClick={() => setPagination({ ...pagination, currentPage: pagination.currentPage + 1 })} disabled={pagination.currentPage === pagination.totalPages}>Next »</button>
              </Pagination>
            )}
          </>
        )}
      </RecordsCard>

      {/* Verify Confirmation Modal */}
      <ConfirmModal
        isOpen={verifyModal.isOpen}
        onClose={() => setVerifyModal({ isOpen: false, recordId: null, recordName: '', recordNumber: '', receiptNo: '', discountApprovedBy: '' })}
        onConfirm={confirmVerify}
        title="Verify Record"
        message={
          <VerifyContent>
            <VerifyIconWrapper $variant="success">
              <MdCheckCircle />
            </VerifyIconWrapper>
            <ModalTitle>Verify Record</ModalTitle>
            <ModalDesc>
              Are you sure you want to verify the record for <strong>{verifyModal.recordName}</strong>?
              This will assign a permanent record number and notify the applicant.
            </ModalDesc>

            <InfoCard>
              <SectionTitle style={{ fontSize: '12px', marginTop: 0 }}>Assignment Details</SectionTitle>
              <InfoRow>
                <InfoLabel>Record Number</InfoLabel>
                <InfoValue>{verifyModal.recordNumber || 'Generating...'}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Receipt Number</InfoLabel>
                <InfoValue>{verifyModal.receiptNo || 'Generating...'}</InfoValue>
              </InfoRow>

              <SectionTitle style={{ fontSize: '12px', marginTop: '16px' }}>Payment Summary</SectionTitle>
              <InfoRow>
                <InfoLabel>Amount Paid</InfoLabel>
                <InfoValue style={{ color: theme.colors.success }}>KES {(verifyModal.amountToPayNow || 0).toLocaleString()}</InfoValue>
              </InfoRow>
              <InfoRow>
                <InfoLabel>Pending Balance</InfoLabel>
                <InfoValue style={{ color: (verifyModal.pendingAmount || 0) > 0 ? theme.colors.danger : theme.colors.success }}>
                  KES {(verifyModal.pendingAmount || 0).toLocaleString()}
                </InfoValue>
              </InfoRow>
              <InfoRow style={{ borderBottom: 'none', paddingBottom: 0 }}>
                <InfoLabel>Discount Approved By</InfoLabel>
                <input
                  type="text"
                  placeholder="Approved by..."
                  value={verifyModal.discountApprovedBy || ''}
                  onChange={(e) => setVerifyModal(prev => ({ ...prev, discountApprovedBy: e.target.value }))}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid ' + (verifyModal.discountApprovedBy ? theme.colors.warning : theme.colors.gray300),
                    fontSize: '13px',
                    width: '180px',
                    textAlign: 'right',
                    fontWeight: 600,
                    outline: 'none',
                    background: verifyModal.discountApprovedBy ? '#fffcf0' : 'white'
                  }}
                />
              </InfoRow>
            </InfoCard>
          </VerifyContent>
        }
        confirmText={processing ? "Verifying..." : "Verify Record"}
        cancelText="Cancel"
        variant="success"
        icon={null}
      />

      {/* Reject Modal */}
      <Modal
        isOpen={rejectModal.isOpen}
        onClose={() => setRejectModal({ isOpen: false, recordId: null, recordName: '' })}
        title="Reject Record"
      >
        <VerifyContent>
          <VerifyIconWrapper $variant="danger" style={{ color: theme.colors.danger, background: '#fef2f2', boxShadow: '0 8px 16px -4px rgba(239, 68, 68, 0.2)' }}>
            <MdCancel />
          </VerifyIconWrapper>
          <ModalTitle>Reject Record</ModalTitle>
          <ModalDesc>
            Please provide a clear reason for rejecting the record for <strong>{rejectModal.recordName}</strong>.
            This notification will be sent to the applicant.
          </ModalDesc>

          <div style={{ marginTop: '24px', textAlign: 'left' }}>
            <label style={{ fontSize: '12px', fontWeight: 600, color: theme.colors.gray500, textTransform: 'uppercase', display: 'block', marginBottom: '8px', paddingLeft: '4px' }}>
              Rejection Reason
            </label>
            <textarea
              placeholder="e.g. Incomplete documentation, missing permit ID, etc."
              value={rejectionReason}
              onChange={(e) => setRejectionReason(e.target.value)}
              style={{
                width: '100%',
                minHeight: '120px',
                padding: '16px',
                borderRadius: '16px',
                border: `1px solid ${theme.colors.gray200}`,
                fontSize: '14px',
                fontFamily: 'inherit',
                lineHeight: '1.6',
                background: theme.colors.gray50,
                resize: 'vertical',
                outline: 'none',
                transition: 'all 0.2s'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = theme.colors.danger;
                e.target.style.boxShadow = '0 0 0 4px rgba(239, 68, 68, 0.1)';
                e.target.style.background = 'white';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = theme.colors.gray200;
                e.target.style.boxShadow = 'none';
                e.target.style.background = theme.colors.gray50;
              }}
            />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '32px' }}>
            <Button
              $variant="secondary"
              onClick={() => setRejectModal({ isOpen: false, recordId: null, recordName: '' })}
              style={{ padding: '12px 24px' }}
            >
              Cancel
            </Button>
            <Button
              onClick={confirmReject}
              disabled={processing}
              style={{
                padding: '12px 24px',
                background: theme.colors.danger,
                color: 'white',
                border: 'none',
                opacity: processing ? 0.7 : 1
              }}
            >
              {processing ? "Rejecting..." : "Reject Record"}
            </Button>
          </div>
        </VerifyContent>
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
              {viewModal.record.recordNumber && (
                <ViewItem>
                  <ViewLabel>Record Number</ViewLabel>
                  <ViewValue>{viewModal.record.recordNumber}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.firstName && (
                <ViewItem>
                  <ViewLabel>First Name</ViewLabel>
                  <ViewValue>{viewModal.record.firstName}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.middleName && (
                <ViewItem>
                  <ViewLabel>Middle Name</ViewLabel>
                  <ViewValue>{viewModal.record.middleName}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.lastName && (
                <ViewItem>
                  <ViewLabel>Last Name</ViewLabel>
                  <ViewValue>{viewModal.record.lastName}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.idPassportNo && (
                <ViewItem>
                  <ViewLabel>ID / Passport No</ViewLabel>
                  <ViewValue>{viewModal.record.idPassportNo}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.gender && (
                <ViewItem>
                  <ViewLabel>Gender</ViewLabel>
                  <ViewValue>{viewModal.record.gender}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.age && (
                <ViewItem>
                  <ViewLabel>Age</ViewLabel>
                  <ViewValue>{viewModal.record.age}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.ageCategory && (
                <ViewItem>
                  <ViewLabel>Age Category</ViewLabel>
                  <ViewValue>{viewModal.record.ageCategory}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.nationality && (
                <ViewItem>
                  <ViewLabel>Nationality</ViewLabel>
                  <ViewValue>{viewModal.record.nationality}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.dateOfDeath && (
                <ViewItem>
                  <ViewLabel>Date of Death</ViewLabel>
                  <ViewValue>{formatDate(viewModal.record.dateOfDeath)}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.dateOfBurial && (
                <ViewItem>
                  <ViewLabel>Date of Burial</ViewLabel>
                  <ViewValue>{formatDate(viewModal.record.dateOfBurial)}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.discountApprovedBy && (
                <ViewItem>
                  <ViewLabel>Discount Approved By</ViewLabel>
                  <ViewValue style={{ color: theme.colors.warning, fontWeight: 700 }}>
                    {viewModal.record.discountApprovedBy}
                  </ViewValue>
                </ViewItem>
              )}
            </ViewGrid>

            {viewModal.record.status === 'Rejected' && (
              <div style={{ marginBottom: '24px', padding: '16px', backgroundColor: '#fef2f2', border: '1px solid #fee2e2', borderRadius: '12px' }}>
                <SectionTitle style={{ color: '#991b1b', marginBottom: '8px', border: 'none' }}>Rejection Details</SectionTitle>
                <div style={{ fontSize: '14px', color: '#b91c1c' }}>
                  <strong>Reason:</strong> {viewModal.record.rejectionReason || 'No reason specified'}
                </div>
              </div>
            )}

            <SectionTitle>Next of Kin Information</SectionTitle>
            <ViewGrid>
              {viewModal.record.nextOfKinName && (
                <ViewItem>
                  <ViewLabel>Name</ViewLabel>
                  <ViewValue>{viewModal.record.nextOfKinName}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.nextOfKinRelationship && (
                <ViewItem>
                  <ViewLabel>Relationship</ViewLabel>
                  <ViewValue>{viewModal.record.nextOfKinRelationship}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.nextOfKinContact && (
                <ViewItem>
                  <ViewLabel>Contact</ViewLabel>
                  <ViewValue>{viewModal.record.nextOfKinContact}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.nextOfKinIdPassport && (
                <ViewItem>
                  <ViewLabel>ID / Passport No</ViewLabel>
                  <ViewValue>{viewModal.record.nextOfKinIdPassport}</ViewValue>
                </ViewItem>
              )}
            </ViewGrid>

            <SectionTitle>Burial Permit Details</SectionTitle>
            <ViewGrid>
              {viewModal.record.burialPermitNumber && (
                <ViewItem>
                  <ViewLabel>Permit Number</ViewLabel>
                  <ViewValue>{viewModal.record.burialPermitNumber}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.burialPermitDate && (
                <ViewItem>
                  <ViewLabel>Permit Date</ViewLabel>
                  <ViewValue>{formatDate(viewModal.record.burialPermitDate)}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.burialPermitIssuedBy && (
                <ViewItem>
                  <ViewLabel>Issued By</ViewLabel>
                  <ViewValue>{viewModal.record.burialPermitIssuedBy}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.burialPermitIssuedByContact && (
                <ViewItem>
                  <ViewLabel>Issuer Contact</ViewLabel>
                  <ViewValue>{viewModal.record.burialPermitIssuedByContact}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.burialPermitIssuedTo && (
                <ViewItem>
                  <ViewLabel>Issued To</ViewLabel>
                  <ViewValue>{viewModal.record.burialPermitIssuedTo}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.burialPermitIssuedToContact && (
                <ViewItem>
                  <ViewLabel>Recipient Contact</ViewLabel>
                  <ViewValue>{viewModal.record.burialPermitIssuedToContact}</ViewValue>
                </ViewItem>
              )}
            </ViewGrid>

            <SectionTitle>Burial Location & Services</SectionTitle>
            <ViewGrid>
              {viewModal.record.burialLocation && (
                <ViewItem>
                  <ViewLabel>Burial Location</ViewLabel>
                  <ViewValue>{viewModal.record.burialLocation}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.primaryService && (
                <ViewItem>
                  <ViewLabel>Primary Service</ViewLabel>
                  <ViewValue>{viewModal.record.primaryService}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.amountPayableBurial && (
                <ViewItem>
                  <ViewLabel>Amount Payable for Burial</ViewLabel>
                  <ViewValue>KES {viewModal.record.amountPayableBurial.toLocaleString()}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.secondaryService && viewModal.record.secondaryService !== 'None' && (
                <ViewItem>
                  <ViewLabel>Secondary Service</ViewLabel>
                  <ViewValue>{viewModal.record.secondaryService}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.amountPayableSecondary && (
                <ViewItem>
                  <ViewLabel>Secondary Amount</ViewLabel>
                  <ViewValue>KES {viewModal.record.amountPayableSecondary.toLocaleString()}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.tertiaryService && viewModal.record.tertiaryService !== 'None' && (
                <ViewItem>
                  <ViewLabel>Other Services</ViewLabel>
                  <ViewValue>{viewModal.record.tertiaryService}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.amountPayableTertiary && (
                <ViewItem>
                  <ViewLabel>Other Services Amount</ViewLabel>
                  <ViewValue>KES {viewModal.record.amountPayableTertiary.toLocaleString()}</ViewValue>
                </ViewItem>
              )}
            </ViewGrid>

            <SectionTitle>Payment Information</SectionTitle>
            <ViewGrid>
              {viewModal.record.amountToPayNow !== undefined && (
                <ViewItem>
                  <ViewLabel>Amount to Pay Now</ViewLabel>
                  <ViewValue>KES {viewModal.record.amountToPayNow.toLocaleString()}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.pendingAmount !== undefined && (
                <ViewItem>
                  <ViewLabel>Pending Amount</ViewLabel>
                  <ViewValue>KES {viewModal.record.pendingAmount.toLocaleString()}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.mpesaRefNo && (
                <ViewItem>
                  <ViewLabel>M-Pesa Ref No</ViewLabel>
                  <ViewValue>{viewModal.record.mpesaRefNo}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.receiptNo && (
                <ViewItem>
                  <ViewLabel>Receipt No</ViewLabel>
                  <ViewValue>{viewModal.record.receiptNo}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.tempReceiptNo && (
                <ViewItem>
                  <ViewLabel>Temp Receipt No</ViewLabel>
                  <ViewValue>{viewModal.record.tempReceiptNo}</ViewValue>
                </ViewItem>
              )}
              <ViewItem>
                <ViewLabel>Discount Approved By</ViewLabel>
                <ViewValue style={viewModal.record.discountApprovedBy ? {
                  backgroundColor: '#fef3c7',
                  padding: '8px 12px',
                  borderRadius: '6px',
                  border: '1px solid #f59e0b',
                  color: '#92400e',
                  fontWeight: 600
                } : {
                  color: '#9ca3af',
                  fontStyle: 'italic'
                }}>
                  {viewModal.record.discountApprovedBy || 'N/A'}
                </ViewValue>
              </ViewItem>
            </ViewGrid>

            <SectionTitle>Submission Information</SectionTitle>
            <ViewGrid>
              {viewModal.record.recordNumber && (
                <ViewItem>
                  <ViewLabel>Record Number</ViewLabel>
                  <ViewValue>{viewModal.record.recordNumber}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.applicantId && (
                <ViewItem>
                  <ViewLabel>Applicant ID</ViewLabel>
                  <ViewValue>{viewModal.record.applicantId}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.applicantName && (
                <ViewItem>
                  <ViewLabel>Applicant Name</ViewLabel>
                  <ViewValue>{viewModal.record.applicantName}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.applicantEmail && (
                <ViewItem>
                  <ViewLabel>Applicant Email</ViewLabel>
                  <ViewValue>{viewModal.record.applicantEmail}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.applicantPhone && (
                <ViewItem>
                  <ViewLabel>Applicant Phone</ViewLabel>
                  <ViewValue>{viewModal.record.applicantPhone}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.applicantIdPassport && (
                <ViewItem>
                  <ViewLabel>Applicant ID / Passport</ViewLabel>
                  <ViewValue>{viewModal.record.applicantIdPassport}</ViewValue>
                </ViewItem>
              )}
              {viewModal.record.createdAt && (
                <ViewItem>
                  <ViewLabel>Submitted On</ViewLabel>
                  <ViewValue>{formatDate(viewModal.record.createdAt)}</ViewValue>
                </ViewItem>
              )}
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
