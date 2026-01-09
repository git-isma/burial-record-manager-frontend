import { useState } from 'react';
import styled from 'styled-components';
import { Card, Button, FormGroup, FormGrid } from '../styles/CommonStyles';
import { theme } from '../styles/theme';
import { MdCheckCircle, MdRadioButtonUnchecked, MdClose } from 'react-icons/md';

const CustomizerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: ${theme.spacing.md};

  @media (min-width: 768px) {
    padding: 0;
  }
`;

const CustomizerModal = styled(Card)`
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;

  @media (min-width: 768px) {
    max-height: 80vh;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
  padding-bottom: ${theme.spacing.lg};
  border-bottom: 2px solid ${theme.colors.gray200};

  body.dark-theme & {
    border-bottom-color: #3d3d3d;
  }

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: 700;
    color: ${theme.colors.textPrimary};

    body.dark-theme & {
      color: #e5e5e5;
    }
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 24px;
    color: ${theme.colors.gray500};
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    body.dark-theme & {
      color: #a0a0a0;
    }

    &:hover {
      color: ${theme.colors.textPrimary};

      body.dark-theme & {
        color: #e5e5e5;
      }
    }
  }
`;

const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.textPrimary};
  margin: ${theme.spacing.lg} 0 ${theme.spacing.md} 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  body.dark-theme & {
    color: #e5e5e5;
  }

  &:first-child {
    margin-top: 0;
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const CheckboxItem = styled.label`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.gray200};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all ${theme.transitions.fast};
  background: white;

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #3d3d3d;
  }

  &:hover {
    border-color: ${theme.colors.primarySolid};
    background: #f9fafb;

    body.dark-theme & {
      background: #353535;
      border-color: #7c3aed;
    }
  }

  input {
    display: none;
  }

  .checkbox-icon {
    font-size: 20px;
    color: ${theme.colors.gray400};
    flex-shrink: 0;

    body.dark-theme & {
      color: #6d6d6d;
    }
  }

  input:checked ~ .checkbox-icon {
    color: ${theme.colors.primarySolid};

    body.dark-theme & {
      color: #a78bfa;
    }
  }

  .label-text {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
    color: ${theme.colors.textPrimary};

    body.dark-theme & {
      color: #e5e5e5;
    }
  }

  .label-desc {
    font-size: 12px;
    color: ${theme.colors.gray500};
    margin-top: 2px;

    body.dark-theme & {
      color: #a0a0a0;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.xl};
  padding-top: ${theme.spacing.lg};
  border-top: 1px solid ${theme.colors.gray200};

  body.dark-theme & {
    border-top-color: #3d3d3d;
  }

  button {
    flex: 1;
  }
`;

const ReportPreview = styled.div`
  background: ${theme.colors.gray50};
  border: 1px solid ${theme.colors.gray200};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin-top: ${theme.spacing.md};
  font-size: 12px;
  color: ${theme.colors.gray600};

  body.dark-theme & {
    background: #1f1f1f;
    border-color: #3d3d3d;
    color: #b0b0b0;
  }

  h4 {
    margin: 0 0 ${theme.spacing.sm} 0;
    font-size: 13px;
    font-weight: 600;
    color: ${theme.colors.textPrimary};

    body.dark-theme & {
      color: #e5e5e5;
    }
  }

  ul {
    margin: 0;
    padding-left: 20px;
    list-style: none;

    li {
      margin: 4px 0;

      &:before {
        content: '✓ ';
        color: ${theme.colors.success};
        font-weight: 600;
        margin-right: 6px;
      }
    }
  }
`;

function ReportCustomizer({ isOpen, onClose, onApply, currentConfig }) {
  const [config, setConfig] = useState(currentConfig || {
    includeStats: true,
    includeCharts: true,
    includeTable: true,
    includeMonthlyTrend: true,
    includeGenderDistribution: true,
    includeLocationBreakdown: true,
    includeAgeGroupAnalysis: true,
    includeSummary: true,
    chartType: 'bar', // bar, pie, line
    tableFormat: 'detailed', // detailed, summary
    pageOrientation: 'portrait', // portrait, landscape
    includeHeader: true,
    includeFooter: true,
    includePageNumbers: true,
    colorScheme: 'default' // default, grayscale, colorful
  });

  const handleToggle = (key) => {
    setConfig(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSelectChange = (key, value) => {
    setConfig(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleApply = () => {
    onApply(config);
    onClose();
  };

  const handleReset = () => {
    setConfig({
      includeStats: true,
      includeCharts: true,
      includeTable: true,
      includeMonthlyTrend: true,
      includeGenderDistribution: true,
      includeLocationBreakdown: true,
      includeAgeGroupAnalysis: true,
      includeSummary: true,
      chartType: 'bar',
      tableFormat: 'detailed',
      pageOrientation: 'portrait',
      includeHeader: true,
      includeFooter: true,
      includePageNumbers: true,
      colorScheme: 'default'
    });
  };

  if (!isOpen) return null;

  const selectedSections = [
    config.includeStats && 'Statistics',
    config.includeCharts && 'Charts',
    config.includeTable && 'Data Table',
    config.includeMonthlyTrend && 'Monthly Trend',
    config.includeGenderDistribution && 'Gender Distribution',
    config.includeLocationBreakdown && 'Location Breakdown',
    config.includeAgeGroupAnalysis && 'Age Group Analysis',
    config.includeSummary && 'Summary'
  ].filter(Boolean);

  return (
    <CustomizerContainer onClick={onClose}>
      <CustomizerModal onClick={e => e.stopPropagation()}>
        <ModalHeader>
          <h2>Customize Report</h2>
          <button onClick={onClose}>
            <MdClose />
          </button>
        </ModalHeader>

        <SectionTitle>Report Sections</SectionTitle>
        <CheckboxGroup>
          <CheckboxItem>
            <input
              type="checkbox"
              checked={config.includeStats}
              onChange={() => handleToggle('includeStats')}
            />
            {config.includeStats ? <MdCheckCircle className="checkbox-icon" /> : <MdRadioButtonUnchecked className="checkbox-icon" />}
            <div>
              <div className="label-text">Statistics Cards</div>
              <div className="label-desc">Total records, pending, completed, verified</div>
            </div>
          </CheckboxItem>

          <CheckboxItem>
            <input
              type="checkbox"
              checked={config.includeCharts}
              onChange={() => handleToggle('includeCharts')}
            />
            {config.includeCharts ? <MdCheckCircle className="checkbox-icon" /> : <MdRadioButtonUnchecked className="checkbox-icon" />}
            <div>
              <div className="label-text">Charts & Visualizations</div>
              <div className="label-desc">Visual representation of data</div>
            </div>
          </CheckboxItem>

          <CheckboxItem>
            <input
              type="checkbox"
              checked={config.includeMonthlyTrend}
              onChange={() => handleToggle('includeMonthlyTrend')}
            />
            {config.includeMonthlyTrend ? <MdCheckCircle className="checkbox-icon" /> : <MdRadioButtonUnchecked className="checkbox-icon" />}
            <div>
              <div className="label-text">Monthly Trend</div>
              <div className="label-desc">Records created over time</div>
            </div>
          </CheckboxItem>

          <CheckboxItem>
            <input
              type="checkbox"
              checked={config.includeGenderDistribution}
              onChange={() => handleToggle('includeGenderDistribution')}
            />
            {config.includeGenderDistribution ? <MdCheckCircle className="checkbox-icon" /> : <MdRadioButtonUnchecked className="checkbox-icon" />}
            <div>
              <div className="label-text">Gender Distribution</div>
              <div className="label-desc">Breakdown by gender</div>
            </div>
          </CheckboxItem>

          <CheckboxItem>
            <input
              type="checkbox"
              checked={config.includeLocationBreakdown}
              onChange={() => handleToggle('includeLocationBreakdown')}
            />
            {config.includeLocationBreakdown ? <MdCheckCircle className="checkbox-icon" /> : <MdRadioButtonUnchecked className="checkbox-icon" />}
            <div>
              <div className="label-text">Location Breakdown</div>
              <div className="label-desc">Records by burial location</div>
            </div>
          </CheckboxItem>

          <CheckboxItem>
            <input
              type="checkbox"
              checked={config.includeAgeGroupAnalysis}
              onChange={() => handleToggle('includeAgeGroupAnalysis')}
            />
            {config.includeAgeGroupAnalysis ? <MdCheckCircle className="checkbox-icon" /> : <MdRadioButtonUnchecked className="checkbox-icon" />}
            <div>
              <div className="label-text">Age Group Analysis</div>
              <div className="label-desc">Distribution by age category</div>
            </div>
          </CheckboxItem>

          <CheckboxItem>
            <input
              type="checkbox"
              checked={config.includeTable}
              onChange={() => handleToggle('includeTable')}
            />
            {config.includeTable ? <MdCheckCircle className="checkbox-icon" /> : <MdRadioButtonUnchecked className="checkbox-icon" />}
            <div>
              <div className="label-text">Data Table</div>
              <div className="label-desc">Detailed record listing</div>
            </div>
          </CheckboxItem>

          <CheckboxItem>
            <input
              type="checkbox"
              checked={config.includeSummary}
              onChange={() => handleToggle('includeSummary')}
            />
            {config.includeSummary ? <MdCheckCircle className="checkbox-icon" /> : <MdRadioButtonUnchecked className="checkbox-icon" />}
            <div>
              <div className="label-text">Summary</div>
              <div className="label-desc">Report summary and notes</div>
            </div>
          </CheckboxItem>
        </CheckboxGroup>

        <SectionTitle>Chart Settings</SectionTitle>
        <FormGroup>
          <label>Chart Type</label>
          <select value={config.chartType} onChange={e => handleSelectChange('chartType', e.target.value)}>
            <option value="bar">Bar Chart</option>
            <option value="pie">Pie Chart</option>
            <option value="line">Line Chart</option>
          </select>
        </FormGroup>

        <SectionTitle>Export Settings</SectionTitle>
        <FormGroup>
          <label>Page Orientation</label>
          <select value={config.pageOrientation} onChange={e => handleSelectChange('pageOrientation', e.target.value)}>
            <option value="portrait">Portrait</option>
            <option value="landscape">Landscape</option>
          </select>
        </FormGroup>

        <FormGroup>
          <label>Color Scheme</label>
          <select value={config.colorScheme} onChange={e => handleSelectChange('colorScheme', e.target.value)}>
            <option value="default">Default</option>
            <option value="grayscale">Grayscale</option>
            <option value="colorful">Colorful</option>
          </select>
        </FormGroup>

        <CheckboxItem>
          <input
            type="checkbox"
            checked={config.includeHeader}
            onChange={() => handleToggle('includeHeader')}
          />
          {config.includeHeader ? <MdCheckCircle className="checkbox-icon" /> : <MdRadioButtonUnchecked className="checkbox-icon" />}
          <div>
            <div className="label-text">Include Header</div>
          </div>
        </CheckboxItem>

        <CheckboxItem>
          <input
            type="checkbox"
            checked={config.includeFooter}
            onChange={() => handleToggle('includeFooter')}
          />
          {config.includeFooter ? <MdCheckCircle className="checkbox-icon" /> : <MdRadioButtonUnchecked className="checkbox-icon" />}
          <div>
            <div className="label-text">Include Footer</div>
          </div>
        </CheckboxItem>

        <CheckboxItem>
          <input
            type="checkbox"
            checked={config.includePageNumbers}
            onChange={() => handleToggle('includePageNumbers')}
          />
          {config.includePageNumbers ? <MdCheckCircle className="checkbox-icon" /> : <MdRadioButtonUnchecked className="checkbox-icon" />}
          <div>
            <div className="label-text">Include Page Numbers</div>
          </div>
        </CheckboxItem>

        <ReportPreview>
          <h4>Report Preview</h4>
          <ul>
            {selectedSections.length > 0 ? (
              selectedSections.map((section, idx) => (
                <li key={idx}>{section}</li>
              ))
            ) : (
              <li style={{ color: '#ef4444' }}>No sections selected</li>
            )}
          </ul>
        </ReportPreview>

        <ButtonGroup>
          <Button $variant="secondary" onClick={handleReset}>
            Reset to Default
          </Button>
          <Button $variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button $variant="primary" onClick={handleApply}>
            Apply Settings
          </Button>
        </ButtonGroup>
      </CustomizerModal>
    </CustomizerContainer>
  );
}

export default ReportCustomizer;
