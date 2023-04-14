import { axiosIntance } from '../api/axiosInstance';

export const loginServer = async (data) => {
  try {
    const res = await axiosIntance.post('users/login', data);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
