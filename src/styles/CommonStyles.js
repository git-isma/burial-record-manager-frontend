import styled from 'styled-components';
import { theme } from './theme';

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: ${theme.spacing.lg};
`;

export const Card = styled.div`
  background: ${theme.colors.white};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.gray200};
  transition: all ${theme.transitions.base};

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #404040;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
    margin-bottom: ${theme.spacing.xl};
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);

    body.dark-theme & {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
    }
  }
`;

export const CardHeader = styled.div`
  margin-bottom: ${theme.spacing.lg};
  padding-bottom: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.gray200};

  body.dark-theme & {
    border-bottom-color: #404040;
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${theme.colors.gray900};
  margin: 0;

  body.dark-theme & {
    color: #e5e5e5;
  }
`;

export const CardContent = styled.div`
  /* Content styling */
`;

export const Button = styled.button`
  background: ${props => {
    if (props.$variant === 'primary') return '#6366f1';
    if (props.$variant === 'danger') return theme.colors.danger;
    if (props.$variant === 'secondary') return 'white';
    if (props.$variant === 'success') return theme.colors.success;
    if (props.$variant === 'warning') return theme.colors.warning;
    return '#6366f1';
  }};
  color: ${props => props.$variant === 'secondary' ? theme.colors.gray700 : 'white'};
  padding: ${props => props.$size === 'small' ? '8px 14px' : '10px 18px'};
  font-size: ${props => props.$size === 'small' ? '12px' : '13px'};
  font-weight: 600;
  font-family: ${theme.fonts.body};
  border-radius: ${theme.borderRadius.md};
  border: ${props => props.$variant === 'secondary' ? `1px solid ${theme.colors.gray300}` : 'none'};
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  margin-right: ${props => props.$marginRight || '0'};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  position: relative;
  overflow: hidden;
  min-height: 40px;
  min-width: 40px;
  touch-action: manipulation;

  @media (min-width: 768px) {
    padding: ${props => props.$size === 'small' ? '8px 16px' : '10px 20px'};
    font-size: ${props => props.$size === 'small' ? '13px' : '14px'};
    min-height: auto;
    min-width: auto;
  }

  body.dark-theme & {
    ${props => props.$variant === 'secondary' && `
      background: #2d2d2d;
      border-color: #404040;
      color: #e5e5e5;
    `}
    ${props => props.$variant === 'primary' && `
      background: #7c3aed;
    `}
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover:not(:disabled) {
    background: ${props => {
    if (props.$variant === 'primary') return '#4f46e5';
    if (props.$variant === 'secondary') return theme.colors.gray50;
    return props.$variant === 'danger' ? '#dc2626' : props.$variant === 'success' ? '#059669' : '#d97706';
  }};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);

    body.dark-theme & {
      ${props => props.$variant === 'secondary' && `
        background: #353535;
      `}
      ${props => props.$variant === 'primary' && `
        background: #6d28d9;
      `}
    }

    &::before {
      width: 300px;
      height: 300px;
    }
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: none) {
    &:active:not(:disabled) {
      background: ${props => {
    if (props.$variant === 'primary') return '#4f46e5';
    if (props.$variant === 'secondary') return theme.colors.gray100;
    return props.$variant === 'danger' ? '#dc2626' : props.$variant === 'success' ? '#059669' : '#d97706';
  }};
    }
  }
`;

export const IconButton = styled.button`
  background: transparent;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: ${theme.colors.gray600};
  border-radius: ${theme.borderRadius.sm};
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  position: relative;

  body.dark-theme & {
    color: #b0b0b0;
  }

  &:hover {
    background: ${theme.colors.gray100};
    color: ${theme.colors.gray900};
    transform: scale(1.1);

    body.dark-theme & {
      background: #3d3d3d;
      color: #e5e5e5;
    }
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const Alert = styled.div`
  padding: 12px 16px;
  border-radius: ${theme.borderRadius.md};
  margin-bottom: ${theme.spacing.md};
  background: ${props => props.$type === 'success' ? '#D1FAE5' : '#FEE2E2'};
  color: ${props => props.$type === 'success' ? '#065F46' : '#991B1B'};
  border: 1px solid ${props => props.$type === 'success' ? '#A7F3D0' : '#FECACA'};
  font-size: 14px;
`;

export const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};

  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: ${theme.colors.gray700};
    font-size: 13px;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  input, select, textarea {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid ${theme.colors.gray200};
    border-radius: ${theme.borderRadius.lg};
    font-size: 16px;
    transition: all ${theme.transitions.base};
    font-family: inherit;
    background: ${theme.colors.white};
    min-height: 44px;
    touch-action: manipulation;

    body.dark-theme & {
      background: #2d2d2d;
      border-color: #404040;
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 14px;
      min-height: auto;
    }

    &:focus {
      outline: none;
      border-color: ${theme.colors.primarySolid};
      box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
      background: #fafbff;

      body.dark-theme & {
        background: #353535;
        border-color: #7c3aed;
      }
    }

    &:hover:not(:read-only):not(:disabled) {
      border-color: ${theme.colors.gray300};

      body.dark-theme & {
        border-color: #555;
      }
    }

    &::placeholder {
      color: ${theme.colors.gray400};

      body.dark-theme & {
        color: #6d6d6d;
      }
    }

    &:read-only,
    &:disabled {
      background: #f9fafb;
      color: ${theme.colors.gray500};
      cursor: not-allowed;
      border-color: ${theme.colors.gray200};

      body.dark-theme & {
        background: #1f1f1f;
        color: #a0a0a0;
        border-color: #404040;
      }
    }
  }

  select {
    cursor: pointer;
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="%236366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 6 9 11 4"></polyline></svg>');
    background-repeat: no-repeat;
    background-position: right 12px center;
    padding-right: 36px;

    body.dark-theme & {
      background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="%23a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 6 9 11 4"></polyline></svg>');
    }

    option {
      background: white;
      color: ${theme.colors.gray900};
      padding: 8px;

      body.dark-theme & {
        background: #2d2d2d;
        color: #e5e5e5;
      }
    }
  }

  input[type="date"] {
    position: relative;
    cursor: pointer;
    color: ${theme.colors.gray700};
    font-weight: 500;
    
    &::-webkit-calendar-picker-indicator {
      cursor: pointer;
      background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="%236366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>') center/contain no-repeat;
      width: 20px;
      height: 20px;
      padding: 0;
      margin-left: 8px;
      opacity: 0.7;
      transition: opacity ${theme.transitions.fast};
      
      &:hover {
        opacity: 1;
      }
    }
    
    &::-webkit-datetime-edit-fields-wrapper {
      padding: 0;
    }
    
    &::-webkit-datetime-edit-text {
      color: ${theme.colors.gray500};
      padding: 0 4px;
    }
    
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-day-field,
    &::-webkit-datetime-edit-year-field {
      color: ${theme.colors.gray700};
      font-weight: 500;
      padding: 2px 4px;
      border-radius: 4px;
      
      &:focus {
        background: #eef2ff;
        color: #6366f1;
        outline: none;
      }
    }
    
    &::placeholder {
      color: ${theme.colors.gray400};
    }
    
    &:invalid {
      color: ${theme.colors.gray400};
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${theme.spacing.lg};
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};

  @media (min-width: 768px) {
    flex-direction: row;
    gap: ${theme.spacing.md};
    margin-top: ${theme.spacing.xl};
  }

  button {
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`;

export const ResponsiveGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.lg};
  }
`;

export const ResponsiveText = styled.p`
  font-size: 13px;
  line-height: 1.6;
  word-break: break-word;
  overflow-wrap: break-word;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ResponsiveImage = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: ${theme.borderRadius.lg};

  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const ResponsiveContainer = styled.div`
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;

  @media (max-width: 640px) {
    padding: 0 ${theme.spacing.md};
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${theme.spacing.lg};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  }
`;

export const StatCard = styled(Card)`
  padding: ${theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 150px;
    height: 150px;
    background: ${props => (props.$color || theme.colors.primarySolid) + '08'};
    border-radius: 50%;
    transform: translate(40%, -40%);
  }

  .stat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .stat-icon {
    width: 56px;
    height: 56px;
    border-radius: ${theme.borderRadius.xl};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    background: ${props => {
    const color = props.$color || theme.colors.primarySolid;
    return `linear-gradient(135deg, ${color}15 0%, ${color}25 100%)`;
  }};
    color: ${props => props.$color || theme.colors.primarySolid};
    box-shadow: ${theme.shadows.sm};
  }

  h3 {
    font-size: 14px;
    color: ${theme.colors.gray600};
    font-weight: 600;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;

    body.dark-theme & {
      color: #a0a0a0;
    }
  }

  .value {
    font-size: 36px;
    font-weight: 800;
    background: linear-gradient(135deg, ${theme.colors.gray900} 0%, ${theme.colors.gray700} 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: ${theme.spacing.sm} 0;
    position: relative;
    z-index: 1;

    body.dark-theme & {
      background: linear-gradient(135deg, #ffffff 0%, #e5e5e5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  .trend {
    font-size: 13px;
    color: ${theme.colors.gray500};
    font-weight: 500;
    position: relative;
    z-index: 1;

    body.dark-theme & {
      color: #a0a0a0;
    }
  }
`;

export const StatusBadge = styled.span`
  padding: 6px 14px;
  border-radius: ${theme.borderRadius.full};
  font-size: 12px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  background: ${props => {
    if (props.$status === 'Verified') return 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)';
    if (props.$status === 'Pending') return 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)';
    if (props.$status === 'Rejected') return 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)';
    return 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)';
  }};
  color: ${props => {
    if (props.$status === 'Verified') return theme.colors.success;
    if (props.$status === 'Pending') return theme.colors.warning;
    if (props.$status === 'Rejected') return theme.colors.danger;
    return theme.colors.warning;
  }};
  box-shadow: ${theme.shadows.sm};
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;

  @media (min-width: 768px) {
    font-size: 14px;
  }

  thead {
    background: ${theme.colors.gray50};
    border-bottom: 2px solid ${theme.colors.gray200};
    position: sticky;
    top: 0;
    z-index: 10;
    display: none;

    body.dark-theme & {
      background: #2d2d2d;
      border-bottom-color: #404040;
    }

    @media (min-width: 768px) {
      display: table-header-group;
    }
  }

  th {
    padding: 12px 16px;
    text-align: left;
    font-weight: 600;
    font-size: 11px;
    color: ${theme.colors.gray700};
    text-transform: uppercase;
    letter-spacing: 0.5px;
    white-space: nowrap;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      padding: 14px 16px;
      font-size: 13px;
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
    transition: all ${theme.transitions.fast};

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
    }

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

    &:active {
      transform: scale(0.999);
    }
  }

  td {
    padding: 12px 16px;
    border-bottom: 1px solid ${theme.colors.gray200};
    font-size: 13px;
    color: ${theme.colors.gray900};
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 4px;
    min-height: 44px;

    body.dark-theme & {
      border-bottom-color: #3d3d3d;
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      display: table-cell;
      justify-content: flex-start;
      flex-direction: row;
      gap: 0;
      padding: 16px;
      font-size: 14px;
      min-height: auto;
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
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.lg};
  flex-wrap: wrap;

  button {
    padding: 8px 12px;
    background: ${theme.colors.white};
    border: 1px solid ${theme.colors.gray300};
    color: ${theme.colors.gray700};
    border-radius: ${theme.borderRadius.md};
    cursor: pointer;
    font-size: 12px;
    transition: all 0.2s;
    min-height: 36px;
    min-width: 36px;
    touch-action: manipulation;

    body.dark-theme & {
      background: #2d2d2d;
      border-color: #3d3d3d;
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }

    &:hover:not(:disabled) {
      background: ${theme.colors.gray50};
      border-color: ${theme.colors.primary};

      body.dark-theme & {
        background: #353535;
        border-color: #7c3aed;
      }
    }

    &.active {
      background: ${theme.colors.primary};
      color: white;
      border-color: ${theme.colors.primary};

      body.dark-theme & {
        background: #7c3aed;
        border-color: #7c3aed;
      }
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  span {
    color: ${theme.colors.gray600};
    font-size: 12px;

    body.dark-theme & {
      color: #a0a0a0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
`;

export const MobileCheckbox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  accent-color: ${theme.colors.primary};
  min-width: 44px;
  min-height: 44px;
  padding: 12px;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  border: 2px solid ${theme.colors.gray300};
  border-radius: ${theme.borderRadius.md};
  background: white;
  transition: all ${theme.transitions.fast};

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #404040;
  }

  &:checked {
    background: ${theme.colors.primary};
    border-color: ${theme.colors.primary};
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="white"><path d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 11-1.06-1.06L12.72 4.22a.75.75 0 011.06 0z"/><path d="M2.22 9.28a.75.75 0 001.06 1.06L6.5 6.56a.75.75 0 10-1.06-1.06L2.22 9.28z"/></svg>');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;

    body.dark-theme & {
      background-color: #7c3aed;
      border-color: #7c3aed;
    }
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  @media (min-width: 768px) {
    width: 18px;
    height: 18px;
    min-width: auto;
    min-height: auto;
    padding: 0;
  }
`;

export const MobileToggle = styled.button`
  width: 48px;
  height: 28px;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all ${theme.transitions.base};
  background: ${props => props.$active ? theme.colors.primary : theme.colors.gray300};
  flex-shrink: 0;
  min-height: 44px;
  min-width: 44px;
  padding: 8px;
  touch-action: manipulation;

  body.dark-theme & {
    background: ${props => props.$active ? '#7c3aed' : '#555'};
  }

  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: white;
    top: 2px;
    left: ${props => props.$active ? '22px' : '2px'};
    transition: all ${theme.transitions.base};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }

  @media (min-width: 768px) {
    width: 48px;
    height: 26px;
    min-height: auto;
    min-width: auto;
    padding: 0;

    &::after {
      width: 20px;
      height: 20px;
      top: 3px;
      left: ${props => props.$active ? '25px' : '3px'};
    }
  }
`;

export const PageHeader = styled.div`
  margin-bottom: ${theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.gray900};
    margin: 0 0 ${theme.spacing.sm} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    color: ${theme.colors.gray600};
    font-size: 13px;
    margin: 0;
    font-family: ${theme.fonts.body};

    body.dark-theme & {
      color: #a0a0a0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  button {
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`;

export const FilterSection = styled(Card)`
  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.gray900};
    margin: 0 0 ${theme.spacing.md} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  align-items: center;
`;
