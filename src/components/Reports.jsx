import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiService } from '../utils/api';
import styled from 'styled-components';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, AreaChart, Area, Sector, RadialBarChart, RadialBar
} from 'recharts';
import { Card, Button, PageHeader, FormGroup, Alert } from '../styles/CommonStyles';
import { theme } from '../styles/theme';
import ModernDatePicker from './ModernDatePicker';
import {
  MdVisibility,
  MdDownload,
  MdPictureAsPdf,
  MdTableChart,
  MdBarChart,
  MdTrendingUp,
  MdTrendingDown,
  MdPeople,
  MdCheckCircle
} from 'react-icons/md';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import { useToast } from '../contexts/ToastContext';
import { useSettings } from '../contexts/SettingsContext';
import ismaLogo from '../assets/ISMA-logo.png';
import Spinner from './Spinner';
import EmptyState from './EmptyState';

const ReportsContainer = styled.div`
  font-family: ${theme.fonts.body};

  @media print {
    background: white;
    
    /* Hide page header, controls, and footer */
    & > div:first-child,  /* PageHeader */
    & > div:nth-child(2), /* Alert */
    & > div:nth-child(3), /* ControlsCard */
    & > div:last-child {  /* Footer */
      display: none !important;
    }
  }
`;

const ControlsCard = styled(Card)`
  margin-bottom: ${theme.spacing.xl};
  h2 { 
    font-size: 18px; 
    font-weight: 700; 
    margin: 0 0 4px 0;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
  p { 
    font-size: 13px; 
    color: ${theme.colors.gray500}; 
    margin: 0 0 ${theme.spacing.lg} 0;

    body.dark-theme & {
      color: #a0a0a0;
    }
  }

  @media print {
    display: none !important;
  }
`;

