import { apiService } from './api';

/**
 * Upload file to S3 using presigned URL
 * @param {File} file - The file to upload
 * @param {string} folder - The folder in S3 (e.g., 'records', 'profiles')
 * @param {Function} onProgress - Optional progress callback (not yet implemented)
 * @returns {Promise<string>} - The file URL in S3
 */
export const uploadToS3 = async (file, folder = 'records', onProgress = null) => {
    try {
        console.log(`📤 Uploading ${file.name} to S3 folder: ${folder}`);

        // Step 1: Get presigned URL from backend
        const response = await apiService.getPresignedUrl(file.name, file.type, folder);

        const { presignedUrl, fileUrl } = response.data;
        console.log(`✅ Got presigned URL for ${file.name}`);

        // Step 2: Upload file directly to S3 using presigned URL
        const uploadResponse = await fetch(presignedUrl, {
            method: 'PUT',
            body: file,
            headers: {
                'Content-Type': file.type
            }
        });

        if (!uploadResponse.ok) {
            throw new Error(`S3 upload failed with status: ${uploadResponse.status}`);
        }

        console.log(`✅ File uploaded successfully: ${fileUrl}`);

        // Step 3: Return the file URL
        return fileUrl;
    } catch (error) {
        console.error('❌ Error uploading to S3:', error);
        throw new Error(error.response?.data?.msg || 'Failed to upload file');
    }
};

/**
 * Upload multiple files to S3
 * @param {File[]} files - Array of files to upload
 * @param {string} folder - The folder in S3
 * @param {Function} onProgress - Optional progress callback
 * @returns {Promise<string[]>} - Array of file URLs
 */
export const uploadMultipleToS3 = async (files, folder = 'records', onProgress = null) => {
    const uploadPromises = files.map(file => uploadToS3(file, folder, onProgress));
    return Promise.all(uploadPromises);
};

export default uploadToS3;
