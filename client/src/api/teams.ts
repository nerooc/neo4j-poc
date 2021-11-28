import { AxiosResponse } from "axios";
import { ITeam } from '../types';
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