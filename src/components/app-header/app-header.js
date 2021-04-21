import React from 'react';

import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
display:flex;   
align-items: flex-end;
justify-content: space-between;

   h1 {
      cursor:pointer;
      font-size: 40px;
      color: ${props => props.colored ? 'red' : 'black'};
      :hover {
         color:blue;
       }
   h2 {
   font-size: 1.2rem;
   color: grey;
   }
`

const AppHeader = ({ liked, allPosts }) => {
   return (
      <Header >
         <h1>Evgeniy</h1>
         <h2>{allPosts} записей , из них понравилось {liked}</h2>
      </Header>
   )
}
export default AppHeader