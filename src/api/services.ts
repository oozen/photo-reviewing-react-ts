import { AxiosResponse } from 'axios';
import api from '../api';
import { TPhoto } from './models';

export const getRandomPhoto = async (): Promise<AxiosResponse<TPhoto, any>> => await api.get<TPhoto>(`/photos/random/?client_id=${process.env.CLIENT_ID}`);
