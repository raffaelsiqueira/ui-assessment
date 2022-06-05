import styled from 'styled-components';

const colors = {
  lightGrey: '#E6E6E6',
  yellow: '#F9CF03',
};

export const PageBackground = styled.div`
    background-color: ${colors.lightGrey};

`;

export const GridRow = styled.div`
    display: flex;
    padding: ${(props) => (props.padding ? `${props.padding}` : '1%')};
`;

export const GridColumn = styled.div`
    flex: ${(props) => props.size}
`;

export const PageTitle = styled.h1`
    color: black;
`;

export const Text = styled.span`
    color: ${(props) => (props.color ? `${props.color}` : 'black')};
    font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
    font-size: ${(props) => (props.size ? `${props.size}` : '1rem')};
    padding: ${(props) => (props.padding ? `${props.padding}` : '0')}; 
`;

export const Avatar = styled.div`
    display: flex;
    background-color: ${colors.yellow};
    border-radius: 0.5rem;
    height: 1.3rem;
    width: 1.3rem;
    padding: 1.3rem;
`;