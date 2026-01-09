import styled from 'styled-components';
import { theme } from '../theme';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1000;
  padding: ${theme.spacing.md};
  animation: fadeIn 0.2s ease-in-out;

  @media (min-width: 768px) {
    align-items: center;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.xl} ${theme.borderRadius.xl} 0 0;
  padding: ${theme.spacing.lg};
  width: 100%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  animation: slideUp 0.3s ease-out;

  body.dark-theme & {
    background: #2d2d2d;
  }

  @media (min-width: 768px) {
    border-radius: ${theme.borderRadius.xl};
    padding: ${theme.spacing.xl};
    max-height: 85vh;
    animation: slideDown 0.3s ease-out;
  }

  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slideDown {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
  gap: ${theme.spacing.md};

  @media (min-width: 768px) {
    margin-bottom: ${theme.spacing.xl};
  }

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: ${theme.colors.gray900};
    margin: 0;
    flex: 1;

    body.dark-theme & {
      color: #e5e5e5;
    }

    @media (min-width: 768px) {
      font-size: 20px;
    }
  }

  button {
    background: none;
    border: none;
    padding: 8px;
    cursor: pointer;
    color: ${theme.colors.gray600};
    font-size: 20px;
    border-radius: ${theme.borderRadius.md};
    transition: all ${theme.transitions.fast};
    min-height: 44px;
    min-width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      min-height: auto;
      min-width: auto;
    }

    &:hover {
      background: ${theme.colors.gray100};
      color: ${theme.colors.gray900};

      body.dark-theme & {
        background: #3d3d3d;
        color: #e5e5e5;
      }
    }
  }
`;

export const ModalBody = styled.div`
  margin-bottom: ${theme.spacing.lg};

  @media (min-width: 768px) {
    margin-bottom: ${theme.spacing.xl};
  }

  p {
    font-size: 13px;
    color: ${theme.colors.gray600};
    margin: 0 0 ${theme.spacing.md} 0;
    line-height: 1.6;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
      margin-bottom: ${theme.spacing.lg};
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.sm};
  border-top: 1px solid ${theme.colors.gray200};
  padding-top: ${theme.spacing.lg};

  body.dark-theme & {
    border-top-color: #404040;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    gap: ${theme.spacing.md};
    padding-top: ${theme.spacing.xl};
  }

  button {
    width: 100%;

    @media (min-width: 768px) {
      width: auto;
      flex: 1;
    }

    &:last-child {
      @media (min-width: 768px) {
        flex: 0;
      }
    }
  }
`;

export const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};

  @media (min-width: 768px) {
    margin-bottom: ${theme.spacing.xl};
  }

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

  input,
  select,
  textarea {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid ${theme.colors.gray200};
    border-radius: ${theme.borderRadius.lg};
    font-size: 16px;
    transition: all ${theme.transitions.base};
    font-family: inherit;
    background: white;
    min-height: 44px;
    touch-action: manipulation;

    body.dark-theme & {
      background: #1f1f1f;
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

    &::placeholder {
      color: ${theme.colors.gray400};

      body.dark-theme & {
        color: #6d6d6d;
      }
    }
  }

  textarea {
    resize: vertical;
    min-height: 120px;
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
`;

export const ConfirmationModal = styled(ModalContent)`
  max-width: 400px;
`;

export const WarningIcon = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fee2e2;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  margin: 0 auto ${theme.spacing.lg};

  body.dark-theme & {
    background: #7f1d1d;
  }

  @media (min-width: 768px) {
    margin-bottom: ${theme.spacing.xl};
  }
`;

export const ConfirmationText = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${theme.colors.gray600};
  margin: 0 0 ${theme.spacing.lg} 0;
  line-height: 1.6;

  body.dark-theme & {
    color: #b0b0b0;
  }

  @media (min-width: 768px) {
    font-size: 15px;
    margin-bottom: ${theme.spacing.xl};
  }

  strong {
    color: ${theme.colors.gray900};
    font-weight: 600;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
`;
