import React, { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomPhoto, approvePhoto, declinePhoto } from '../store/actions/photoActions';
import { AppState } from '../store/reducers/rootReducer';
import { TPhoto, initialPhoto } from '../api/models';
import Thumb from '../components/Thumb';

import { H1, H2, ThumbList, BigPhotoWrapper, Button, ButtonSecondary, ActionsContainer } from '../assets/style/theme';

export const Home: FC = () => {
  const dispatch = useDispatch();
  const [newPhoto, setNewPhoto] = useState<TPhoto>(initialPhoto);
  const { approvedList, declinedList, randomPhoto, loading, error } = useSelector((state: AppState) => state.photo);

  useEffect(() => {
    if (!loading && error === '' && randomPhoto.id !== '') {
      const declinedPhoto = declinedList.find((item: string) => item === randomPhoto.id);
      if (declinedPhoto) {
        getRandomPhoto();
      } else {
        setNewPhoto(randomPhoto);
      }
    }
  }, [randomPhoto]);

  const getRandomPhoto = () => {
    dispatch(fetchRandomPhoto());
  };

  const approve = () => {
    if (newPhoto.id !== '') {
      dispatch(approvePhoto(newPhoto));
      setNewPhoto(initialPhoto);
    }
  };

  const decline = () => {
    if (newPhoto.id !== '') {
      dispatch(declinePhoto(newPhoto.id));
      setNewPhoto(initialPhoto);
    }
  };

  return (
    <div>
      <H1>IMAGE APPROVAL APPLICATION</H1>
      <H2>APPROVED IMAGES ({approvedList.length})</H2>
      <ThumbList>
        <li onClick={getRandomPhoto}>
          <div className='thumb empty'></div>
        </li>
        {approvedList.map((item: TPhoto) => (
          <li key={item.id}>
            <Thumb item={item} />
          </li>
        ))}
      </ThumbList>
      <BigPhotoWrapper>
        <div onClick={getRandomPhoto} className={`photo-container ${newPhoto.id === '' ? ' empty' : ''}`}>
          {newPhoto.id !== '' && <img src={newPhoto.urls.small} />}
        </div>
      </BigPhotoWrapper>
      {newPhoto.id === '' ? (
        <p> Click on the plus button in order to get image recommendations</p>
      ) : (
        <ActionsContainer>
          <div>
            <Button onClick={approve}></Button>
          </div>
          <div>
            <ButtonSecondary onClick={decline}></ButtonSecondary>
          </div>
        </ActionsContainer>
      )}
    </div>
  );
};

export default Home;
