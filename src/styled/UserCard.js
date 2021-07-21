import styled from "styled-components";
export const UserCard = styled.section`
  border: 1px solid #ddd;
  padding: 5px 15px;
  margin: 5px;

  ${props => props.showing === props.id.toString() ? `
          border-color: #ccc;
          background-color: #eee
        ` : ''
      }
    }
  }
`;