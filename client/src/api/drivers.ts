import { AxiosResponse } from 'axios';
import { IDriver } from '../types';
import { axiosInstance } from './axiosInstance';

export const getAllDrivers = async () => {
  const response: Promise<AxiosResponse<IDriver[]>> =
    axiosInstance.get(`/driver/`);

  return response;
};

export const createNewDriver = async (data: IDriver) => {
  const response: Promise<AxiosResponse> = axiosInstance.post(`/driver/`, data);

  return response;
};

export const deleteDriver = async (id: string) => {
  const response: Promise<AxiosResponse> = axiosInstance.delete(`/driver/${id}`);

  return response;
}

export const getDriver = async (id: string) => {
  const response: Promise<AxiosResponse<IDriver>> =
    axiosInstance.get(`/driver/${id}`);

  return response;
}
