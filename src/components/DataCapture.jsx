import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { apiService } from "../utils/api";
import { uploadMultipleToS3 } from "../utils/uploadToS3";
import styled from "styled-components";
import {
  Card,
  Button,
  FormGroup,
  FormGrid,
  PageHeader,
} from "../styles/CommonStyles";
import { theme } from "../styles/theme";
import ModernDatePicker from "./ModernDatePicker";
import { Modal } from "./Modal";
import { useToast } from "../contexts/ToastContext";
import { useSettings } from "../contexts/SettingsContext";
import {
  MdArrowBack,
  MdSave,
  MdAssignment,
  MdPerson,
  MdAttachFile,
  MdInfoOutline,
  MdFolder,
  MdCheckCircle,
  MdSchedule,
  MdVerified,
  MdRefresh,
  MdWarning,
  MdCheckCircleOutline,
  MdCancel,
  MdAdd,
  MdDelete,
  MdList,
} from "react-icons/md";
import { InlineSpinner } from "./Spinner";
import Tooltip from "./Tooltip";

const SectionTitle = styled.h3`
  margin-top: ${(props) => (props.$first ? "0" : theme.spacing.xl)};
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.colors.textPrimary};
  font-size: ${theme.fontSizes.xl};
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding-bottom: ${theme.spacing.sm};
  border-bottom: 2px solid ${theme.colors.gray200};

  body.dark-theme & {
    color: #e5e5e5;
    border-bottom-color: #3d3d3d;
  }

  span {
    font-size: 24px;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
    gap: ${theme.spacing.lg};
  }

  label {
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};
    padding: ${theme.spacing.md} ${theme.spacing.lg};
    border: 2px solid ${theme.colors.gray200};
    border-radius: ${theme.borderRadius.lg};
    cursor: pointer;
    transition: all ${theme.transitions.base};
    font-weight: 500;
    background: white;
    flex: 1;
    min-width: 0;
    min-height: 44px;
    touch-action: manipulation;

    @media (min-width: 640px) {
      flex: auto;
    }

    body.dark-theme & {
      background: #2d2d2d;
      border-color: #3d3d3d;
      color: #e5e5e5;
    }

    input {
      width: auto;
      margin: 0;
      cursor: pointer;
      flex-shrink: 0;
      min-width: 20px;
      min-height: 20px;
    }

    &:hover {
      border-color: ${theme.colors.primarySolid};
      background: linear-gradient(135deg, #fafbff 0%, #ffffff 100%);

      body.dark-theme & {
        background: #353535;
        border-color: #7c3aed;
      }
    }

    input:checked + & {
      border-color: ${theme.colors.primarySolid};
      background: linear-gradient(135deg, #f0f4ff 0%, #e8eeff 100%);

      body.dark-theme & {
        background: #3d2d5d;
        border-color: #7c3aed;
      }
    }
  }
`;

const FileUploadArea = styled.div`
  border: 3px dashed ${theme.colors.gray300};
  border-radius: ${theme.borderRadius.xl};
  padding: ${theme.spacing.lg};
  text-align: center;
  transition: all ${theme.transitions.base};
  background: ${theme.colors.gray50};
  cursor: pointer;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  touch-action: manipulation;

  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
    min-height: 140px;
  }

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #3d3d3d;
  }

  &:hover {
    border-color: ${theme.colors.primarySolid};
    background: linear-gradient(135deg, #fafbff 0%, #ffffff 100%);

    body.dark-theme & {
      background: #353535;
      border-color: #7c3aed;
    }
  }

  .icon {
    font-size: 40px;
    margin-bottom: ${theme.spacing.md};
    flex-shrink: 0;

    @media (min-width: 768px) {
      font-size: 48px;
    }
  }

  p {
    color: ${theme.colors.gray600};
    font-size: 13px;
    margin: ${theme.spacing.sm} 0;
    word-break: break-word;

    body.dark-theme & {
      color: #b0b0b0;
    }

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  input[type="file"] {
    display: none;
  }
`;

const FileInfo = styled.div`
  margin-top: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  background: linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%);
  border-radius: ${theme.borderRadius.lg};
  color: ${theme.colors.success};
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};

  body.dark-theme & {
    background: linear-gradient(135deg, #064e3b 0%, #065f46 100%);
    color: #6ee7b7;
  }

  svg {
    margin-right: 8px;
  }
`;

const ExistingAttachmentsSection = styled.div`
  margin-top: ${theme.spacing.lg};
  padding: ${theme.spacing.lg};
  background: ${theme.colors.gray50};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.gray200};

  body.dark-theme & {
    background: #1f1f1f;
    border-color: #3d3d3d;
  }

  h4 {
    margin: 0 0 ${theme.spacing.md} 0;
    font-size: 14px;
    font-weight: 600;
    color: ${theme.colors.gray900};
    display: flex;
    align-items: center;
    gap: ${theme.spacing.sm};

    body.dark-theme & {
      color: #e5e5e5;
    }
  }
`;

const AttachmentsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const AttachmentItem = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  background: white;
  border: 1px solid ${theme.colors.gray200};
  border-radius: ${theme.borderRadius.lg};
  text-decoration: none;
  transition: all ${theme.transitions.base};
  cursor: pointer;
  min-height: 60px;

  body.dark-theme & {
    background: #2d2d2d;
    border-color: #3d3d3d;
  }

  &:hover {
    border-color: ${theme.colors.primarySolid};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);

    body.dark-theme & {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      border-color: #7c3aed;
    }
  }

  .file-icon {
    font-size: 24px;
    flex-shrink: 0;
  }

  .file-info {
    flex: 1;
    min-width: 0;

    .file-name {
      font-size: 13px;
      font-weight: 600;
      color: ${theme.colors.gray900};
      margin: 0 0 4px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      body.dark-theme & {
        color: #e5e5e5;
      }
    }

    .file-date {
      font-size: 11px;
      color: ${theme.colors.gray500};
      margin: 0;

      body.dark-theme & {
        color: #a0a0a0;
      }
    }
  }

  .download-icon {
    font-size: 18px;
    color: ${theme.colors.primarySolid};
    flex-shrink: 0;
    transition: all ${theme.transitions.fast};

    body.dark-theme & {
      color: #a78bfa;
    }
  }

  &:hover .download-icon {
    transform: scale(1.2);
  }
