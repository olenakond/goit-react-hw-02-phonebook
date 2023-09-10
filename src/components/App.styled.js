import { styled } from 'styled-components';

export const Container = styled('div')(() => {
  return {
    margin: '50px auto',
    width: 700,
    backgroundColor: '#f4f4fd',
    borderRadius: 10,
    padding: '20px 20px',
  };
});

export const Title = styled('h1')(() => {
  return {
    marginBottom: 20,
    fontSize: 30,
    textAlign: 'center',
  };
});

export const TitleList = styled('h2')(() => {
  return {
    marginBottom: 20,
    fontSize: 24,
    textAlign: 'center',
  };
});
