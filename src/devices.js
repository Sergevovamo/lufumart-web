import { css } from "styled-components";

export const extraSmall = (props) => {
  return css`
    @media only screen and (max-width: 600px) {
      ${props}
    }
  `;
};

export const small = (props) => {
    return css`
      @media only screen and (min-width: 600px) {
        ${props}
      }
    `;
};

export const medium = (props) => {
return css`
    @media only screen and (min-width: 768px) {
    ${props}
    }
`;
};

export const large = (props) => {
return css`
    @media only screen and (min-width: 992px) {
    ${props}
    }
`;
};

export const extraLarge = (props) => {
return css`
    @media only screen and (min-width: 1200px) {
    ${props}
    }
`;
};

// import { device } from "../devices";          --> know what to do
// ${small({ padding: "10px" })}        -->use inside the components

