import { axiosInstance } from '../util/axiosInstance'

const usePostService = (title, content, selectedTag, formData) => {
  const body = {
    title,
    content,
    selectedTag,
    formData,
  }
  return {
    upload: async () => {
      const response = await axiosInstance.post(
        `${process.env.BASE_URL}/api/v1/post/upload`,
        body,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      return response
    },
    delete: async () => {
      const response = await axiosInstance.post(
        `${process.env.BASE_URL}/api/v1/post/delete`,
      )
      return response
    },
  }
}

export default usePostService