const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};

  @media (min-width: 768px) {
    flex-direction: row;
    gap: ${theme.spacing.md};
  }

  button {
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`;

const PrintHeader = styled.div`
  display: none;
  
  @media print {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${theme.colors.primary} !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    padding: 20px 30px;
    margin: -1px -1px 30px -1px;
    color: white !important;

    .print-logo {
      width: 75px;
      height: 75px;
      background: white;
      padding: 5px;
      border-radius: 4px;
      object-fit: contain;
    }

    .header-text {
      text-align: center;
      flex: 1;
      margin-left: -20px;
    }

    h1 {
      font-size: 24px;
      font-weight: 700;
      color: white !important;
      margin: 0;
      line-height: 1.2;
    }
    
    .tagline {
      font-size: 11px;
      font-weight: 700;
      text-transform: uppercase;
      color: rgba(255, 255, 255, 0.9) !important;
      margin-top: 5px;
    }

    .contact-line {
      font-size: 9px;
      color: rgba(255, 255, 255, 0.85) !important;
      margin-top: 3px;
    }

    .report-meta {
      margin-top: 12px;
      padding-top: 8px;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .report-title {
      font-size: 14px;
      font-weight: 700;
      color: white !important;
    }

    .report-date {
      font-size: 10px;
      color: rgba(255, 255, 255, 0.9) !important;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media print {
    page-break-after: avoid;
    margin-bottom: 20px;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }
`;

const StatCard = styled.div`
  background: white;
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid ${theme.colors.gray200};
  box-shadow: ${theme.shadows.sm};
  position: relative;

  @media (min-width: 768px) {
    padding: ${theme.spacing.lg};
  }

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #3d3d3d;
  }

  .stat-icon {
    position: absolute;
    top: 12px;
    right: 12px;
    font-size: 18px;
    opacity: 0.3;

    @media (min-width: 768px) {
      top: 16px;
      right: 16px;
      font-size: 20px;
    }
  }
  .stat-label { 
    font-size: 11px; 
    color: ${theme.colors.gray600}; 
    margin-bottom: 6px;
    font-weight: 500;

    @media (min-width: 768px) {
      font-size: 13px;
      margin-bottom: 8px;
    }

    body.dark-theme & {
      color: #b0b0b0;
    }
  }
  .stat-value { 
    font-size: 24px; 
    font-weight: 800; 
    color: ${theme.colors.textPrimary}; 
    margin-bottom: 4px;

    @media (min-width: 768px) {
      font-size: 36px;
    }

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
  .stat-trend { 
    font-size: 11px; 
    display: flex;
    align-items: center;
    gap: 4px;
    font-weight: 600;
    margin-top: 2px;

    &.up { color: #10b981; }
    &.down { color: #f43f5e; }
    &.neutral { color: ${theme.colors.gray500}; }

    @media (min-width: 768px) {
      font-size: 12px;
    }

    body.dark-theme & {
      &.up { color: #34d399; }
      &.down { color: #fb7185; }
      &.neutral { color: #a0a0a0; }
    }
  }

  @media print {
    box-shadow: none;
    border: 1px solid #ddd;
    page-break-inside: avoid;
    
    .stat-icon {
      display: none;
    }
  }
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: ${theme.spacing.xl};
  }

  @media print {
    page-break-inside: avoid;
    margin-bottom: 20px;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
`;

const ChartCard = styled(Card)`
  h3 { 
    font-size: 16px; 
    font-weight: 700; 
    margin: 0 0 4px 0;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
  p { 
    font-size: 13px; 
    color: ${theme.colors.gray500}; 
    margin: 0 0 ${theme.spacing.lg} 0;

    body.dark-theme & {
      color: #a0a0a0;
    }
  }

  @media print {
    box-shadow: none;
    border: 1px solid #ddd;
    page-break-inside: avoid;
  }
`;

const MapPlaceholder = styled.div`
  background: ${theme.colors.gray50};
  border: 2px dashed ${theme.colors.gray300};
  border-radius: ${theme.borderRadius.lg};
  padding: 60px;
  text-align: center;
  color: ${theme.colors.gray500};
  .icon { font-size: 48px; margin-bottom: 16px; }
  h4 { font-size: 15px; font-weight: 600; margin: 0 0 4px 0; }
  p { font-size: 13px; margin: 0; }
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
    padding: 14px 16px; 
    color: ${theme.colors.textPrimary}; 
    border-bottom: 1px solid ${theme.colors.gray200};

    body.dark-theme & {
      color: #e5e5e5;
      border-bottom-color: #3d3d3d;
    }
  }
  tbody tr:hover { 
    background: ${theme.colors.gray50};

    body.dark-theme & {
      background: #353535;
    }
  }

  @media print {
    font-size: 11px;
    
    th {
      background: #f5f5f5 !important;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
      padding: 8px 12px;
      font-size: 10px;
    }
    
    td {
      padding: 8px 12px;
    }
    
    tbody tr:hover {
      background: transparent;
    }
  }
`;

const StatusBadge = styled.span`
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: 600;
  background: ${props => {
    if (props.$status === 'Verified') return '#7C3AED';
    if (props.$status === 'Pending') return '#F59E0B';
    if (props.$status === 'Rejected') return '#EF4444';
    return '#10B981';
  }};
  color: white;
`;

const ActionLink = styled.button`
  background: ${theme.colors.gray100};
  border: none;
  color: ${theme.colors.gray700};
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s;

  body.dark-theme & {
    background: #3d3d3d;
    color: #b0b0b0;
  }
  
  &:hover {
    background: ${theme.colors.primarySolid};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    body.dark-theme & {
      background: #7c3aed;
    }
  }

  @media print {
    display: none !important;
  }
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid ${theme.colors.gray200};
  button { 
    padding: 6px 12px; 
    background: white; 
    border: 1px solid ${theme.colors.gray300}; 
    border-radius: 6px; 
    color: ${theme.colors.gray700}; 
    font-size: 13px; 
    cursor: pointer; 
    font-weight: 500;
    min-width: 36px;
  }
  button:hover:not(:disabled) { 
    background: ${theme.colors.gray50}; 
    border-color: ${theme.colors.primarySolid}; 
  }
  button.active { 
    background: ${theme.colors.primarySolid}; 
    color: white; 
    border-color: ${theme.colors.primarySolid}; 
  }
  button:disabled { 
    opacity: 0.5; 
    cursor: not-allowed; 
  }

  @media print {
    display: none !important;
  }
`;

const COLORS = ['#6366f1', '#8b5cf6', '#ec4899', '#f43f5e', '#f59e0b', '#10b981'];

const CustomTooltip = ({ active, payload, label, isDarkMode }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: isDarkMode ? '#1f1f1f' : 'white',
        border: `1px solid ${isDarkMode ? '#3d3d3d' : '#e5e7eb'}`,
        padding: '12px 16px',
        borderRadius: '12px',
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(8px)'
      }}>
        <p style={{ margin: '0 0 4px 0', fontSize: '12px', color: isDarkMode ? '#a0a0a0' : '#6b7280', fontWeight: 500 }}>
          {label}
        </p>
        <p style={{ margin: 0, fontSize: '16px', fontWeight: 700, color: isDarkMode ? '#fff' : '#111827' }}>
          {payload[0].value} <span style={{ fontSize: '12px', fontWeight: 500, color: isDarkMode ? '#b0b0b0' : '#4b5563' }}>Records</span>
        </p>
      </div>
    );
  }
  return null;
};

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} style={{ fontSize: '20px', fontWeight: 800 }}>
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill={fill} style={{ fontSize: '14px', fontWeight: 600 }}>{`${value} Records`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999" style={{ fontSize: '12px' }}>
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

function Reports() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { formatDate } = useSettings();
  // Detect dark mode
  const isDarkMode = document.body.classList.contains('dark-theme');
  const [stats, setStats] = useState(null);
  const [filteredRecords, setFilteredRecords] = useState([]);
  const [allRecords, setAllRecords] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [filters, setFilters] = useState({
    reportType: 'Summary',
    dateRange: 'all',
    ageCategory: '',
    gender: '',
    burialLocation: ''
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(50); // Increased default for reports
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [monthlyData, setMonthlyData] = useState([]);
  const [genderData, setGenderData] = useState([]);

  useEffect(() => {
    fetchStats();
    fetchFilteredRecords();
    fetchLocations();
  }, []);

  useEffect(() => {
    fetchFilteredRecords();
  }, [currentPage, pageSize, filters]);

  const [locations, setLocations] = useState([]);

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

  const fetchStats = async () => {
    try {
      const res = await apiService.getOverview();
      setStats(res.data);

      const genderStats = res.data.genderStats || [];
      setGenderData([
        { name: 'Male', value: genderStats.find(g => g._id === 'Male')?.count || 0 },
        { name: 'Female', value: genderStats.find(g => g._id === 'Female')?.count || 0 }
      ]);

      const monthlyTrend = res.data.monthlyTrend || [];
      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      setMonthlyData(monthlyTrend.map(item => ({
        month: monthNames[item._id.month - 1],
        Records: item.count
      })));
    } catch (err) {
      console.error('Error fetching stats:', err);
      showToast(err.response?.data?.message || 'Failed to load statistics', 'error');
      setStats(null);
    }
  };

  const getDateRange = () => {
    const now = new Date();
    let startDate = null;
    let endDate = new Date();
    endDate.setHours(23, 59, 59, 999);

    switch (filters.dateRange) {
      case 'all':
        // No date filtering - return null for both to get all records
        startDate = null;
        endDate = null;
        break;
      case 'last7days':
        startDate = new Date(now.setDate(now.getDate() - 7));
        break;
      case 'last30days':
        startDate = new Date(now.setDate(now.getDate() - 30));
        break;
      case 'last90days':
        startDate = new Date(now.setDate(now.getDate() - 90));
        break;
      case 'thisyear':
        startDate = new Date(now.getFullYear(), 0, 1);
        break;
      default:
        startDate = null;
        endDate = null;
    }

    return { startDate, endDate };
  };

  const fetchFilteredRecords = async () => {
    setLoading(true);
    try {
      const { startDate, endDate } = getDateRange();
      const params = {
        page: currentPage,
        limit: pageSize,
        ...(filters.gender && { gender: filters.gender }),
        ...(filters.ageCategory && { ageCategory: filters.ageCategory }),
        ...(filters.burialLocation && { burialLocation: filters.burialLocation }),
        ...(startDate && { startDate: startDate.toISOString() }),
        ...(endDate && { endDate: endDate.toISOString() })
      };

      const res = await apiService.getRecords(params);

      setFilteredRecords(res.data.records || []);
      setTotalPages(res.data.totalPages || 1);
      setMessage({ type: 'success', text: `Found ${res.data.total} records` });

      // Fetch all records for export (without pagination)
      const allParams = {
        limit: 15000, // Increased limit for large queries
        page: 1,
        ...(filters.gender && { gender: filters.gender }),
        ...(filters.ageCategory && { ageCategory: filters.ageCategory }),
        ...(filters.burialLocation && { burialLocation: filters.burialLocation }),
        ...(startDate && { startDate: startDate.toISOString() }),
        ...(endDate && { endDate: endDate.toISOString() })
      };
      const allRes = await apiService.getRecords(allParams);
      setAllRecords(allRes.data.records || []);
    } catch (err) {
      console.error('Error fetching filtered records:', err);
      const errorMsg = err.response?.data?.msg || err.response?.data?.message || 'Failed to load records';
      setMessage({ type: 'error', text: errorMsg });
      showToast(errorMsg, 'error');
      setFilteredRecords([]);
      setAllRecords([]);
    } finally {
      setLoading(false);
    }
  };

  const handleExportPDF = async () => {
    try {
      if (allRecords.length === 0) {
        showToast('No records to export. Please wait for data to load.', 'warning');
        return;
      }

      showToast('Generating PDF... Please wait', 'info');

      // --- BRAND DESIGN SYSTEM ---
      const BRAND = {
        primary: [30, 64, 175], // #1e40af
        secondary: [243, 244, 246], // #f3f4f6
        accent: [37, 99, 235],
        text: [31, 41, 55],
        subtext: [107, 114, 128],
        white: [255, 255, 255],
        border: [209, 213, 219]
      };

      // Starting document in Landscape as requested
      const pdf = new jsPDF({ orientation: 'l', unit: 'mm', format: 'a4' });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 15;
      const headerMaxY = 62;

      // --- HELPER: BRAND HEADER (Center Aligned) ---
      const addHeader = (doc) => {
        const width = doc.internal.pageSize.getWidth();
        const centerX = width / 2;
        
        // Top Accent Line
        doc.setFillColor(...BRAND.primary);
        doc.rect(0, 0, width, 4, 'F');

        // Branding Row (Logo Centered)
        try {
          doc.addImage(ismaLogo, 'PNG', centerX - 12, 8, 24, 24);
        } catch (e) {}

        doc.setTextColor(...BRAND.primary);
        doc.setFontSize(22);
        doc.setFont('helvetica', 'bold');
        doc.text('Islamia School & Mosque Association', centerX, 40, { align: 'center' });
        
        doc.setFontSize(9);
        doc.setTextColor(...BRAND.subtext);
        doc.setFont('helvetica', 'normal');
        doc.text('CUSTODIANS OF THE SUNNI MUSMUSLIM CEMETERIES - KARIOKOR & LANGATA', centerX, 45, { align: 'center' });
        
        doc.setFontSize(7.5);
        doc.text('P.O. Box 21015 - 00500 NAIROBI | Cell: +254 113217749 | Email: office@isma.co.ke', centerX, 49, { align: 'center' });
        
        // Professional Divider
        doc.setDrawColor(...BRAND.primary);
        doc.setLineWidth(0.3);
        doc.line(margin, 54, width - margin, 54);
        
        // Detailed Info Bar (Subheader)
        doc.setFillColor(...BRAND.secondary);
        doc.rect(margin, 57, width - margin * 2, 10, 'F');
        
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.setTextColor(...BRAND.primary);
        const reportTitle = `${filters.reportType.toUpperCase()} BURIAL RECORD REPORT`;
        doc.text(reportTitle, centerX, 63.5, { align: 'center' });
        
        doc.setFontSize(7);
        doc.setFont('helvetica', 'normal');
        doc.setTextColor(...BRAND.subtext);
        doc.text(`Generated: ${formatDate(new Date())} | Records: ${allRecords.length} | Page ${doc.internal.getCurrentPageInfo().pageNumber}`, width - margin - 2, 63.5, { align: 'right' });
      };

      const finalHeaderY = 72; // Increased to accommodate centered logo

      // --- HELPER: BRAND FOOTER ---
      const addFooter = (doc) => {
        const width = doc.internal.pageSize.getWidth();
        const height = doc.internal.pageSize.getHeight();
        doc.setFontSize(7.5);
        doc.setTextColor(...BRAND.subtext);
        doc.setDrawColor(...BRAND.border);
        doc.line(margin, height - 12, width - margin, height - 12);
        doc.text('System Certified Document - Islamia School & Mosque Association', margin, height - 8);
        doc.text(`Internal Classification: Administrative Report`, width - margin, height - 8, { align: 'right' });
      };

      // --- PAGE 1: SUMMARY (Landscape) ---
      addHeader(pdf);
      let y = finalHeaderY + 5;

      // Stats Section
      const statsGrid = document.getElementById('stats-grid-pdf');
      if (statsGrid) {
        pdf.setFontSize(10.5);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(...BRAND.primary);
        pdf.text('1.0 CONSOLIDATED RECORD STATISTICS', margin, y);
        y += 6;

        const canvas = await html2canvas(statsGrid, { scale: 2, useCORS: true });
        const imgWidth = pageWidth - margin * 2;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', margin, y, imgWidth, imgHeight);
        y += imgHeight + 12;
      }

      // Charts Section
      const chartsGrid = document.getElementById('charts-grid-pdf');
      if (chartsGrid) {
        if (y + 110 > pageHeight - 20) {
          pdf.addPage();
          addHeader(pdf);
          y = finalHeaderY + 5;
        }

        pdf.setFontSize(10.5);
        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(...BRAND.primary);
        pdf.text('2.0 ANALYTICAL TRENDS & DISTRIBUTIONS', margin, y);
        y += 6;

        const canvas = await html2canvas(chartsGrid, { scale: 2, useCORS: true });
        const imgWidth = pageWidth - margin * 2;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', margin, y, imgWidth, imgHeight);
      }

      // --- DETAILED RECORDS TABLE ---
      if (filters.reportType === 'Detailed') {
        pdf.addPage(); // Already landscape by default now
        addHeader(pdf);

        const detailedHeaders = [
          'Record Index', 'Deceased Information', 'Burial Logistics', 
          'Applicant Details', 'Billing & Permits', 
          'Financial Services', 'Process Status'
        ];

        const detailedTableData = allRecords.map(record => [
          `Record No: ${record.recordNumber || '-'}\nApp ID: ${record.applicantId || '-'}\nIssuance: ${record.verifiedAt ? formatDate(record.verifiedAt) : '-'}\nCategory: ${record.ageCategory || '-'}`,
          `Full Name: ${[record.firstName, record.middleName, record.lastName].filter(Boolean).join(' ').trim()}\nID/Passport: ${record.idPassportNo || '-'}\nGender: ${record.gender || '-'}\nNationality: ${record.nationality || '-'}`,
          `Date of Death: ${record.dateOfDeath ? formatDate(record.dateOfDeath) : '-'}\nDate of Burial: ${record.dateOfBurial ? formatDate(record.dateOfBurial) : '-'}\nLocation: ${record.burialLocation || '-'}\nTime: ${record.burialTime || '-'}`,
          `Applicant: ${record.applicantName || '-'}\nPhone No: ${record.applicantPhone || '-'}\nEmail: ${record.applicantEmail || '-'}\nNext of Kin: ${record.nextOfKinName || '-'}\nRelation: ${record.nextOfKinRelationship || '-'}`,
          `Permit No: ${record.burialPermitNumber || '-'}\nM-Pesa Ref: ${record.mpesaRefNo || '-'}\nReceipt No: ${record.receiptNo || '-'}\nTemp Receipt: ${record.tempReceiptNo || '-'}`,
          `Burial Charge: ${ (record.amountPayableBurial || 0).toLocaleString() }\nAmount Paid: ${ (record.amountToPayNow || 0).toLocaleString() }\nBalance Due: ${ (record.pendingAmount || 0).toLocaleString() }\nSecondary: ${record.secondaryService || 'None'}`,
          `${record.status || 'Pending'}${record.rejectionReason ? '\n' + record.rejectionReason : ''}`
        ]);

        autoTable(pdf, {
          startY: finalHeaderY + 2,
          head: [detailedHeaders],
          body: detailedTableData,
          theme: 'grid',
          styles: { fontSize: 7, cellPadding: 3, overflow: 'linebreak', font: 'helvetica' },
          headStyles: { fillColor: BRAND.primary, textColor: BRAND.white, fontStyle: 'bold' },
          alternateRowStyles: { fillColor: [252, 253, 255] },
          columnStyles: {
            0: { cellWidth: 35 }, 1: { cellWidth: 48 }, 2: { cellWidth: 42 },
            3: { cellWidth: 48 }, 4: { cellWidth: 42 }, 5: { cellWidth: 35 }, 6: { cellWidth: 25 }
          },
          margin: { top: finalHeaderY, left: margin, right: margin, bottom: 20 },
          didDrawPage: (data) => {
            if (data.pageNumber > 1) {
              addHeader(pdf);
            }
          },
          didDrawCell: (data) => {
            if (data.column.index === 6 && data.section === 'body') {
              const statusLine = data.cell.raw.split('\n')[0];
              if (statusLine === 'Verified') pdf.setTextColor(16, 120, 100);
              else if (statusLine === 'Rejected') pdf.setTextColor(180, 0, 0);
              else if (statusLine === 'Pending') pdf.setTextColor(180, 120, 0);
              pdf.setFont('helvetica', 'bold');
            }
          }
        });
      }

      addFooter(pdf);
      pdf.save(`${filters.reportType.toLowerCase()}-burial-report-${new Date().getTime()}.pdf`);
      showToast('Landscape PDF report generated successfully', 'success');

    } catch (err) {
      console.error('PDF Landscape enhancement error:', err);
      showToast('Error generating Landscape PDF: ' + err.message, 'error');
    }
  };

  const handleExportExcel = () => {
    try {
      if (allRecords.length === 0) {
        showToast('No records to export. Please wait for data to load.', 'warning');
        return;
      }

      // Create workbook
      const wb = XLSX.utils.book_new();

      // Stats sheet
      const statsData = [
        ['Islamia School & Mosque Association'],
        [`${filters.reportType} Burial Record Report`],
        ['Generated:', formatDate(new Date())],
        [],
        ['Summary Statistics'],
        ['Total Records', stats.totalRecords || 0],
        ['Males', stats.genderStats?.find(g => g._id === 'Male')?.count || 0],
        ['Females', stats.genderStats?.find(g => g._id === 'Female')?.count || 0],
        ['Verified Records', stats.verifiedRecords || 0],
        [],
        ['Records exported:', allRecords.length]
      ];
      const statsSheet = XLSX.utils.aoa_to_sheet(statsData);
      XLSX.utils.book_append_sheet(wb, statsSheet, 'Summary');

      // Only include specific record sheets for Detailed reports
      if (filters.reportType === 'Detailed') {
        // Records sheet - using array of arrays for better control
        const recordsHeaders = [
          'Record Number', 'Applicant ID', 'Applicant Name', 'Applicant Email', 'Applicant Phone', 'Applicant ID/Passport',
          'First Name', 'Middle Name', 'Last Name', 'ID/Passport No', 'Gender', 'Age', 'Age Category', 'Nationality',
          'Date of Death', 'Date of Burial', 'Burial Location', 'Burial Time',
          'Next of Kin Name', 'Next of Kin Contact', 'Next of Kin ID/Passport', 'Relationship',
          'Burial Permit No', 'Burial Permit Date', 'Burial Permit Issued By', 'Issued By Contact', 'Issued To', 'Issued To Contact',
          'Primary Service', 'Amount Payable (Burial)', 'Actual Amount Paid', 'Pending Amount',
          'Secondary Service', 'Secondary Amount', 'Tertiary Service', 'Tertiary Amount',
          'M-Pesa Ref No', 'Receipt No', 'Temp Receipt No', 'Status', 'Rejection Reason', 'Issuance Date'
        ];
        const recordsRows = allRecords.map(record => [
          record.recordNumber || '',
          record.applicantId || '',
          record.applicantName || '',
          record.applicantEmail || '',
          record.applicantPhone || '',
          record.applicantIdPassportNo || '',
          record.firstName || '',
          record.middleName || '',
          record.lastName || '',
          record.idPassportNo || '',
          record.gender || '',
          record.age || '',
          record.ageCategory || '',
          record.nationality || '',
          record.dateOfDeath ? formatDate(record.dateOfDeath) : '',
          record.dateOfBurial ? formatDate(record.dateOfBurial) : '',
          record.burialLocation || '',
          record.burialTime || '',
          record.nextOfKinName || '',
          record.nextOfKinContact || '',
          record.nextOfKinIdPassport || '',
          record.nextOfKinRelationship || '',
          record.burialPermitNumber || '',
          record.burialPermitDate ? formatDate(record.burialPermitDate) : '',
          record.burialPermitIssuedBy || '',
          record.burialPermitIssuedByContact || '',
          record.burialPermitIssuedTo || '',
          record.burialPermitIssuedToContact || '',
          record.primaryService || '',
          record.amountPayableBurial || 0,
          record.amountToPayNow || 0,
          record.pendingAmount || 0,
          record.secondaryService || '',
          record.amountPayableSecondary || 0,
          record.tertiaryService || '',
          record.amountPayableTertiary || 0,
          record.mpesaRefNo || '',
          record.receiptNo || '',
          record.tempReceiptNo || '',
          record.status || '',
          record.rejectionReason || '',
          record.verifiedAt ? formatDate(record.verifiedAt) : (record.createdAt ? formatDate(record.createdAt) : '')
        ]);

        const recordsData = [recordsHeaders, ...recordsRows];
        const recordsSheet = XLSX.utils.aoa_to_sheet(recordsData);

        // Set column widths
        recordsSheet['!cols'] = recordsHeaders.map(() => ({ wch: 20 }));

        XLSX.utils.book_append_sheet(wb, recordsSheet, 'All Records');

        // Filtered Records sheet (currently visible records)
        if (filteredRecords.length > 0) {
          const filteredHeaders = ['Record No.', 'Name', 'Date of Death', 'Burial Location', 'Gender', 'Status'];
          const filteredRows = filteredRecords.map(record => [
            record.recordNumber || '',
            `${record.firstName || ''} ${record.middleName || ''} ${record.lastName || ''}`.replace(/\s+/g, ' ').trim(),
            record.dateOfDeath ? formatDate(record.dateOfDeath) : '',
            record.burialLocation || '',
            record.gender || '',
            record.status || ''
          ]);

          const filteredData = [
            ['Filtered Records'],
            ['Current Page:', currentPage],
            ['Filters Applied:'],
            ['Date Range:', filters.dateRange],
            ['Gender:', filters.gender || 'All'],
            ['Burial Location:', filters.burialLocation || 'All'],
            [],
            filteredHeaders,
            ...filteredRows
          ];

          const filteredSheet = XLSX.utils.aoa_to_sheet(filteredData);

          // Set column widths for filtered sheet
          filteredSheet['!cols'] = [
            { wch: 15 }, // Record No.
            { wch: 25 }, // Name
            { wch: 15 }, // Date of Death
            { wch: 20 }, // Burial Location
            { wch: 10 }, // Gender
            { wch: 12 }  // Status
          ];

          XLSX.utils.book_append_sheet(wb, filteredSheet, 'Filtered View');
        }
      }

      // Save file
      XLSX.writeFile(wb, `${filters.reportType.toLowerCase()}-burial-report-${new Date().toISOString().split('T')[0]}.xlsx`);
      showToast(`Excel file exported with ${allRecords.length} total records`, 'success');
    } catch (err) {
      console.error('Excel export error:', err);
      showToast('Error exporting Excel file', 'error');
    }
  };

  const handleExportCSV = () => {
    try {
      let csvContent = '';
      const filename = `${filters.reportType.toLowerCase()}-burial-report-${new Date().toISOString().split('T')[0]}.csv`;

      if (filters.reportType === 'Summary') {
        const headers = ['Metric', 'Value'];
        const rows = [
          ['Organization', 'Islamia School & Mosque Association'],
          ['Report Type', 'Summary'],
          ['Generated Date', formatDate(new Date())],
          ['Total Records', stats.totalRecords || 0],
          ['Verified Records', stats.verifiedRecords || 0],
          ['Males', stats.genderStats?.find(g => g._id === 'Male')?.count || 0],
          ['Females', stats.genderStats?.find(g => g._id === 'Female')?.count || 0]
        ];

        csvContent = headers.join(',') + '\n';
        rows.forEach(row => {
          csvContent += row.map(cell => `"${cell}"`).join(',') + '\n';
        });
      } else {
        const headers = [
          'Record Number', 'Applicant ID', 'Applicant Name', 'Applicant Email', 'Applicant Phone', 'Applicant ID/Passport',
          'First Name', 'Middle Name', 'Last Name', 'ID/Passport No', 'Gender', 'Age', 'Age Category', 'Nationality',
          'Date of Death', 'Date of Burial', 'Burial Location', 'Burial Time',
          'Next of Kin Name', 'Next of Kin Contact', 'Next of Kin ID/Passport', 'Next of Kin Relationship',
          'Burial Permit No', 'Burial Permit Date', 'Burial Permit Issued By', 'Issued By Contact', 'Issued To', 'Issued To Contact',
          'Primary Service', 'Amount Payable (Burial)', 'Actual Amount Paid', 'Pending Amount',
          'Secondary Service', 'Secondary Amount', 'Tertiary Service', 'Tertiary Amount',
          'M-Pesa Ref No', 'Receipt No', 'Temp Receipt No', 'Status', 'Rejection Reason', 'Issuance Date'
        ];
        const rows = allRecords.map(record => [
          record.recordNumber || '',
          record.applicantId || '',
          record.applicantName || '',
          record.applicantEmail || '',
          record.applicantPhone || '',
          record.applicantIdPassportNo || '',
          record.firstName || '',
          record.middleName || '',
          record.lastName || '',
          record.idPassportNo || '',
          record.gender || '',
          record.age || '',
          record.ageCategory || '',
          record.nationality || '',
          record.dateOfDeath ? formatDate(record.dateOfDeath) : '',
          record.dateOfBurial ? formatDate(record.dateOfBurial) : '',
          record.burialLocation || '',
          record.burialTime || '',
          record.nextOfKinName || '',
          record.nextOfKinContact || '',
          record.nextOfKinIdPassport || '',
          record.nextOfKinRelationship || '',
          record.burialPermitNumber || '',
          record.burialPermitDate ? formatDate(record.burialPermitDate) : '',
          record.burialPermitIssuedBy || '',
          record.burialPermitIssuedByContact || '',
          record.burialPermitIssuedTo || '',
          record.burialPermitIssuedToContact || '',
          record.primaryService || '',
          record.amountPayableBurial || 0,
          record.amountToPayNow || 0,
          record.pendingAmount || 0,
          record.secondaryService || '',
          record.amountPayableSecondary || 0,
          record.tertiaryService || '',
          record.amountPayableTertiary || 0,
          record.mpesaRefNo || '',
          record.receiptNo || '',
          record.tempReceiptNo || '',
          record.status || '',
          record.rejectionReason || '',
          record.verifiedAt ? formatDate(record.verifiedAt) : (record.createdAt ? formatDate(record.createdAt) : '')
        ]);

        csvContent = headers.join(',') + '\n';
        rows.forEach(row => {
          csvContent += row.map(cell => `"${cell}"`).join(',') + '\n';
        });
      }

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      link.click();
      URL.revokeObjectURL(url);

      showToast(`${filters.reportType} CSV exported successfully`, 'success');
    } catch (err) {
      console.error('CSV export error:', err);
      showToast('Error exporting CSV file', 'error');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleViewDetails = (id) => {
    navigate(`/document/${id}`);
  };

  const handleDownloadRecord = (record) => {
    const fullName = `${record.firstName || ''} ${record.middleName || ''} ${record.lastName || ''}`.replace(/\s+/g, ' ').trim();
    const recordData = `
Burial Record: ${record.recordNumber}
Name: ${fullName}
Date of Death: ${formatDate(record.dateOfDeath)}
Burial Location: ${record.burialLocation}
Status: ${record.status}
    `;

    const blob = new Blob([recordData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${record.recordNumber}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  if (!stats) {
    return (
      <Spinner minHeight="400px" text="Loading reports..." />
    );
  }

  if (stats.totalRecords === 0) {
    return (
      <EmptyState
        icon={<MdBarChart size={48} />}
        title="No Report Data Available"
        description="There are no burial records in the system yet. Create your first record to start generating reports."
        action={() => navigate('/data-capture')}
        actionText="Create First Record"
      />
    );
  }

  return (
    <ReportsContainer>
      <PrintHeader>
        <img src={ismaLogo} alt="Islamia School & Mosque Association Logo" className="print-logo" />
        <div className="header-text">
          <h1>Islamia School & Mosque Association</h1>
          <div className="tagline">Custodians of The Sunni Muslim Cemeteries - KARIOKOR & LANGATA</div>
          <div className="contact-line">P.O. Box 21015 - 00500 NAIROBI | Cell / Whatsapp: +254 113217749 | Email: office@isma.co.ke</div>
          <div className="report-meta">
            <div className="report-title">{filters.reportType} Burial Record Report</div>
            <div className="report-date">Generated: {formatDate(new Date())}</div>
          </div>
        </div>
      </PrintHeader>

      <PageHeader>
        <h1>Reports & Analytics</h1>
        <p>Generate and view various reports and analytical insights from the burial record data.</p>
      </PageHeader>

      {message.text && <Alert $type={message.type}>{message.text}</Alert>}

      <ControlsCard>
        <h2>Report Controls</h2>
        <p>Filter data for detailed analysis</p>
        <FiltersGrid>
          <FormGroup>
            <label>Report Type</label>
            <select value={filters.reportType} onChange={(e) => setFilters({ ...filters, reportType: e.target.value })}>
              <option value="Summary">Summary</option>
              <option value="Detailed">Detailed</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>Date Range</label>
            <select value={filters.dateRange} onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}>
              <option value="all">All Time</option>
              <option value="last7days">Last 7 Days</option>
              <option value="last30days">Last 30 Days</option>
              <option value="last90days">Last 90 Days</option>
              <option value="thisyear">This Year</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>Age Category</label>
            <select value={filters.ageCategory} onChange={(e) => setFilters({ ...filters, ageCategory: e.target.value })}>
              <option value="">All Categories</option>
              <option value="Stillborn">Stillborn</option>
              <option value="Infant">Infant</option>
              <option value="Child">Child</option>
              <option value="Adult">Adult</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>Gender</label>
            <select value={filters.gender} onChange={(e) => setFilters({ ...filters, gender: e.target.value })}>
              <option value="">All</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>Burial Location</label>
            <select value={filters.burialLocation} onChange={(e) => setFilters({ ...filters, burialLocation: e.target.value })}>
              <option value="">All Locations</option>
              {locations.map(loc => (
                <option key={loc._id} value={loc.name}>{loc.name}</option>
              ))}
            </select>
          </FormGroup>
        </FiltersGrid>
        <ActionButtons>

          <Button $variant="primary" onClick={handleExportPDF} disabled={loading}>
            <MdPictureAsPdf size={18} /> Export PDF
          </Button>
          <Button $variant="secondary" onClick={handleExportExcel}>
            <MdTableChart size={18} /> Export Excel
          </Button>
          <Button $variant="secondary" onClick={handleExportCSV}>
            <MdTableChart size={18} /> Export CSV
          </Button>
          <Button $variant="secondary" onClick={handlePrint}>
            <MdDownload size={18} /> Print
          </Button>
        </ActionButtons>
      </ControlsCard>

      <StatsGrid id="stats-grid-pdf">
        <StatCard>
          <div className="stat-icon"><MdBarChart size={32} /></div>
          <div className="stat-label">Total Records</div>
          <div className="stat-value">{stats.totalRecords || 0}</div>
        </StatCard>

        <StatCard>
          <div className="stat-icon"><MdPeople size={24} style={{ opacity: 0.5 }} /></div>
          <div className="stat-label">Males</div>
          <div className="stat-value">{stats.genderStats?.find(g => g._id === 'Male')?.count || 0}</div>
        </StatCard>

        <StatCard>
          <div className="stat-icon"><MdPeople size={24} style={{ opacity: 0.5 }} /></div>
          <div className="stat-label">Females</div>
          <div className="stat-value">{stats.genderStats?.find(g => g._id === 'Female')?.count || 0}</div>
        </StatCard>

        <StatCard>
          <div className="stat-icon"><MdCheckCircle size={24} style={{ color: '#10b981', opacity: 0.8 }} /></div>
          <div className="stat-label">Verified Records</div>
          <div className="stat-value">{stats.verifiedRecords || 0}</div>
        </StatCard>
      </StatsGrid>

      <ChartsGrid id="charts-grid-pdf">
        <ChartCard>
          <h3>Records by Month</h3>
          <p>Monthly burial record issuance trends</p>
          {monthlyData.length > 0 ? (
            <ResponsiveContainer width="100%" height={320}>
              <AreaChart data={monthlyData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRecords" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={theme.colors.primary} stopOpacity={0.3} />
                    <stop offset="95%" stopColor={theme.colors.primary} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDarkMode ? '#333' : '#f0f0f0'} />
                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: isDarkMode ? '#888' : '#666', fontSize: 12 }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: isDarkMode ? '#888' : '#666', fontSize: 12 }}
                />
                <Tooltip content={<CustomTooltip isDarkMode={isDarkMode} />} />
                <Area
                  type="monotone"
                  dataKey="Records"
                  stroke={theme.colors.primary}
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorRecords)"
                  animationBegin={200}
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          ) : <div style={{ height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>No data available</div>}
        </ChartCard>

        <ChartCard>
          <h3>Gender Distribution</h3>
          <p>Detailed breakdown of records by gender</p>
          {genderData.length > 0 ? (
            <div style={{ marginTop: '20px' }}>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart
                  layout="vertical"
                  data={genderData}
                  margin={{ left: 20, right: 30, top: 0, bottom: 0 }}
                  barSize={32}
                >
                  <XAxis type="number" hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: isDarkMode ? '#b0b0b0' : '#4b5563', fontWeight: 600, fontSize: 13 }}
                    width={80}
                  />
                  <Tooltip
                    cursor={{ fill: 'transparent' }}
                    content={<CustomTooltip isDarkMode={isDarkMode} />}
                  />
                  <Bar
                    dataKey="value"
                    radius={[0, 20, 20, 0]}
                    animationBegin={300}
                    animationDuration={1500}
                  >
                    {genderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginTop: '24px' }}>
                {genderData.map((entry, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '12px', color: isDarkMode ? '#888' : '#666', marginBottom: '4px' }}>{entry.name}</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: COLORS[index % COLORS.length] }}>
                      {entry.value}
                    </div>
                    <div style={{ fontSize: '10px', color: '#999', fontWeight: 500 }}>
                      {stats?.totalRecords > 0 ? Math.round((entry.value / stats.totalRecords) * 100) : 0}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : <div style={{ height: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#888' }}>No data available</div>}
        </ChartCard>
      </ChartsGrid>

      {filters.reportType === 'Detailed' ? (
        <Card>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 4px 0', color: isDarkMode ? '#e5e5e5' : theme.colors.gray900 }}>Filtered Records</h3>
              <p style={{ fontSize: '13px', color: isDarkMode ? '#a0a0a0' : theme.colors.gray500, margin: 0 }}>Overview of burial records matching current report filters</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '12px', color: isDarkMode ? '#aaa' : '#666', fontWeight: 500 }}>Rows per page:</span>
              <select 
                value={pageSize} 
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
                style={{
                  padding: '6px 10px',
                  borderRadius: '6px',
                  border: `1px solid ${isDarkMode ? '#333' : '#ddd'}`,
                  background: isDarkMode ? '#1f1f1f' : 'white',
                  color: isDarkMode ? 'white' : 'black',
                  fontSize: '12px',
                  fontWeight: 600
                }}
              >
                <option value={10}>10</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={200}>200</option>
                <option value={500}>500</option>
              </select>
            </div>
          </div>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: isDarkMode ? '#a0a0a0' : theme.colors.gray500 }}>
              Loading records...
            </div>
          ) : (
            <>
              <StyledTable>
                <thead>
                  <tr>
                    <th>Record No.</th>
                    <th>Name</th>
                    <th>Date of Death</th>
                    <th>Burial Location</th>
                    <th>Receipt No</th>
                    <th>Pending Amount</th>
                    <th>Gender</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRecords.length > 0 ? filteredRecords.map((record) => (
                    <tr key={record._id}>
                      <td style={{ fontWeight: 600 }}>{record.recordNumber}</td>
                      <td>{`${record.firstName || ''} ${record.middleName || ''} ${record.lastName || ''}`.replace(/\s+/g, ' ').trim()}</td>
                      <td>{formatDate(record.dateOfDeath)}</td>
                      <td>{record.burialLocation}</td>
                      <td>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <span style={{ fontWeight: 600 }}>{record.receiptNo}</span>
                          {record.tempReceiptNo && (
                            <span style={{ fontSize: '11px', color: theme.colors.gray500 }}>
                              Temp: {record.tempReceiptNo}
                            </span>
                          )}
                        </div>
                      </td>
                      <td>
                        <span style={{ fontWeight: 600, color: (record.pendingAmount || 0) > 0 ? theme.colors.danger : theme.colors.success }}>
                          KES {(record.pendingAmount || 0).toLocaleString()}
                        </span>
                      </td>
                      <td>{record.gender}</td>
                      <td><StatusBadge $status={record.status}>{record.status}</StatusBadge></td>
                      <td>
                        <div style={{ display: 'flex', gap: '8px' }}>
                          <ActionLink title="View Details" onClick={() => handleViewDetails(record._id)}>
                            <MdVisibility size={18} />
                          </ActionLink>
                          <ActionLink title="Download Record" onClick={() => handleDownloadRecord(record)}>
                            <MdDownload size={18} />
                          </ActionLink>
                        </div>
                      </td>
                    </tr>
                  )) : (
                    <tr>
                      <td colSpan="7" style={{ textAlign: 'center', padding: '40px', color: isDarkMode ? '#a0a0a0' : theme.colors.gray500 }}>
                        No records found matching the current filters
                      </td>
                    </tr>
                  )}
                </tbody>
              </StyledTable>
              {filteredRecords.length > 0 && totalPages > 1 && (
                <Pagination>
                  <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                    « Previous
                  </button>
                  {[...Array(Math.min(totalPages, 3))].map((_, i) => {
                    const pageNum = currentPage <= 2 ? i + 1 : currentPage + i - 1;
                    if (pageNum > totalPages) return null;
                    return (
                      <button
                        key={pageNum}
                        className={currentPage === pageNum ? 'active' : ''}
                        onClick={() => setCurrentPage(pageNum)}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                  <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                    Next »
                  </button>
                </Pagination>
              )}
            </>
          )}
        </Card>
      ) : (
        <Card>
          <h3 style={{ fontSize: '16px', fontWeight: 700, margin: '0 0 16px 0', color: isDarkMode ? '#e5e5e5' : theme.colors.gray900 }}>Summary Overview</h3>
          <p style={{ fontSize: '13px', color: isDarkMode ? '#a0a0a0' : theme.colors.gray500, margin: '0 0 20px 0' }}>
            The current report is in **Summary mode**. This view highlights key statistics and trends from the filtered data.
            Select **"Detailed"** from the Report Type dropdown to view individual records and perform granular analysis.
          </p>
        </Card>
      )}




    </ReportsContainer>
  );
}

export default Reports;
