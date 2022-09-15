import styled from 'styled-components';

export const Button = styled.button`
:not(:last-child) {
    margin-right: 20px;
}
color: #990033;
    padding: 0.7em 1.7em;
    font-size: 18px;
    border-radius: 0.5em;
    background: #e8e8e8;
    border: 1px solid #e8e8e8;
    transition: all .3s;
    box-shadow: 6px 6px 12px #ff33cc,
                -6px -6px 12px #ffffff;
&:active {
    color: #666;
    box-shadow: inset 4px 4px 12px #ff33cc,
                inset -4px -4px 12px #ffffff;
}
`;