import styled, { DefaultTheme, css } from 'styled-components'

import { ButtonProps } from '.'

type WrapperProps = Pick<ButtonProps, 'size'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.xlarge};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size }) => css`
    background: linear-gradient(180deg, '#FF5F5F' 0%, '#F062C0' 50%);
    color: ${theme.colors.white};
    border: 0;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    ${!!size && wrapperModifiers[size](theme)};
  `}
`
