import styled from 'styled-components';
import { theme } from './theme';

/**
 * Mobile-Responsive Dropdown Component
 * Automatically adapts to mobile and desktop screens
 */
export const ResponsiveSelect = styled.select`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${theme.colors.gray200};
  border-radius: ${theme.borderRadius.lg};
  font-size: 16px;
  font-family: inherit;
  background: white;
  color: ${theme.colors.gray900};
  cursor: pointer;
  transition: all ${theme.transitions.base};
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="%236366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 6 9 11 4"></polyline></svg>');
  background-repeat: no-repeat;
  background-position: right 12px center;
  padding-right: 36px;
  min-height: 44px;
  touch-action: manipulation;

  body.dark-theme & {
    background-color: #2d2d2d;
    border-color: #404040;
    color: #e5e5e5;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="%23a78bfa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 6 9 11 4"></polyline></svg>');
  }

  @media (min-width: 768px) {
    font-size: 14px;
    min-height: auto;
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.primarySolid};
    box-shadow: 0 0 0 4px rgba(124, 58, 237, 0.1);
    background-color: #fafbff;

    body.dark-theme & {
      background-color: #353535;
      border-color: #7c3aed;
    }
  }

  &:hover:not(:disabled) {
    border-color: ${theme.colors.gray300};

    body.dark-theme & {
      border-color: #555;
    }
  }

  &:disabled {
    background-color: #f9fafb;
    color: ${theme.colors.gray500};
    cursor: not-allowed;
    border-color: ${theme.colors.gray200};

    body.dark-theme & {
      background-color: #1f1f1f;
      color: #a0a0a0;
      border-color: #404040;
    }
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
`;

/**
 * Mobile-Responsive Input Component
 */
export const ResponsiveInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${theme.colors.gray200};
  border-radius: ${theme.borderRadius.lg};
  font-size: 16px;
  font-family: inherit;
  background: white;
  color: ${theme.colors.gray900};
  transition: all ${theme.transitions.base};
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
`;

/**
 * Mobile-Responsive Textarea Component
 */
export const ResponsiveTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  border: 2px solid ${theme.colors.gray200};
  border-radius: ${theme.borderRadius.lg};
  font-size: 16px;
  font-family: inherit;
  background: white;
  color: ${theme.colors.gray900};
  transition: all ${theme.transitions.base};
  min-height: 120px;
  resize: vertical;
  touch-action: manipulation;

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #404040;
    color: #e5e5e5;
  }

  @media (min-width: 768px) {
    font-size: 14px;
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
`;

/**
 * Mobile-Responsive Button Group
 */
export const ResponsiveButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  width: 100%;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: ${theme.spacing.md};
    width: auto;
  }

  button {
    flex: 1;
    min-width: 100px;

    @media (min-width: 640px) {
      flex: auto;
    }
  }
`;

/**
 * Mobile-Responsive Table Wrapper
 */
export const ResponsiveTableWrapper = styled.div`
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

  /* Scrollbar styling */
  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.gray100};
    border-radius: 3px;

    body.dark-theme & {
      background: #2d2d2d;
    }
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray400};
    border-radius: 3px;

    &:hover {
      background: ${theme.colors.gray500};
    }

    body.dark-theme & {
      background: #555;

      &:hover {
        background: #666;
      }
    }
  }
`;

/**
 * Mobile-Responsive Badge
 */
export const ResponsiveBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border-radius: ${theme.borderRadius.full};
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  background: ${props => {
    if (props.$variant === 'success') return '#d1fae5';
    if (props.$variant === 'danger') return '#fee2e2';
    if (props.$variant === 'warning') return '#fef3c7';
    return '#dbeafe';
  }};
  color: ${props => {
    if (props.$variant === 'success') return '#059669';
    if (props.$variant === 'danger') return '#dc2626';
    if (props.$variant === 'warning') return '#d97706';
    return '#0284c7';
  }};

  @media (min-width: 768px) {
    font-size: 12px;
    padding: 6px 14px;
  }
`;

/**
 * Mobile-Responsive Card
 */
export const ResponsiveCard = styled.div`
  background: white;
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

/**
 * Mobile-Responsive Grid
 */
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
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

/**
 * Mobile-Responsive Flex Container
 */
export const ResponsiveFlex = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};

  @media (min-width: 768px) {
    flex-direction: row;
    gap: ${theme.spacing.lg};
  }

  ${props => props.$align && `align-items: ${props.$align};`}
  ${props => props.$justify && `justify-content: ${props.$justify};`}
`;
