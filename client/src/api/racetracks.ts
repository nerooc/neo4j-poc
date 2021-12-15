import { AxiosResponse } from "axios";
import { IDriver, IRacetrack } from '../types';
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

export const getRacetrack = async (id: string) => {
  const response: Promise<AxiosResponse<IRacetrack>> =
    axiosInstance.get(`/racetrack/${id}`);

  return response;
}

export const getWinner = async (id: string) => {
  const response: Promise<AxiosResponse<IDriver>> =
    axiosInstance.get(`/racetrack/winner/${id}`);

  return response;
}

export const setWinner = async (racetrackId: string, driverId: string) => {
  const response: Promise<AxiosResponse<IRacetrack>> =
    axiosInstance.post(`/racetrack/winner/${racetrackId}/${driverId}`);

  return response;
}