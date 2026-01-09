import styled from 'styled-components';
import { theme } from '../theme';

export const ReportsContainer = styled.div`
  font-family: ${theme.fonts.body};
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: ${theme.colors.gray900};
    margin: 0;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  button {
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
    }
  }
`;

export const FilterSection = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.gray200};

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #404040;
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
    margin-bottom: ${theme.spacing.xl};
  }

  h3 {
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.gray900};
    margin: 0 0 ${theme.spacing.md} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const FilterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ChartCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  margin-bottom: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.gray200};

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #404040;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
    margin-bottom: ${theme.spacing.xl};
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.gray900};
    margin: 0 0 ${theme.spacing.lg} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  h3 {
    font-size: 13px;
    font-weight: 600;
    color: ${theme.colors.gray700};
    margin: 0 0 ${theme.spacing.lg} 0;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 15px;
    }
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    height: 400px;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    margin-bottom: ${theme.spacing.xl};
  }
`;

export const StatCard = styled.div`
  background: white;
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.xl};
  border: 1px solid ${theme.colors.gray200};
  box-shadow: ${theme.shadows.sm};

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #3d3d3d;
  }

  @media (min-width: 640px) {
    padding: ${theme.spacing.lg};
  }

  .stat-label {
    font-size: 11px;
    color: ${theme.colors.gray600};
    font-weight: 500;
    margin-bottom: ${theme.spacing.sm};

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 640px) {
      font-size: 13px;
    }
  }

  .stat-value {
    font-size: 24px;
    font-weight: 800;
    color: ${theme.colors.textPrimary};

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 640px) {
      font-size: 28px;
    }
  }

  .stat-trend {
    font-size: 11px;
    color: ${theme.colors.gray500};
    margin-top: ${theme.spacing.sm};

    body.dark-theme & {
      color: #a0a0a0;
    }

    @media (min-width: 640px) {
      font-size: 12px;
    }
  }
`;

export const TableCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid ${theme.colors.gray200};
  overflow: hidden;

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #404040;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  }

  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    color: ${theme.colors.gray900};
    margin: 0 0 ${theme.spacing.lg} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
`;

export const TableWrapper = styled.div`
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

export const StyledTable = styled.table`
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
  }

  td {
    padding: 12px 16px;
    color: ${theme.colors.textPrimary};
    border-bottom: 1px solid ${theme.colors.gray200};
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 44px;

    body.dark-theme & {
      color: #e5e5e5;
      border-bottom-color: #3d3d3d;
    }

    @media (min-width: 768px) {
      display: table-cell;
      justify-content: flex-start;
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

export const EmptyState = styled.div`
  text-align: center;
  padding: ${theme.spacing.xl};

  @media (min-width: 768px) {
    padding: ${theme.spacing.xl} 0;
  }

  svg {
    width: 64px;
    height: 64px;
    margin-bottom: ${theme.spacing.lg};
    opacity: 0.5;
  }

  h3 {
    font-size: 16px;
    font-weight: 600;
    color: ${theme.colors.gray900};
    margin: 0 0 ${theme.spacing.sm} 0;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  p {
    color: ${theme.colors.gray600};
    font-size: 13px;
    margin: 0;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
`;
