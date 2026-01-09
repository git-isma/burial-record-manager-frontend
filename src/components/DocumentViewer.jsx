import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import styled from 'styled-components';
import { Card, Button, StatusBadge } from '../styles/CommonStyles';
import { MdPerson, MdCalendarToday, MdLocationOn, MdVerified, MdArrowBack, MdInfo } from 'react-icons/md';
import { useSettings } from '../contexts/SettingsContext';

// Helper function to download file from URL
const downloadFile = (url, filename) => {
  // Create a temporary anchor element to trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const ViewerGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }

  h2 {
    body.dark-theme & {
      color: #e5e5e5;
    }
  }

  p {
    body.dark-theme & {
      color: #b0b0b0;
    }
  }
`;

const DocumentFrame = styled.iframe`
  width: 100%;
  height: 400px;
  border: 1px solid #ddd;
  border-radius: 8px;

  @media (min-width: 768px) {
    height: 600px;
  }

  body.dark-theme & {
    border-color: #404040;
  }
`;

const DocumentImage = styled.img`
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-height: 600px;
  object-fit: contain;

  body.dark-theme & {
    border-color: #404040;
  }
`;

const InfoSection = styled.div`
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e5e7eb;

  body.dark-theme & {
    border-bottom-color: #404040;
  }

  &:last-of-type {
    border-bottom: none;
  }

  strong {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 6px;
    color: #6b7280;
    font-size: 13px;
    font-weight: 500;

    body.dark-theme & {
      color: #b0b0b0;
    }
  }

  p {
    margin: 0;
    color: #111827;
    font-size: 15px;
    font-weight: 500;
    padding-left: 22px;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
`;

const SidePanel = styled(Card)`
  position: relative;
  max-height: none;
  overflow-y: visible;

  @media (min-width: 1024px) {
    position: sticky;
    top: 20px;
    max-height: calc(100vh - 40px);
    overflow-y: auto;
  }
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;

    body.dark-theme & {
      background: #2d2d2d;
    }
  }
  
  &::-webkit-scrollbar-thumb {
    background: #6366f1;
    border-radius: 10px;

    body.dark-theme & {
      background: #7c3aed;
    }
    
    &:hover {
      background: #4f46e5;

      body.dark-theme & {
        background: #8b5cf6;
      }
    }
  }
`;

const PanelHeader = styled.div`
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 2px solid #e5e7eb;

  body.dark-theme & {
    border-bottom-color: #404040;
  }
  
  .permit-number {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 4px;

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
  
  .subtitle {
    font-size: 13px;
    color: #6b7280;
    font-weight: 500;

    body.dark-theme & {
      color: #b0b0b0;
    }
  }
`;

function DocumentViewer() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { formatDate } = useSettings();
  const [record, setRecord] = useState(null);

  useEffect(() => {
    fetchRecord();
  }, [id]);

  const fetchRecord = async () => {
    const token = localStorage.getItem('token');
    try {
      const res = await axios.get(`/records/${id}`, {
        headers: { 'x-auth-token': token }
      });
      setRecord(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!record) return <div>Loading...</div>;

  return (
    <ViewerGrid>
      <Card>
        <h2 style={{ marginBottom: '20px' }}>Document Preview</h2>

        {record.attachments && record.attachments.length > 0 ? (
          <div>
            {record.attachments.map((file, idx) => (
              <div key={idx} style={{ marginBottom: '20px' }}>
                {file.filename.endsWith('.pdf') ? (
                  <DocumentFrame
                    src={file.path}
                    title="PDF Preview"
                  />
                ) : (
                  <DocumentImage
                    src={file.path}
                    alt="Record scan"
                  />
                )}
                <div style={{ marginTop: '10px' }}>
                  <Button
                    $variant="secondary"
                    onClick={() => downloadFile(file.path, file.filename)}
                  >
                    📥 Download {file.filename}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No attachments available</p>
        )}
      </Card>

      <SidePanel>
        <PanelHeader>
          <div className="permit-number">{record.recordNumber}</div>
          <div className="subtitle">{`${record.firstName} ${record.middleName || ''} ${record.lastName}`.replace(/\s+/g, ' ').trim()}</div>
        </PanelHeader>

        <InfoSection>
          <strong><MdPerson size={16} /> Gender & Age</strong>
          <p>{record.gender}, {record.age} years</p>
        </InfoSection>

        <InfoSection>
          <strong><MdCalendarToday size={16} /> Date of Death</strong>
          <p>{formatDate(record.dateOfDeath)}</p>
        </InfoSection>

        <InfoSection>
          <strong><MdLocationOn size={16} /> Burial Location</strong>
          <p>{record.burialLocation}</p>
        </InfoSection>

        <InfoSection>
          <strong><MdPerson size={16} /> Next of Kin</strong>
          <p>{record.nextOfKinName}</p>
          <p style={{ fontSize: '13px', color: '#6b7280' }}>{record.nextOfKinContact}</p>
        </InfoSection>

        <InfoSection>
          <strong><MdVerified size={16} /> Status</strong>
          <p>
            <StatusBadge $status={record.status === 'Pending' ? 'Pending Verification' : record.status}>
              {record.status === 'Pending' ? 'Pending Verification' : record.status}
            </StatusBadge>
          </p>
        </InfoSection>

        <InfoSection>
          <strong><MdCalendarToday size={16} /> Created On</strong>
          <p>{formatDate(record.createdAt)} at {new Date(record.createdAt).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</p>
        </InfoSection>

        <Button $variant="secondary" onClick={() => navigate('/records')} style={{ width: '100%', marginTop: '16px' }}>
          <MdArrowBack size={18} /> Back to Records
        </Button>
      </SidePanel>
    </ViewerGrid>
  );
}

export default DocumentViewer;
