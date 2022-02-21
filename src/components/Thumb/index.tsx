import React, { FC } from 'react';
import { TPhoto } from '../../api/models';

export interface Props {
  item: TPhoto;
}

export const Thumb: FC<Props> = ({ item }) => {
  return (
    <div className={`thumb`} style={{ backgroundImage: `url(${item.urls.thumb})` }}>
      <div className='filter'></div>
    </div>
  );
};
export default Thumb;
