import styled, { css } from "styled-components"
import tw from "twin.macro"

interface StepProps {
  isActive?: boolean
  isLocked?: boolean
}

export const Step = styled.li<StepProps>`
  position: relative;
  ${tw`flex items-center last:pointer-events-none`}

  ${({ isActive }) =>
    isActive
      ? css`
          ${tw`font-bold text-black`}
        `
      : null}
  ${({ isLocked }) =>
    isLocked
      ? css`
          ${tw`text-gray-400 pointer-events-none`}
        `
      : css`
          ${tw`cursor-pointer`}
        `}
`
