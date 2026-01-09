import { useState, useEffect } from 'react';
import { apiService } from '../utils/api';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area, Sector } from 'recharts';
import { PageHeader, Card, StatusBadge } from '../styles/CommonStyles';
import { theme } from '../styles/theme';
import { useToast } from '../contexts/ToastContext';
import { useSettings } from '../contexts/SettingsContext';
import EmptyState from './EmptyState';
import { DashboardSkeleton } from './LoadingSkeleton';
import { MdBarChart, MdCheckCircle, MdSchedule, MdWarning, MdEdit, MdDownload, MdDescription, MdPeople, MdTrendingUp, MdTrendingDown } from 'react-icons/md';
import { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const DashboardContainer = styled.div`
  font-family: ${theme.fonts.body};
  background: radial-gradient(circle at top right, rgba(129, 140, 248, 0.08), transparent 600px),
              radial-gradient(circle at bottom left, rgba(52, 211, 153, 0.05), transparent 600px);
  min-height: 100vh;
  padding: ${theme.spacing.lg} ${theme.spacing.xl};
  animation: ${fadeInUp} 0.6s ease-out;
`;

const OverviewSection = styled.div`
  margin-bottom: ${theme.spacing.xl};
  h2 {
    font-size: 18px;
    font-weight: 600;
    color: ${theme.colors.gray900};
    margin: 0 0 ${theme.spacing.lg} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StatCard = styled.div`
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: default;

  body.dark-theme & {
    background: rgba(45, 45, 45, 0.8);
    border-color: rgba(255, 255, 255, 0.05);
  }

  &:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    border-color: ${theme.colors.primaryLight};

    body.dark-theme & {
      background: rgba(55, 55, 55, 0.9);
      border-color: #444;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
    }
  }

  @media (min-width: 640px) {
    padding: ${theme.spacing.lg};
  }
  
  .stat-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
  }
  
  .stat-label {
    font-size: 11px;
    color: ${theme.colors.gray600};
    font-weight: 500;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 640px) {
      font-size: 13px;
    }
  }
  
  .stat-icon {
    width: 32px;
    height: 32px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    background: ${props => props.$iconBg || theme.colors.gray100};
    color: ${props => props.$iconColor || theme.colors.gray600};
    transition: transform 0.3s ease;

    @media (min-width: 640px) {
      width: 40px;
      height: 40px;
      font-size: 18px;
    }
  }

  &:hover .stat-icon {
    transform: scale(1.1) rotate(5deg);
    background: ${props => props.$iconBg || theme.colors.gray100};
    box-shadow: 0 8px 16px -4px ${props => props.$iconColor ? `${props.$iconColor}66` : 'rgba(0,0,0,0.1)'};
  }
  
  .stat-value {
    font-size: 24px;
    font-weight: 800;
    color: ${theme.colors.textPrimary};
    margin-bottom: 4px;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 640px) {
      font-size: 32px;
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

    @media (min-width: 640px) {
      font-size: 12px;
    }

    body.dark-theme & {
      &.up { color: #34d399; }
      &.down { color: #fb7185; }
      &.neutral { color: #a0a0a0; }
    }
  }
`;

const COLORS = ['#818cf8', '#60a5fa', '#34d399', '#fbbf24', '#f87171'];

const CustomTooltip = ({ active, payload, label, isDarkMode }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        backgroundColor: isDarkMode ? '#1e1e1e' : 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        border: `1px solid ${isDarkMode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}`,
        padding: '12px',
        borderRadius: '12px',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
      }}>
        <p style={{ margin: '0 0 8px 0', fontSize: '11px', fontWeight: 700, color: isDarkMode ? '#888' : '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          {label}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {payload.map((entry, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: entry.color }} />
                <span style={{ fontSize: '13px', color: isDarkMode ? '#ccc' : '#4b5563' }}>{entry.name}</span>
              </div>
              <span style={{ fontSize: '13px', fontWeight: 600, color: isDarkMode ? '#fff' : '#111827' }}>{entry.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

const ChartsSection = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const ChartCard = styled(Card)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  body.dark-theme & {
    background: rgba(45, 45, 45, 0.7);
    border-color: rgba(255, 255, 255, 0.05);
  }

  &:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: ${theme.colors.gray900};
    letter-spacing: -0.01em;
    margin: 0 0 4px 0;

    body.dark-theme & {
      color: #f3f4f6;
    }
  }
  
  h3 {
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.gray500};
    margin: 0 0 ${theme.spacing.lg} 0;

    body.dark-theme & {
      color: #9ca3af;
    }
  }
`;

const RecentUploadsSection = styled(Card)`
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  
  body.dark-theme & {
    background: rgba(45, 45, 45, 0.7);
    border-color: rgba(255, 255, 255, 0.05);
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    color: ${theme.colors.gray900};
    margin: 0 0 8px 0;
    letter-spacing: -0.01em;

    body.dark-theme & {
      color: #f3f4f6;
    }
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    color: ${theme.colors.gray500};
    margin: 0 0 ${theme.spacing.xl} 0;

    body.dark-theme & {
      color: #9ca3af;
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
  min-width: 500px;

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
    grid-template-columns: 1fr;
    margin-bottom: 12px;
    border: 1px solid ${theme.colors.gray200};
    border-radius: ${theme.borderRadius.lg};
    overflow: hidden;
    background: white;
    transition: all 0.2s ease;

    body.dark-theme & {
      background: #2d2d2d;
      border-color: #3d3d3d;
    }

    @media (min-width: 768px) {
      display: table-row;
      margin-bottom: 0;
      border: none;
      border-bottom: 1px solid ${theme.colors.gray200};
      border-radius: 0;
      background: transparent;

      body.dark-theme & {
        border-bottom-color: #3d3d3d;
      }

      &:hover {
        background: rgba(129, 140, 248, 0.02);
        body.dark-theme & {
          background: rgba(255, 255, 255, 0.02);
        }
      }
    }
  }

  th {
    padding: 16px;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: ${theme.colors.gray500};
    border-bottom: 1px solid ${theme.colors.gray200};

    body.dark-theme & {
      color: #888;
      border-bottom-color: #3d3d3d;
    }
  }
  
  td {
    padding: 16px;
    color: ${theme.colors.textPrimary};
    border-bottom: 1px solid ${theme.colors.gray200};
    display: flex;
    align-items: center;

    body.dark-theme & {
      border-bottom-color: #3d3d3d;
    }
    justify-content: flex-start;
    flex-direction: column;
    gap: 4px;
    min-height: 44px;

    body.dark-theme & {
      color: #e5e5e5;
      border-bottom-color: #3d3d3d;
    }

    @media (min-width: 768px) {
      display: table-cell;
      justify-content: flex-start;
      flex-direction: row;
      gap: 0;
      padding: 14px 16px;
      border-bottom: 1px solid ${theme.colors.gray200};
      min-height: auto;

      body.dark-theme & {
        border-bottom-color: #3d3d3d;
      }
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
  
  tbody tr:hover {
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
`;

const ActionButton = styled.button`
  background: white;
  border: 1px solid ${theme.colors.gray200};
  padding: 8px;
  cursor: pointer;
  color: ${theme.colors.gray600};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);

  body.dark-theme & {
    background: #3d3d3d;
    border-color: #4d4d4d;
    color: #e5e5e5;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border-color: ${theme.colors.primaryLight};
    color: ${theme.colors.primary};

    body.dark-theme & {
      color: #818cf8;
      border-color: #555;
    }
  }

  &:active {
    transform: translateY(0);
  }
`;

function Dashboard() {
  const navigate = useNavigate();
  const { showToast } = useToast();
  const { settings, formatDate } = useSettings();
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState(null);
  const [recentRecords, setRecentRecords] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Detect dark mode from settings
  const isDarkMode = settings?.theme === 'dark';

  const fetchUser = async () => {
    try {
      const res = await apiService.getCurrentUser();
      setUser(res.data);
    } catch (err) {
      console.error('Error fetching user:', err);
    }
  };

  const fetchData = async () => {
    const token = localStorage.getItem('token');
    try {
      setLoading(true);
      setError(null);

      // Fetch data with individual error handling
      const results = await Promise.allSettled([
        apiService.getOverview(),
        apiService.getRecentRecords(),
        apiService.getMonthlyTrends()
      ]);

      // Handle stats
      if (results[0].status === 'fulfilled') {
        setStats(results[0].value.data);
      } else {
        console.error('Error fetching stats:', results[0].reason);
        showToast('Failed to load statistics', 'error');
      }

      // Handle recent records
      if (results[1].status === 'fulfilled') {
        setRecentRecords(results[1].value.data);
      } else {
        console.error('Error fetching recent records:', results[1].reason);
        setRecentRecords([]);
      }

      // Handle monthly data
      if (results[2].status === 'fulfilled') {
        setMonthlyData(results[2].value.data);
      } else {
        console.error('Error fetching monthly data:', results[2].reason);
        setMonthlyData([]);
      }
    } catch (err) {
      console.error('Error fetching dashboard data:', err);
      setError(err.response?.data?.message || err.message || 'Failed to load dashboard data');
      showToast('Failed to load dashboard data', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchData();
  }, []);

  const handleView = (id) => {
    navigate(`/document/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/data-capture?edit=${id}`);
  };

  const handleDownload = (record) => {
    const recordData = `
Burial Record: ${record.recordNumber}
Name: ${record.fullName}
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

  if (loading) return <DashboardSkeleton />;

  if (error) {
    return (
      <EmptyState
        icon={<MdWarning size={48} />}
        title="Failed to Load Dashboard"
        description={error}
        action={fetchData}
        actionText="Retry"
      />
    );
  }

  if (!stats) {
    return (
      <EmptyState
        icon={<MdBarChart size={48} />}
        title="No Dashboard Data"
        description="Dashboard data is not available at the moment."
        action={fetchData}
        actionText="Refresh"
      />
    );
  }

  // Transform monthly data for the chart
  const transformChartData = () => {
    if (!monthlyData || monthlyData.length === 0) return { chartData: [], locations: [] };

    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const dataByMonth = {};
    const locations = new Set();

    monthlyData.forEach(item => {
      const monthKey = monthNames[item._id.month - 1];
      if (!dataByMonth[monthKey]) {
        dataByMonth[monthKey] = { month: monthKey };
      }
      dataByMonth[monthKey][item._id.burialLocation] = item.count;
      locations.add(item._id.burialLocation);
    });

    return {
      chartData: Object.values(dataByMonth),
      locations: Array.from(locations)
    };
  };

  const { chartData, locations } = transformChartData();
  const locationColors = ['#6366f1', '#10B981', '#F59E0B', '#8B5CF6'];



  return (
    <DashboardContainer>
      <div style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 800, color: isDarkMode ? '#fff' : '#111827', letterSpacing: '-0.03em', marginBottom: '8px' }}>
          {user?.role === 'admin' ? 'Admin Overview' : 'Dashboard'}
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981' }} />
          <p style={{ fontSize: '14px', color: isDarkMode ? '#888' : '#6b7280', fontWeight: 500 }}>System is online and healthy</p>
        </div>
      </div>

      <OverviewSection>
        <h2>Overview</h2>
        <StatsGrid>
          <StatCard>
            <div className="stat-header">
              <div className="stat-label">Total Records</div>
              <div className="stat-icon" style={{ background: isDarkMode ? 'rgba(129, 140, 248, 0.1)' : '#f5f7ff' }}><MdBarChart size={20} color="#818cf8" /></div>
            </div>
            <div className="stat-value" style={{ letterSpacing: '-0.02em' }}>{stats.totalRecords?.toLocaleString() || 0}</div>
          </StatCard>

          <StatCard>
            <div className="stat-header">
              <div className="stat-label">Verified</div>
              <div className="stat-icon" style={{ background: isDarkMode ? 'rgba(52, 211, 153, 0.1)' : '#f0fdf4' }}><MdCheckCircle size={20} color="#34d399" /></div>
            </div>
            <div className="stat-value" style={{ letterSpacing: '-0.02em' }}>{stats.verifiedRecords?.toLocaleString() || 0}</div>
          </StatCard>

          <StatCard>
            <div className="stat-header">
              <div className="stat-label">Pending</div>
              <div className="stat-icon" style={{ background: isDarkMode ? 'rgba(251, 191, 36, 0.1)' : '#fffbeb' }}><MdSchedule size={20} color="#fbbf24" /></div>
            </div>
            <div className="stat-value" style={{ letterSpacing: '-0.02em' }}>{stats.pendingRecords?.toLocaleString() || 0}</div>
          </StatCard>

          <StatCard>
            <div className="stat-header">
              <div className="stat-label">User Activity</div>
              <div className="stat-icon" style={{ background: isDarkMode ? 'rgba(129, 140, 248, 0.1)' : '#f5f7ff' }}><MdPeople size={20} color="#818cf8" /></div>
            </div>
            <div className="stat-value" style={{ letterSpacing: '-0.02em' }}>14.2k</div>
          </StatCard>
        </StatsGrid>
      </OverviewSection>

      <ChartsSection>
        <ChartCard>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 600, color: isDarkMode ? '#eee' : '#111827', margin: 0 }}>Burial Activity</h2>
              <p style={{ fontSize: '13px', color: isDarkMode ? '#777' : '#6b7280', marginTop: '4px' }}>Monthly record entries by location</p>
            </div>
          </div>
          {chartData.length > 0 ? (
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={chartData} margin={{ top: 0, right: 0, left: -25, bottom: 0 }} barGap={8}>
                <defs>
                  {COLORS.map((color, index) => (
                    <linearGradient key={`barGradient-${index}`} id={`barGradient-${index}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={color} stopOpacity={1} />
                      <stop offset="100%" stopColor={color} stopOpacity={0.6} />
                    </linearGradient>
                  ))}
                </defs>
                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke={isDarkMode ? 'rgba(255,255,255,0.05)' : '#f3f4f6'} />
                <XAxis 
                  dataKey="month" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: isDarkMode ? '#555' : '#9ca3af', fontSize: 11, fontWeight: 500 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: isDarkMode ? '#555' : '#9ca3af', fontSize: 11, fontWeight: 500 }}
                  allowDecimals={false}
                />
                <Tooltip cursor={{ fill: isDarkMode ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)' }} content={<CustomTooltip isDarkMode={isDarkMode} />} />
                <Legend 
                  verticalAlign="top" 
                  align="right" 
                  iconType="circle" 
                  iconSize={6}
                  wrapperStyle={{ 
                    paddingBottom: '32px',
                    fontSize: '12px',
                    color: isDarkMode ? '#888' : '#4b5563'
                  }} 
                />
                {locations.map((location, index) => (
                  <Bar 
                    key={location} 
                    dataKey={location} 
                    fill={`url(#barGradient-${index % COLORS.length})`} 
                    radius={[6, 6, 0, 0]}
                    maxBarSize={12}
                    animationDuration={1500}
                    animationBegin={index * 100}
                  />
                ))}
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div style={{
              height: '300px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: isDarkMode ? '#a0a0a0' : theme.colors.gray500,
              backgroundColor: isDarkMode ? '#1f1f1f' : theme.colors.gray50,
              borderRadius: '8px'
            }}>
              <div style={{ marginBottom: '16px' }}><MdBarChart size={48} color="#9ca3af" /></div>
              <div style={{ fontSize: '16px', fontWeight: 500 }}>No data available for chart</div>
            </div>
          )}
        </ChartCard>
      </ChartsSection>

      <RecentUploadsSection>
        <h2>Last 10 Uploads</h2>
        <h3>Recently Submitted Records</h3>
        {recentRecords.length > 0 ? (
          <TableWrapper>
            <StyledTable>
              <thead>
                <tr>
                  <th>Record No.</th>
                  <th>Deceased Name</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {recentRecords.map(record => (
                  <tr key={record._id}>
                    <td data-label="Record No" style={{ fontWeight: 600 }}>{record.recordNumber}</td>
                    <td data-label="Name">{`${record.firstName} ${record.middleName || ''} ${record.lastName}`.replace(/\s+/g, ' ').trim()}</td>
                    <td data-label="Date">{formatDate(record.dateOfDeath)}</td>
                    <td data-label="Status">
                      <StatusBadge $status={record.status}>
                        {record.status}
                      </StatusBadge>
                    </td>
                    <td data-label="Actions">
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <ActionButton title="View Details" onClick={() => handleView(record._id)}>
                          👁
                        </ActionButton>
                        <ActionButton title="Edit Record" onClick={() => handleEdit(record._id)}>
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
        ) : (
          <div style={{
            padding: '40px',
            textAlign: 'center',
            color: isDarkMode ? '#a0a0a0' : theme.colors.gray500,
            backgroundColor: isDarkMode ? '#1f1f1f' : theme.colors.gray50,
            borderRadius: '8px'
          }}>
            <div style={{ marginBottom: '16px' }}><MdDescription size={48} color="#9ca3af" /></div>
            <div style={{ fontSize: '16px', fontWeight: 500 }}>No recent uploads</div>
          </div>
        )}
      </RecentUploadsSection>

      <div style={{ textAlign: 'center', padding: '24px', color: isDarkMode ? '#6d6d6d' : theme.colors.gray500, fontSize: '12px' }}>
        © 2025 Burial Record Manager. All rights reserved.
      </div>
    </DashboardContainer>
  );
}

export default Dashboard;
