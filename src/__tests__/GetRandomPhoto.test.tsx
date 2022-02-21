import axios, { AxiosResponse } from 'axios';
import { initialPhoto, TPhoto } from '../api/models';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('getRandomPhoto', () => {
  test('fetches successfully a random photo from the API', async () => {
    const mockedResponse: AxiosResponse = {
      data: initialPhoto,
      status: 200,
      statusText: 'OK',
      headers: {},
      config: {},
    };

    mockedAxios.get.mockResolvedValueOnce(mockedResponse);
    expect(axios.get).not.toHaveBeenCalled();
    const resp = await mockedAxios.get<TPhoto>(`https://api.unsplash.com/photos/random/?client_id=K_VB2Uac2xcmN5cCi69PyGcZHjvFiJB8oh-DfDRGAUQ`);
    expect(axios.get).toHaveBeenCalled();
    expect(resp.data).toEqual(initialPhoto);
  });

});
