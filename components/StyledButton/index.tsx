import styled, {css} from "styled-components";

const variants = {
  primary: {
    color: '#fff',
    backgroundColor: '#1D3461',
    border: 'none',
  },
  success: {
    color: '#fff',
    backgroundColor: '#5AB203',
    border: 'none',
  },
  transparent: {
    color: '#111',
    backgroundColor: 'transparent',
    border: 'none',
  },
} as const

type StyledButtonProps = {
  variant: keyof typeof variants;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({variant}) => {
    const style = variants[variant]

    return css`
      color: ${style.color};
      background-color: ${style.backgroundColor};
      border:  ${style.border};
    `;
  }}

  border-radius: 1rem;
  font-size: 1.5rem;
  height: 5rem;
  line-height: 1.5rem;
  letter-spacing: 0.1rem;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`


