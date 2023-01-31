import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 20px;
  padding: 30px 0;
`;

export const Input = styled.input`
  width: 210px;
  height: 20px;
  padding-left: 10px;
`;

export const Button = styled.button`
padding: 5px 10px;
font-size: 15px;
font-weight: 600;
border-radius: 5px;
border: none;
background-color: #ddd;
color: #333;
cursor: pointer;
&:hover {
  background-color: #4b98f5;
  color: #eee;
  }
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;