`;

const InfoIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: ${theme.spacing.xs};
  color: #6b7280;
  cursor: help;
  transition: all ${theme.transitions.base};
  opacity: 0.7;

  body.dark-theme & {
    color: #9ca3af;
  }

  &:hover {
    color: #3b82f6;
    opacity: 1;
    transform: scale(1.15);

    body.dark-theme & {
      color: #60a5fa;
    }
  }
`;

const HelperText = styled.p`
  margin-top: 6px;
  font-size: 12px;
  color: #6b7280;
  line-height: 1.4;
  display: flex;
  align-items: center;

  body.dark-theme & {
    color: #9ca3af;
  }

  svg {
    flex-shrink: 0;
  }
`;

const AttachmentNote = styled.div`
  margin-bottom: ${theme.spacing.lg};
  padding: ${theme.spacing.md};
  background: #fef3c7;
  border-left: 4px solid #f59e0b;
  border-radius: ${theme.borderRadius.md};
  display: flex;
  gap: ${theme.spacing.md};

  body.dark-theme & {
    background: #78350f;
    border-left-color: #f59e0b;
  }

  .icon {
    flex-shrink: 0;
    color: #d97706;
    font-size: 20px;

    body.dark-theme & {
      color: #fbbf24;
    }
  }

  .content {
    flex: 1;

    h4 {
      margin: 0 0 6px 0;
      font-size: 13px;
      font-weight: 600;
      color: #92400e;

      body.dark-theme & {
        color: #fcd34d;
      }
    }

    p {
      margin: 0;
      font-size: 12px;
      color: #b45309;
      line-height: 1.5;

      body.dark-theme & {
        color: #fde68a;
      }
    }

    ul {
      margin: 6px 0 0 0;
      padding-left: 20px;
      font-size: 12px;
      color: #b45309;

      body.dark-theme & {
        color: #fde68a;
      }

      li {
        margin: 4px 0;
      }
    }
  }
`;

const ExemptionNote = styled.div`
  margin-bottom: ${theme.spacing.lg};
  padding: ${theme.spacing.md};
  background: #d1fae5;
  border-left: 4px solid #10b981;
  border-radius: ${theme.borderRadius.md};
  display: flex;
  gap: ${theme.spacing.md};

  body.dark-theme & {
    background: #064e3b;
    border-left-color: #10b981;
  }

  .icon {
    flex-shrink: 0;
    color: #059669;
    font-size: 20px;

    body.dark-theme & {
      color: #6ee7b7;
    }
  }

  .content {
    flex: 1;

    h4 {
      margin: 0 0 6px 0;
      font-size: 13px;
      font-weight: 600;
      color: #065f46;

      body.dark-theme & {
        color: #a7f3d0;
      }
    }

    p {
      margin: 0;
      font-size: 12px;
      color: #047857;
      line-height: 1.5;

      body.dark-theme & {
        color: #86efac;
      }
    }
  }
`;

const SubmitSection = styled.div`
  margin-top: ${theme.spacing["2xl"]};
  padding-top: ${theme.spacing.xl};
  border-top: 2px solid ${theme.colors.gray200};
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;
  flex-direction: column;

  @media (min-width: 640px) {
    flex-direction: row;
  }

  body.dark-theme & {
    border-top-color: #3d3d3d;
  }

  button {
    width: 100%;

    @media (min-width: 640px) {
      width: auto;
    }
  }
`;

const AutoSaveIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: ${theme.colors.gray500};
  margin-left: auto;

  body.dark-theme & {
    color: #a0a0a0;
  }

  &.saving {
    color: ${theme.colors.warning};
  }

  &.saved {
    color: ${theme.colors.success};
  }

  svg {
    animation: ${(props) =>
      props.$saving ? "spin 1s linear infinite" : "none"};
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

function DataCapture() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const editId = searchParams.get("edit");
  const { success, error } = useToast();
  const { settings } = useSettings();

  // Helper function to get current date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [formData, setFormData] = useState({
    recordNumber: "",
    firstName: "",
    middleName: "",
    lastName: "",
    idPassportNo: "",
    gender: "Male",
    age: "",
    ageCategory: "",
    dateOfDeath: getCurrentDate(),
    nextOfKinName: "",
    nextOfKinContact: "",
    nextOfKinIdPassport: "",
    burialLocation: "Block A",
    primaryService: "Burial",
    amountPaidBurial: "",
    secondaryService: "None",
    amountPaidSecondary: "",
    tertiaryService: "None",
    amountPaidTertiary: "",
    mpesaRefNo: "",
    receiptNo: "",
    status: "Pending",
    rejectionReason: "",
    dateOfBurial: "",
    nextOfKinRelationship: "",
    burialPermitNumber: "",
    burialPermitDate: "",
    burialPermitIssuedBy: "",
    burialPermitIssuedByContact: "",
    burialPermitIssuedTo: "",
    burialPermitIssuedToContact: "",
  });
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [autoSaveStatus, setAutoSaveStatus] = useState(""); // '', 'saving', 'saved'
  const [existingAttachments, setExistingAttachments] = useState([]);
  const [user, setUser] = useState(null);
  const [locationOptions, setLocationOptions] = useState([
    "Block A",
    "Main",
    "Block B",
    "Lan'gata",
  ]);
  const [showNewLocationInput, setShowNewLocationInput] = useState(false);
  const [newLocationName, setNewLocationName] = useState("");
  const [showManageModal, setShowManageModal] = useState(false);
  const [locationData, setLocationData] = useState([]); // Array of objects {id, name}

  // Load locations and user from backend on mount
  useEffect(() => {
    fetchUser();
    fetchLocations();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await apiService.getCurrentUser();
      setUser(res.data);
    } catch (err) {
      console.error("Error fetching user:", err);
    }
  };

  const fetchLocations = async () => {
    try {
      const response = await apiService.getLocations();
      if (response.data && Array.isArray(response.data)) {
        // Map data for internal tracking (with IDs)
        const mappedData = response.data.map(loc => 
          typeof loc === 'string' ? { id: loc, name: loc } : { id: loc._id || loc.id, name: loc.name }
        );
        setLocationData(mappedData);

        // Map names for the dropdown
        const fetchedNames = mappedData.map(loc => loc.name);
        
        setLocationOptions((prev) => {
          const defaults = ["Block A", "Main", "Block B", "Lan'gata"];
          return Array.from(new Set([...defaults, ...fetchedNames]));
        });
      }
    } catch (err) {
      console.error("Error fetching locations:", err);
    }
  };

  const handleDeleteLocation = async (id, name) => {
    // Prevent deleting default locations
    const defaults = ["Block A", "Main", "Block B", "Lan'gata"];
    if (defaults.includes(name)) {
      error("Cannot delete default system locations");
      return;
    }

    if (!window.confirm(`Are you sure you want to delete "${name}"?`)) return;

    try {
      await apiService.deleteLocation(id);
      success("Location deleted successfully");
      fetchLocations(); // Refresh list
    } catch (err) {
      console.error("Error deleting location:", err);
      error("Failed to delete location");
    }
  };

  const handleAddNewLocation = async () => {
    if (!newLocationName.trim()) return;

    try {
      // Save to backend collection
      await apiService.createLocation(newLocationName.trim());
      
      // Update local state immediately
      setLocationOptions(prev => Array.from(new Set([...prev, newLocationName.trim()])));
      setFormData((prev) => ({ ...prev, burialLocation: newLocationName.trim() }));
      
      setNewLocationName("");
      setShowNewLocationInput(false);
      success("New location saved to database");
    } catch (err) {
      console.error("Error adding location:", err);
      error(err.response?.data?.message || "Failed to save new location");
    }
  };

  // Load draft from localStorage on mount (only for new records and if auto-save is enabled)
  useEffect(() => {
    if (!editId) {
      if (settings.autoSave) {
        const savedDraft = localStorage.getItem("recordDraft");
        if (savedDraft) {
          try {
            const draft = JSON.parse(savedDraft);
            // If draft doesn't have dateOfDeath, set it to current date
            if (!draft.dateOfDeath) {
              draft.dateOfDeath = getCurrentDate();
            }
            setFormData(draft);
            success("Draft restored from previous session");
          } catch (err) {
            console.error("Error loading draft:", err);
          }
        }
      }
      generateRecordNumberPreview();
    } else {
      fetchRecordData(editId);
    }
  }, [editId, settings.autoSave]);

  // Auto-save to localStorage when form data changes
  useEffect(() => {
    if (
      !editId &&
      settings.autoSave &&
      (formData.firstName || formData.lastName)
    ) {
      setAutoSaveStatus("saving");

      const timer = setTimeout(() => {
        try {
          localStorage.setItem("recordDraft", JSON.stringify(formData));
          setAutoSaveStatus("saved");

          // Clear saved status after 2 seconds
          setTimeout(() => setAutoSaveStatus(""), 2000);
        } catch (err) {
          console.error("Error saving draft:", err);
          setAutoSaveStatus("");
        }
      }, 1500); // Save after 1.5 seconds of no typing

      return () => clearTimeout(timer);
    }
  }, [formData, editId, settings.autoSave]);

  const generateRecordNumberPreview = async () => {
    try {
      const year = new Date().getFullYear();

      // Get all records for the current year to find the highest number
      // Using a large limit to ensure we get all records for the year
      const response = await apiService.getRecords({
        search: `BR-${year}`,
        limit: 10000, // Large limit to get all records for current year
      });

      let nextNumber = 1;
      if (response.data.records && response.data.records.length > 0) {
        // Extract all record numbers for current year and find the highest
        const recordNumbers = response.data.records
          .map((r) => {
            // Match pattern: BR-YYYY-NNNNN (e.g., BR-2025-00001)
            const match = r.recordNumber?.match(/BR-(\d{4})-(\d{5})/);
            if (match && match[1] === String(year)) {
              return parseInt(match[2], 10);
            }
            return 0;
          })
          .filter((n) => n > 0);

        if (recordNumbers.length > 0) {
          // Get the highest number and add 1
          const maxNumber = Math.max(...recordNumbers);
          nextNumber = maxNumber + 1;
          console.log(
            `📋 Found ${recordNumbers.length} records for ${year}. Highest: ${maxNumber}. Next: ${nextNumber}`
          );
        } else {
          console.log(
            `📋 No records found for ${year}. Starting with: ${nextNumber}`
          );
        }
      } else {
        console.log(`📋 No records in database. Starting with: ${nextNumber}`);
      }

      // Format: BR-YYYY-NNNNN (e.g., BR-2025-00001)
      const paddedNumber = String(nextNumber).padStart(5, "0");
      const newRecordNumber = `BR-${year}-${paddedNumber}`;

      console.log(`✅ Generated record number: ${newRecordNumber}`);
      setFormData((prev) => ({ ...prev, recordNumber: newRecordNumber }));
    } catch (err) {
      console.error("❌ Error generating record number:", err);
      // Fallback: generate with timestamp to ensure uniqueness
      const year = new Date().getFullYear();
      const timestamp = Date.now().toString().slice(-5);
      const fallbackNumber = `BR-${year}-${timestamp}`;
      console.log(`⚠️ Using fallback record number: ${fallbackNumber}`);
      setFormData((prev) => ({ ...prev, recordNumber: fallbackNumber }));
    }
  };

  const fetchRecordData = async (id) => {
    try {
      const res = await apiService.getRecord(id);
      const record = res.data;
      setFormData({
        recordNumber: record.recordNumber || "",
        firstName: record.firstName || "",
        middleName: record.middleName || "",
        lastName: record.lastName || "",
        idPassportNo: record.idPassportNo || "",
        gender: record.gender || "Male",
        age: record.age || "",
        ageCategory: record.ageCategory || "",
        dateOfDeath: record.dateOfDeath ? record.dateOfDeath.split("T")[0] : "",
        nextOfKinName: record.nextOfKinName || "",
        nextOfKinContact: record.nextOfKinContact || "",
        nextOfKinIdPassport: record.nextOfKinIdPassport || "",
        burialLocation: record.burialLocation || "Block A",
        primaryService: record.primaryService || "Burial",
        amountPaidBurial: record.amountPaidBurial || "",
        secondaryService: record.secondaryService || "None",
        amountPaidSecondary: record.amountPaidSecondary || "",
        tertiaryService: record.tertiaryService || "None",
        amountPaidTertiary: record.amountPaidTertiary || "",
        mpesaRefNo: record.mpesaRefNo || "",
        receiptNo: record.receiptNo || "",
        status:
          record.status === "Pending"
            ? "Pending Verification"
            : record.status || "Pending Verification",
        rejectionReason: record.rejectionReason || "",
        dateOfBurial: record.dateOfBurial ? record.dateOfBurial.split("T")[0] : "",
        nextOfKinRelationship: record.nextOfKinRelationship || "",
        burialPermitNumber: record.burialPermitNumber || "",
        burialPermitDate: record.burialPermitDate ? record.burialPermitDate.split("T")[0] : "",
        burialPermitIssuedBy: record.burialPermitIssuedBy || "",
        burialPermitIssuedByContact: record.burialPermitIssuedByContact || "",
        burialPermitIssuedTo: record.burialPermitIssuedTo || "",
        burialPermitIssuedToContact: record.burialPermitIssuedToContact || "",
      });

      // Load existing attachments
      if (record.attachments && Array.isArray(record.attachments)) {
        setExistingAttachments(record.attachments);
        console.log("📎 Loaded existing attachments:", record.attachments);
      }
    } catch (err) {
      error("Error loading record data");
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Clear rejectionReason when status changes away from "Rejected"
    if (name === "status" && value !== "Rejected") {
      setFormData({ ...formData, [name]: value, rejectionReason: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate Date of Death is not in the future
    if (formData.dateOfDeath) {
      const dod = new Date(formData.dateOfDeath);
      const today = new Date();
      today.setHours(23, 59, 59, 999);

      if (dod > today) {
        error("Date of Death cannot be in the future");
        return;
      }
    }

    // Validate age based on age category
    if (formData.ageCategory && formData.age !== "") {
      const age = parseInt(formData.age, 10);

      if (isNaN(age) || age < 0) {
        error("Age must be a valid positive number");
        return;
      }

      switch (formData.ageCategory) {
        case "Stillborn":
          // Stillborn typically has age 0 or no age
          if (age > 0) {
            error("Stillborn age should be 0");
            return;
          }
          break;
        case "Infant":
          // Infant: 0-1 years (inclusive)
          if (age > 1) {
            error("Infant age must be between 0 and 1 year");
            return;
          }
          break;
        case "Child":
          // Child: 1-12 years (inclusive)
          if (age < 1 || age > 12) {
            error("Child age must be between 1 and 12 years");
            return;
          }
          break;
        case "Adult":
          // Adult: Above 12 years (13+)
          if (age <= 12) {
            error("Adult age must be above 12 years");
            return;
          }
          break;
        default:
          break;
      }
    }

    // Validate rejection reason is required when status is Rejected
    if (formData.status === "Rejected" && !formData.rejectionReason.trim()) {
      error("Rejection reason is required when status is Rejected");
      return;
    }

    // Validate attachments are required for non-Stillborn/Infant cases
    const isExempt =
      formData.ageCategory === "Stillborn" || formData.ageCategory === "Infant";
    if (
      !isExempt &&
      !editId &&
      files.length === 0 &&
      existingAttachments.length === 0
    ) {
      error(
        "Attachments are required for this age category. Please upload at least one document."
      );
      return;
    }

    setLoading(true);

    try {
      // Upload files to S3 if any
      let attachments = [];
      if (files.length > 0) {
        try {
          const uploadedUrls = await uploadMultipleToS3(files, "records");
          console.log("✅ Files uploaded to S3:", uploadedUrls);

          // Format attachments as array of objects with filename and path
          attachments = files.map((file, index) => ({
            filename: file.name,
            path: uploadedUrls[index],
          }));
          console.log("📎 Formatted attachments:", attachments);
        } catch (uploadErr) {
          console.error("❌ Error uploading files:", uploadErr);
          error("Failed to upload attachments. Please try again.");
          setLoading(false);
          return;
        }
      }

      // Prepare record data with formatted attachments
      // Filter out empty optional fields to avoid enum validation errors
      const recordData = {};
      const optionalFields = [
        "middleName",
        "idPassportNo",
        "nextOfKinIdPassport",
        "amountPaidBurial",
        "amountPaidSecondary",
        "amountPaidTertiary",
        "mpesaRefNo",
        "secondaryService",
        "tertiaryService",
        "rejectionReason",
      ];

      Object.keys(formData).forEach((key) => {
        const value = formData[key];
        // Include field if it's not optional, or if it's optional and has a value
        // For rejectionReason, include it if status is Rejected or if it has a value
        if (
          !optionalFields.includes(key) ||
          (value && value !== "") ||
          (key === "rejectionReason" && formData.status === "Rejected")
        ) {
          // Map "Pending Verification" to "Pending" for API
          recordData[key] = value;
        }
      });

      recordData.attachments = attachments;

      if (editId) {
        // Update existing record
        await apiService.updateRecord(editId, recordData);
        success("Burial record updated successfully!");
      } else {
        // Create new record
        const res = await apiService.createRecord(recordData);
        success(`Record ${res.data.recordNumber} created successfully!`);
        // Clear draft from localStorage after successful submission
        localStorage.removeItem("recordDraft");
        setFormData({
          recordNumber: "",
          firstName: "",
          middleName: "",
          lastName: "",
          idPassportNo: "",
          gender: "Male",
          age: "",
          ageCategory: "",
          dateOfDeath: getCurrentDate(),
          nextOfKinName: "",
          nextOfKinContact: "",
          nextOfKinIdPassport: "",
          burialLocation: "Block A",
          primaryService: "Burial",
          amountPaidBurial: "",
          secondaryService: "None",
          amountPaidSecondary: "",
          tertiaryService: "None",
          amountPaidTertiary: "",
          mpesaRefNo: "",
          receiptNo: "",
          status: "Pending",
          rejectionReason: "",
        });
        setFiles([]);
        setAutoSaveStatus("");
        generateRecordNumberPreview();
      }
    } catch (err) {
      error(err.response?.data?.msg || "Error saving record");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    // Clear draft from localStorage
    localStorage.removeItem("recordDraft");
    setFormData({
      recordNumber: "",
      firstName: "",
      middleName: "",
      lastName: "",
      idPassportNo: "",
      gender: "Male",
      age: "",
      ageCategory: "",
      dateOfDeath: getCurrentDate(),
      nextOfKinName: "",
      nextOfKinContact: "",
      nextOfKinIdPassport: "",
      burialLocation: "Block A",
      primaryService: "Burial",
      amountPaidBurial: "",
      secondaryService: "None",
      amountPaidSecondary: "",
      tertiaryService: "None",
      amountPaidTertiary: "",
      mpesaRefNo: "",
      receiptNo: "",
      status: "Pending",
      rejectionReason: "",
    });
    setFiles([]);
    setAutoSaveStatus("");
    generateRecordNumberPreview();
  };

  return (
    <div>
      <PageHeader>
        <div>
          <h1>New Record</h1>
          <p>Create and register a new burial record</p>
        </div>
        {editId && (
          <Button $variant="secondary" onClick={() => navigate("/records")}>
            <MdArrowBack size={18} /> Back to Records
          </Button>
        )}
      </PageHeader>

      <Card>
        <form onSubmit={handleSubmit}>
          <SectionTitle $first>
            <span className="section-icon">
              <MdAssignment />
            </span>
            Burial Record No.
          </SectionTitle>
          <FormGrid>
            <FormGroup>
              <label>
                Record Number *
                <Tooltip text="Auto-generated based on the last record number in the system. Click refresh to regenerate." />
              </label>
              <div
                style={{ display: "flex", gap: "8px", alignItems: "center" }}
              >
                <input
                  name="recordNumber"
                  value={formData.recordNumber}
                  readOnly
                  placeholder="Auto-generated"
                  required
                  style={{
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#667eea",
                    flex: 1,
                  }}
                />
                <Button
                  type="button"
                  onClick={generateRecordNumberPreview}
                  style={{
                    padding: "10px 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    whiteSpace: "nowrap",
                  }}
                  title="Regenerate record number"
                >
                  <MdRefresh size={18} />
                  Refresh
                </Button>
              </div>
            </FormGroup>
          </FormGrid>

          <SectionTitle>
            <span className="section-icon">
              <MdPerson />
            </span>
            Deceased Information
          </SectionTitle>
          <FormGrid>
            <FormGroup>
              <label>Age Category *</label>
              <select
                name="ageCategory"
                value={formData.ageCategory}
                onChange={handleChange}
                required
              >
                <option value="">Select Age Category</option>
                <option value="Stillborn">Stillborn</option>
                <option value="Infant">Infant (0–1 year)</option>
                <option value="Child">Child (1–12 years)</option>
                <option value="Adult">Adult (Above 12 years)</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>
                First Name{" "}
                {formData.ageCategory !== "Stillborn" &&
                formData.ageCategory !== "Infant"
                  ? "*"
                  : ""}
              </label>
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter first name"
                required={
                  formData.ageCategory !== "Stillborn" &&
                  formData.ageCategory !== "Infant"
                }
              />
            </FormGroup>
            <FormGroup>
              <label>Middle Name</label>
              <input
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                placeholder="Enter middle name"
              />
            </FormGroup>
            <FormGroup>
              <label>
                Last Name{" "}
                {formData.ageCategory !== "Stillborn" &&
                formData.ageCategory !== "Infant"
                  ? "*"
                  : ""}
              </label>
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                required={
                  formData.ageCategory !== "Stillborn" &&
                  formData.ageCategory !== "Infant"
                }
              />
            </FormGroup>
            <FormGroup>
              <label>ID / Passport No</label>
              <input
                name="idPassportNo"
                value={formData.idPassportNo}
                onChange={handleChange}
                placeholder="Enter ID or Passport number"
              />
            </FormGroup>
            <FormGroup>
              <label>
                Gender{" "}
                {formData.ageCategory !== "Stillborn" &&
                formData.ageCategory !== "Infant"
                  ? "*"
                  : ""}
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required={
                  formData.ageCategory !== "Stillborn" &&
                  formData.ageCategory !== "Infant"
                }
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>
                Age{" "}
                {formData.ageCategory !== "Stillborn" &&
                formData.ageCategory !== "Infant"
                  ? "*"
                  : ""}
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder={
                  formData.ageCategory === "Stillborn"
                    ? "Enter age (typically 0)"
                    : formData.ageCategory === "Infant"
                    ? "Enter age (0-1 years)"
                    : formData.ageCategory === "Child"
                    ? "Enter age (1-12 years)"
                    : formData.ageCategory === "Adult"
                    ? "Enter age (above 12 years)"
                    : "Enter age"
                }
                min="0"
                required={
                  formData.ageCategory !== "Stillborn" &&
                  formData.ageCategory !== "Infant"
                }
              />
              {formData.ageCategory && (
                <HelperText>
                  <MdInfoOutline size={14} style={{ marginRight: "4px" }} />
                  {formData.ageCategory === "Stillborn" &&
                    "Age should be 0 for stillborn"}
                  {formData.ageCategory === "Infant" &&
                    "Age must be between 0 and 1 year"}
                  {formData.ageCategory === "Child" &&
                    "Age must be between 1 and 12 years"}
                  {formData.ageCategory === "Adult" &&
                    "Age must be above 12 years"}
                </HelperText>
              )}
            </FormGroup>
            <FormGroup>
              <label>Date of Death *</label>
              <ModernDatePicker
                value={formData.dateOfDeath}
                onChange={handleChange}
                name="dateOfDeath"
                placeholder="Pick date of death"
                maxDate={new Date()}
                required
              />
              <HelperText>
                <MdInfoOutline size={14} style={{ marginRight: "4px" }} />
                Future dates cannot be selected
              </HelperText>
            </FormGroup>
            <FormGroup>
              <label>Date of Burial *</label>
              <ModernDatePicker
                value={formData.dateOfBurial}
                onChange={handleChange}
                name="dateOfBurial"
                placeholder="Pick date of burial"
                required
              />
            </FormGroup>
          </FormGrid>

          <SectionTitle>
            <span className="section-icon">
              <MdPerson />
            </span>
            Next of Kin Information
            <Tooltip
              content="Closest relative to contact in emergency (spouse, parent, sibling, or adult child)"
              position="right"
              multiline={true}
              width="400px"
            >
              <InfoIcon>
                <MdInfoOutline size={18} />
              </InfoIcon>
            </Tooltip>
          </SectionTitle>
          <FormGrid>
            <FormGroup>
              <label>Name of Next of Kin *</label>
              <input
                name="nextOfKinName"
                value={formData.nextOfKinName}
                onChange={handleChange}
                placeholder="Enter next of kin name"
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Relationship with Deceased *</label>
              <select
                name="nextOfKinRelationship"
                value={formData.nextOfKinRelationship}
                onChange={handleChange}
                required
              >
                <option value="">Select Relationship</option>
                <option value="Spouse">Spouse</option>
                <option value="Child">Child</option>
                <option value="Parent">Parent</option>
                <option value="Sibling">Sibling</option>
                <option value="Other">Other</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Next of Kin Contact *</label>
              <input
                type="tel"
                name="nextOfKinContact"
                value={formData.nextOfKinContact}
                onChange={handleChange}
                placeholder="e.g., 0712345678"
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Next of Kin ID / Passport No</label>
              <input
                name="nextOfKinIdPassport"
                value={formData.nextOfKinIdPassport}
                onChange={handleChange}
                placeholder="Enter ID or Passport number"
              />
            </FormGroup>
          </FormGrid>

          <SectionTitle>
            <span className="section-icon">
              <MdAssignment />
            </span>
            Burial Permit Details (Government Issued)
          </SectionTitle>
          <FormGrid>
            <FormGroup>
              <label>Burial Permit Number *</label>
              <input
                name="burialPermitNumber"
                value={formData.burialPermitNumber}
                onChange={handleChange}
                placeholder="Enter permit number"
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Date of Burial Permit *</label>
              <ModernDatePicker
                value={formData.burialPermitDate}
                onChange={handleChange}
                name="burialPermitDate"
                placeholder="Pick permit date"
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Permit Issued By *</label>
              <input
                name="burialPermitIssuedBy"
                value={formData.burialPermitIssuedBy}
                onChange={handleChange}
                placeholder="Enter issuer name/authority"
                required
              />
            </FormGroup>
            <FormGroup>
              <label>Issuer Contact Address *</label>
              <input
                 name="burialPermitIssuedByContact"
                 value={formData.burialPermitIssuedByContact}
                 onChange={handleChange}
                 placeholder="Enter issuer contact details"
                 required
               />
            </FormGroup>
            <FormGroup>
              <label>Permit Issued To *</label>
              <input
                 name="burialPermitIssuedTo"
                 value={formData.burialPermitIssuedTo}
                 onChange={handleChange}
                 placeholder="Enter recipient name"
                 required
               />
            </FormGroup>
            <FormGroup>
              <label>Recipient Contact Number *</label>
              <input
                 type="tel"
                 name="burialPermitIssuedToContact"
                 value={formData.burialPermitIssuedToContact}
                 onChange={handleChange}
                 placeholder="Enter recipient contact"
                 required
               />
            </FormGroup>
          </FormGrid>

          <SectionTitle>
            <span className="section-icon">
              <MdAttachFile />
            </span>
            Burial Location & Services
          </SectionTitle>
          <FormGrid>
            <FormGroup>
              <label>Location of Burial *</label>
              <div style={{ display: "flex", gap: "8px", flexDirection: "column" }}>
                {!showNewLocationInput ? (
                  <div style={{ display: "flex", gap: "8px" }}>
                    <select
                      name="burialLocation"
                      value={formData.burialLocation}
                      onChange={handleChange}
                      required
                      style={{ flex: 1 }}
                    >
                      <option value="">Select Location</option>
                      {locationOptions.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                    {user?.role === "admin" && (
                      <div style={{ display: "flex", gap: "8px" }}>
                        <Button
                          type="button"
                          $variant="secondary"
                          onClick={() => setShowNewLocationInput(true)}
                          title="Add New Location"
                          style={{ padding: "0 12px", minHeight: "44px" }}
                        >
                          <MdAdd size={20} />
                        </Button>
                        <Button
                          type="button"
                          $variant="secondary"
                          onClick={() => setShowManageModal(true)}
                          title="Manage Locations"
                          style={{ padding: "0 12px", minHeight: "44px" }}
                        >
                          <MdList size={20} />
                        </Button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div style={{ display: "flex", gap: "8px" }}>
                    <input
                      type="text"
                      value={newLocationName}
                      onChange={(e) => setNewLocationName(e.target.value)}
                      placeholder="Enter new location name"
                      style={{ flex: 1 }}
                      autoFocus
                    />
                    <Button
                      type="button"
                      $variant="primary"
                      onClick={handleAddNewLocation}
                      disabled={!newLocationName.trim()}
                    >
                      Add
                    </Button>
                    <Button
                      type="button"
                      $variant="secondary"
                      onClick={() => setShowNewLocationInput(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                )}
              </div>
            </FormGroup>
            <FormGroup>
              <label>Primary Service</label>
              <input
                name="primaryService"
                value={formData.primaryService}
                onChange={handleChange}
                placeholder="Burial"
                readOnly
              />
            </FormGroup>
            <FormGroup>
              <label>Amount Paid for Burial</label>
              <input
                type="number"
                name="amountPaidBurial"
                value={formData.amountPaidBurial}
                onChange={handleChange}
                placeholder="Enter amount"
                min="0"
              />
            </FormGroup>
            <FormGroup>
              <label>Secondary Service</label>
              <select
                name="secondaryService"
                value={formData.secondaryService}
                onChange={handleChange}
              >
                <option value="None">None</option>
                <option value="Head stone">Head stone</option>
                <option value="Permanent grave">Permanent grave</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Amount Paid for Secondary Service</label>
              <input
                type="number"
                name="amountPaidSecondary"
                value={formData.amountPaidSecondary}
                onChange={handleChange}
                placeholder="Enter amount"
                min="0"
              />
            </FormGroup>
            <FormGroup>
              <label>Other Services</label>
              <select
                name="tertiaryService"
                value={formData.tertiaryService}
                onChange={handleChange}
              >
                <option value="None">None</option>
                <option value="Burial Record application">
                  Burial Record application
                </option>
                <option value="Donation">Donation</option>
                <option value="Others">Others</option>
              </select>
            </FormGroup>
            <FormGroup>
              <label>Amount Paid for Other Services</label>
              <input
                type="number"
                name="amountPaidTertiary"
                value={formData.amountPaidTertiary}
                onChange={handleChange}
                placeholder="Enter amount"
                min="0"
              />
            </FormGroup>
          </FormGrid>

          <SectionTitle>
            <span className="section-icon">
              <MdAttachFile />
            </span>
            Payment Information
          </SectionTitle>
          <FormGrid>
            <FormGroup>
              <label>
                Mpesa Ref No.
                <Tooltip
                  content="M-Pesa is a mobile money service used mainly in Kenya and Tanzania that allows people to send, receive, and pay using their phones without a bank account."
                  position="right"
                  multiline={true}
                  width="450px"
                >
                  <InfoIcon>
                    <MdInfoOutline size={18} />
                  </InfoIcon>
                </Tooltip>
              </label>
              <input
                name="mpesaRefNo"
                value={formData.mpesaRefNo}
                onChange={handleChange}
                placeholder="Enter M-Pesa reference number"
              />
            </FormGroup>
            <FormGroup>
              <label>Receipt No. *</label>
              <input
                name="receiptNo"
                value={formData.receiptNo}
                onChange={handleChange}
                placeholder="Enter receipt number"
                required
              />
            </FormGroup>
          </FormGrid>

          <SectionTitle>
            <span className="section-icon">
              <MdAttachFile />
            </span>
            Attachments
          </SectionTitle>

          {formData.ageCategory === "Stillborn" ||
          formData.ageCategory === "Infant" ? (
            <ExemptionNote>
              <div className="icon">
                <MdCheckCircleOutline size={20} />
              </div>
              <div className="content">
                <h4>Exemption Notice</h4>
                <p>
                  For Stillborn and Infant cases, no attachments are required.
                  You can proceed without uploading any documents.
                </p>
              </div>
            </ExemptionNote>
          ) : (
            <AttachmentNote>
              <div className="icon">
                <MdWarning size={20} />
              </div>
              <div className="content">
                <h4>Required Documents *</h4>
                <p>Please upload the following mandatory documents:</p>
                <ul>
                  <li>Burial Record Copy</li>
                  <li>ID Proof of Deceased Person</li>
                </ul>
              </div>
            </AttachmentNote>
          )}

          {/* Display existing attachments when editing */}
          {editId && existingAttachments.length > 0 && (
            <ExistingAttachmentsSection>
              <h4>
                <MdAttachFile size={18} />
                Existing Attachments ({existingAttachments.length})
              </h4>
              <AttachmentsList>
                {existingAttachments.map((attachment, index) => {
                  const uploadedDate = attachment.uploadedAt
                    ? new Date(attachment.uploadedAt).toLocaleDateString()
                    : "Unknown date";
                  const fileExtension = attachment.filename
                    .split(".")
                    .pop()
                    .toUpperCase();

                  // Determine file icon based on extension
                  let fileIcon = "📄";
                  if (fileExtension === "PDF") fileIcon = "📕";
                  else if (["JPG", "JPEG", "PNG"].includes(fileExtension))
                    fileIcon = "🖼️";

                  return (
                    <AttachmentItem
                      key={index}
                      href={attachment.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={`Download ${attachment.filename}`}
                    >
                      <div className="file-icon">{fileIcon}</div>
                      <div className="file-info">
                        <p className="file-name">{attachment.filename}</p>
                        <p className="file-date">Uploaded: {uploadedDate}</p>
                      </div>
                      <div className="download-icon">⬇️</div>
                    </AttachmentItem>
                  );
                })}
              </AttachmentsList>
            </ExistingAttachmentsSection>
          )}

          <FormGroup>
            <FileUploadArea
              onClick={() => document.getElementById("fileInput").click()}
            >
              <div className="icon">
                <MdFolder size={48} />
              </div>
              <p>
                <strong>Click to upload</strong> or drag and drop
              </p>
              <p>PDF, JPG, PNG (Max 10MB)</p>
              <input
                id="fileInput"
                type="file"
                multiple
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={handleFileChange}
              />
            </FileUploadArea>
            {files.length > 0 && (
              <FileInfo>{files.length} file(s) selected</FileInfo>
            )}
          </FormGroup>

          <SectionTitle>
            <span className="section-icon">
              <MdCheckCircle />
            </span>
            Status
          </SectionTitle>
          <FormGroup>
            <RadioGroup>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Pending"
                  checked={formData.status === "Pending"}
                  onChange={handleChange}
                />
                <MdSchedule size={18} /> Pending
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Verified"
                  checked={formData.status === "Verified"}
                  onChange={handleChange}
                />
                <MdVerified size={18} /> Verified
              </label>
              <label>
                <input
                  type="radio"
                  name="status"
                  value="Rejected"
                  checked={formData.status === "Rejected"}
                  onChange={handleChange}
                />
                <MdCancel size={18} /> Rejected
              </label>
            </RadioGroup>
          </FormGroup>

          {formData.status === "Rejected" && (
            <FormGroup>
              <label>Rejection Reason *</label>
              <textarea
                name="rejectionReason"
                value={formData.rejectionReason}
                onChange={handleChange}
                placeholder="Enter the reason for rejection..."
                required
                rows={4}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: `2px solid ${theme.colors.gray200}`,
                  borderRadius: theme.borderRadius.md,
                  fontSize: "14px",
                  fontFamily: "inherit",
                  resize: "vertical",
                  minHeight: "100px",
                }}
              />
              <HelperText>
                <MdInfoOutline size={14} style={{ marginRight: "4px" }} />
                This field is required when status is set to Rejected
              </HelperText>
            </FormGroup>
          )}

          <SubmitSection>
            <Button $variant="primary" type="submit" disabled={loading}>
              {loading ? (
                <>
                  <InlineSpinner size="16px" thickness="2px" /> Saving...
                </>
              ) : (
                <>
                  <MdSave size={18} /> Save Record
                </>
              )}
            </Button>
            <Button $variant="secondary" type="button" onClick={handleReset}>
              <MdRefresh size={18} /> Reset Form
            </Button>

            {!editId && settings.autoSave && (
              <AutoSaveIndicator
                className={autoSaveStatus}
                $saving={autoSaveStatus === "saving"}
              >
                <MdSave size={16} />
                {autoSaveStatus === "saving" && "Saving draft..."}
                {autoSaveStatus === "saved" && "Draft saved"}
                {!autoSaveStatus && "Auto-save enabled"}
              </AutoSaveIndicator>
            )}
          </SubmitSection>
        </form>
      </Card>

      {/* Location Management Modal */}
      {showManageModal && (
        <Modal
          isOpen={showManageModal}
          onClose={() => setShowManageModal(false)}
          title="Manage Burial Locations"
          icon={<MdList size={28} />}
        >
          <div style={{ maxHeight: "400px", overflowY: "auto" }}>
            <p style={{ fontSize: "14px", color: theme.colors.gray600, marginBottom: "16px" }}>
              Only custom locations can be deleted. Default system locations (Block A, Main, etc.) are protected.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {locationData.map((loc) => (
                <div 
                  key={loc.id} 
                  style={{ 
                    display: "flex", 
                    justifyContent: "space-between", 
                    alignItems: "center",
                    padding: "12px",
                    background: theme.colors.gray50,
                    borderRadius: theme.borderRadius.md,
                    border: `1px solid ${theme.colors.gray200}`
                  }}
                >
                  <span style={{ fontWeight: 500 }}>{loc.name}</span>
                  {!["Block A", "Main", "Block B", "Lan'gata"].includes(loc.name) && (
                    <Button 
                      $variant="danger" 
                      $size="small"
                      onClick={() => handleDeleteLocation(loc.id, loc.name)}
                      style={{ padding: "6px" }}
                    >
                      <MdDelete size={18} />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "24px", display: "flex", justifyContent: "flex-end" }}>
            <Button $variant="secondary" onClick={() => setShowManageModal(false)}>
              Close
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default DataCapture;
