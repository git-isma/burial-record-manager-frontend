import axios from './axios';

// ============================================
// API BASE URL
// ============================================
export const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://dwwy78aqdgea3.cloudfront.net';

// ============================================
// API ENDPOINTS - All backend routes
// ============================================
export const API_ENDPOINTS = {
    // Authentication Endpoints
    AUTH: {
        LOGIN: '/auth/login',
        REGISTER: '/auth/register',
        FORGOT_PASSWORD: '/auth/forgot-password',
        RESET_PASSWORD: '/auth/reset-password',
        ME: '/auth/me',
    },

    // Profile Endpoints
    PROFILE: {
        GET: '/profile',
        UPDATE: '/profile',
    },

    // User Management Endpoints
    USERS: {
        LIST: '/users',
        GET: (id) => `/users/${id}`,
        UPDATE: (id) => `/users/${id}`,
        DELETE: (id) => `/users/${id}`,
        BULK_DELETE: '/users',
        RESET_PASSWORD: (id) => `/users/${id}/reset-password`,
        // CLEAR_CACHE: '/users/clear-cache',
        EXPORT_DATA: '/users/export-data',
        SETTINGS: '/users/settings',
    },

    // Record Management Endpoints (formerly Permits)
    RECORDS: {
        LIST: '/records',
        GET: (id) => `/records/${id}`,
        CREATE: '/records',
        UPDATE: (id) => `/records/${id}`,
        DELETE: (id) => `/records/${id}`,
        BULK_DELETE: '/records',
        VERIFY: (id) => `/records/verify-public/${id}`,
    },

    // Reports & Analytics Endpoints
    REPORTS: {
        OVERVIEW: '/reports/overview',
        RECENT_RECORDS: '/reports/recent-records',
        MONTHLY_TRENDS: '/reports/monthly-trends',
    },

    // File Upload Endpoints (S3 Presigned URLs)
    UPLOAD: {
        PRESIGNED_URL: '/upload/presigned-url',
    },

    // Public Records Endpoints
    PUBLIC_RECORDS: {
        LIST: '/public/records',
    },

    // Notifications Endpoints (currently disabled)
    NOTIFICATIONS: {
        LIST: '/notifications',
        MARK_READ: (id) => `/notifications/${id}/read`,
        MARK_ALL_READ: '/notifications/read-all',
    },

    // Location Management Endpoints
    LOCATIONS: {
        LIST: '/locations',
        CREATE: '/locations',
        DELETE: (id) => `/locations/${id}`,
    },
};

// API Service - Centralized API calls with error handling
export const apiService = {
    // Auth
    login: (credentials) => axios.post(API_ENDPOINTS.AUTH.LOGIN, credentials),
    register: (userData) => axios.post(API_ENDPOINTS.AUTH.REGISTER, userData),
    forgotPassword: (email) => axios.post(API_ENDPOINTS.AUTH.FORGOT_PASSWORD, { email }),
    resetPassword: (token, newPassword) => axios.post(API_ENDPOINTS.AUTH.RESET_PASSWORD, { token, newPassword }),
    getCurrentUser: () => axios.get(API_ENDPOINTS.AUTH.ME),

    // Profile
    getProfile: () => axios.get(API_ENDPOINTS.PROFILE.GET),
    updateProfile: (data) => axios.put(API_ENDPOINTS.PROFILE.UPDATE, data),

    // Users
    getUsers: () => axios.get(API_ENDPOINTS.USERS.LIST),
    getUser: (id) => axios.get(API_ENDPOINTS.USERS.GET(id)),
    updateUser: (id, data) => axios.put(API_ENDPOINTS.USERS.UPDATE(id), data),
    deleteUser: (id) => axios.delete(API_ENDPOINTS.USERS.DELETE(id)),
    bulkDeleteUsers: (userIds) => axios.delete(API_ENDPOINTS.USERS.BULK_DELETE, { data: { userIds } }),
    resetUserPassword: (id, newPassword) => axios.post(API_ENDPOINTS.USERS.RESET_PASSWORD(id), { newPassword }),
    // clearCache: () => axios.post(API_ENDPOINTS.USERS.CLEAR_CACHE),
    exportData: () => axios.get(API_ENDPOINTS.USERS.EXPORT_DATA),
    getUserSettings: () => axios.get(API_ENDPOINTS.USERS.SETTINGS),
    updateUserSettings: (settings) => axios.put(API_ENDPOINTS.USERS.SETTINGS, settings),

    // Records (formerly Permits)
    getRecords: (params) => axios.get(API_ENDPOINTS.RECORDS.LIST, { params }),
    getRecord: (id) => axios.get(API_ENDPOINTS.RECORDS.GET(id)),
    createRecord: (data) => axios.post(API_ENDPOINTS.RECORDS.CREATE, data),
    updateRecord: (id, data) => axios.put(API_ENDPOINTS.RECORDS.UPDATE(id), data),
    deleteRecord: (id) => axios.delete(API_ENDPOINTS.RECORDS.DELETE(id)),
    bulkDeleteRecords: (recordIds) => axios.delete(API_ENDPOINTS.RECORDS.BULK_DELETE, { data: { recordIds } }),

    // Backward compatibility aliases (deprecated)
    getPermits: (params) => axios.get(API_ENDPOINTS.RECORDS.LIST, { params }),
    getPermit: (id) => axios.get(API_ENDPOINTS.RECORDS.GET(id)),
    createPermit: (data) => axios.post(API_ENDPOINTS.RECORDS.CREATE, data),
    updatePermit: (id, data) => axios.put(API_ENDPOINTS.RECORDS.UPDATE(id), data),
    deletePermit: (id) => axios.delete(API_ENDPOINTS.RECORDS.DELETE(id)),
    bulkDeletePermits: (recordIds) => axios.delete(API_ENDPOINTS.RECORDS.BULK_DELETE, { data: { recordIds } }),

    // Reports
    getOverview: () => axios.get(API_ENDPOINTS.REPORTS.OVERVIEW),
    getRecentRecords: () => axios.get(API_ENDPOINTS.REPORTS.RECENT_RECORDS),
    getRecentPermits: () => axios.get(API_ENDPOINTS.REPORTS.RECENT_RECORDS), // Backward compatibility
    getMonthlyTrends: () => axios.get(API_ENDPOINTS.REPORTS.MONTHLY_TRENDS),

    // Public Records
    getPublicRecords: (params) => axios.get(API_ENDPOINTS.PUBLIC_RECORDS.LIST, { params }),
    getPublicRecord: (params) => axios.get(API_ENDPOINTS.PUBLIC_RECORDS.LIST, { params: {id} }),
    verifyPublicRecord: (id, data) => axios.put(API_ENDPOINTS.RECORDS.VERIFY(id), data),

    // Upload
    getPresignedUrl: (fileName, fileType, folder) =>
        axios.post(API_ENDPOINTS.UPLOAD.PRESIGNED_URL, { fileName, fileType, folder }),

    // Locations
    getLocations: () => axios.get(API_ENDPOINTS.LOCATIONS.LIST),
    createLocation: (name) => axios.post(API_ENDPOINTS.LOCATIONS.CREATE, { name }),
    deleteLocation: (id) => axios.delete(API_ENDPOINTS.LOCATIONS.DELETE(id)),
};

export default apiService;
