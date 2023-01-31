import styled from "styled-components"

export const Item = styled.li`
display: flex;
align-items:center ;
justify-content: space-between ;
`

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
`