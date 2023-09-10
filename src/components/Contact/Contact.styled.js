import { styled } from 'styled-components';

export const Element = styled('li')(() => {
  return {
    display: 'flex',
    marginTop: 10,
  };
});

export const Name = styled('p')(() => {
  return {
    fontSize: 18,
  };
});

export const Button = styled('button')(() => {
  return {
    marginLeft: 20,
    fontSize: 12,
    textAlign: 'center',
    color: '#2e2f42',
    backgroundColor: '#ffffff',
    cursor: 'pointer',
    padding: '2px 4px',
    width: 80,
    minHeight: 20,
    border: '1px solid #e7e9fc',
    borderRadius: 4,
    boxShadow:
      '0px 2px 1px rgba(0, 0, 0, 0.2), 0px 1px 3px rgba(0, 0, 0, 0.12), 1px 0px 1px rgba(0, 0, 0, 0.14)',

    '&:hover, focus': {
      boxShadow: 'none',
    },
  };
});
