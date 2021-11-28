import { AxiosResponse } from "axios";
import { IRacetrack } from '../types';
import { axiosInstance } from "./axiosInstance";

export const getAllRacetracks = async () => {
    const response: Promise<AxiosResponse<IRacetrack[]>> = axiosInstance.get(
        `/racetrack/`,
      );
    
      return response;
};

export const createNewRacetrack = (data: IRacetrack) => {
  const response: Promise<AxiosResponse> = axiosInstance.post(`/racetrack/`, data);

  return response;
};

export const deleteRacetrack = (id: string) => {
  const response: Promise<AxiosResponse> = axiosInstance.delete(`/racetrack/${id}`);

  return response;
}