import styled from 'styled-components';
const plusIcon = require('../images/plus.png').default;
const checkIcon = require('../images/check.png').default;
const closeIcon = require('../images/close.png').default;

// The components below could've been in separate files but for this demo, it's ok to keep em here

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Arial', serif;
  font-size: 13px;
  position: relative;
  width: 100%;
  height: 100vh;
  background: rgb(59, 85, 230);
  background: linear-gradient(180deg, rgba(59, 85, 230, 1) 0%, rgba(58, 116, 229, 1) 100%);
`;

export const Content = styled.div`
  width: 600px;
  min-height: 460px;
  border-radius: 10px;
  padding: 30px;
  background-color: #fff;
  color: ${(props: any) => props.theme.colors.textDefault};
  text-align: center;
`;

export const Button: any = styled.button`
  width: 100%;
  font-size: 1em;
  margin: 1em;
  padding: 30px 15px;
  border-radius: 30px;
  color: #fff;
  border: none;
  background-color: ${(props: any) => props.theme.colors.primary};
  background-image: url(${checkIcon});
  background-position: center center;
  background-repeat: no-repeat;
`;

export const ButtonSecondary = styled(Button)`
  background-color: ${(props: any) => props.theme.colors.secondary};
  background-image: url(${closeIcon});
`;

export const H1: any = styled.h1`
  font-size: 1.1em;
  margin: 0 0 40px 0;
  padding: 0 0 5px 0;
  border-bottom: 1px solid ${(props: any) => props.theme.colors.border};
  color: ${(props: any) => props.theme.colors.title};
  text-align: left;
`;

export const H2: any = styled.h2`
  font-size: 1em;
  margin: 0 0 10px 0;
  padding: 0 0 10px 0;
  color: ${(props: any) => props.theme.colors.title};
  text-align: left;
`;

export const ThumbList: any = styled.ul`
  margin: 0 0 20px 0;
  padding: 0 0 5px 0;
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
  border-top: 1px solid ${(props: any) => props.theme.colors.border};
  li {
    list-style: none;
    flex: 0 0 auto;
    width: 125px;
    height: 70px;
    margin-right: 5px;
    border-radius: 5px;
    overflow: hidden;
    .thumb {
      width: 100%;
      height:100%;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      &.empty {
        cursor: pointer;
        background: url(${plusIcon}) no-repeat center center;
        background-size: 25%;
        background-color: ${(props: any) => props.theme.colors.bg};
        border: 2px solid ${(props: any) => props.theme.colors.border};
      }
      .filter {
        width: 100%;
        height: 100%;
        background: rgba(59, 85, 230, 0.7) url(${checkIcon}) no-repeat 95% 10%;
        background-size: 15%;
      }
    }
  }
`;

export const BigPhotoWrapper: any = styled.div`
  .photo-container {
    width: 100%;
    height: 400px;
    overflow-y: auto;
    border-radius: 15px;
    border-bottom: 1px solid ${(props: any) => props.theme.colors.border};
    margin-bottom: 20px;
    &.empty {
      cursor: pointer;
      background: url(${plusIcon}) no-repeat center center;
      background-size: 20%;
      background-color: ${(props: any) => props.theme.colors.bg};
      border: 2px solid ${(props: any) => props.theme.colors.border};
      border-radius: 5px;
    }
    img {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }
`;

export const ActionsContainer: any = styled.div`
  display: flex;
  & > div {
    display: flex;
    flex: 1;
    margin: 0 10px;
    padding: 10px 0;
  }
`;

const theme = {
  colors: {
    primary: '#3b55e6',
    secondary: '#454545',
    textDefault: '#666',
    title: '#3b55e6',
    border: 'e4e9f1',
    bg: '#f0f2f7',
  },
};

export default theme;
