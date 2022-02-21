export type TPhoto = {
  id: string;
  description: string;
  urls: {
    small: string;
    thumb: string;
  };
};

export type TApprovePhotoParam = { photo: TPhoto; type: string };
export type TDeclinePhotoParam = { id: number; type: string };

export const initialPhoto = {
  id: '',
  description: '',
  urls: {
    small: '',
    thumb: '',
  },
};
