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
    border-bottom: ${(props) => (props.borderBottom ? `${props.borderBottom}` : '0')}
`;

export const GridColumn = styled.div`
    flex: ${(props) => props.size};
    padding: ${(props) => (props.padding ? `${props.padding}` : '0')};
    border-right: ${(props) => (props.borderRight ? `${props.borderRight}` : '0')}
`;

export const PageTitle = styled.h1`
    color: black;
    display: flex;
`;

export const Text = styled.span`
    display: ${(props) => (props.flex ? 'flex' : '')};
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

export const SalesInfoBox = styled.div`
    box-shadow: 0rem 0.2rem 1rem rgba(0,0,0,0.2);
    border-radius: 0.5rem;
    flex: 1;
    background-color: white;
`;

export const SalesIcon = styled.div`
    font-size: 1.5rem;
`;
