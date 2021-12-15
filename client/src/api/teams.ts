import { AxiosResponse } from "axios";
import { IDriver, ITeam } from '../types';
import { axiosInstance } from "./axiosInstance";

export const getAllTeams = async () => {
    const response: Promise<AxiosResponse<ITeam[]>> = axiosInstance.get(
        `/team/`,
      );
    
      return response;
};

export const createNewTeam = (data: ITeam) => {
  const response: Promise<AxiosResponse> = axiosInstance.post(`/team/`, data);

  return response;
};

export const deleteTeam = (id: string) => {
  const response: Promise<AxiosResponse> = axiosInstance.delete(`/team/${id}`);

  return response;
}

export const getTeam = async (id: string) => {
  const response: Promise<AxiosResponse<ITeam>> =
    axiosInstance.get(`/team/${id}`);

  return response;
}

export const getDrivers = async (id: string) => {
  const response: Promise<AxiosResponse<IDriver[]>> =
    axiosInstance.get(`/team/drivers/${id}`);

  return response;
}