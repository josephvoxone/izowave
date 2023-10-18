import styled, { css, keyframes } from 'styled-components';

import { INTERFACE_DESKTOP_BREAKPOINT, INTERFACE_MOBILE_BREAKPOINT } from '~const/interface';
import {
  InterfaceBackgroundColor,
  InterfaceTextColor,
  InterfaceFont,
} from '~type/interface';

const animationTimeout = keyframes`
  0% { right: 0 }
  100% { right: 100% }
`;

const animationOpacity = keyframes`
  0% { opacity: 0; margin-bottom: 0 }
  100% { opacity: 1; margin-bottom: 12px }
`;

export const Icon = styled.img`
  display: block;
  width: 26px;
  height: 26px;
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    width: 22px;
    height: 22px;
  }
`;

export const Info = styled.div`
  position: absolute;
  transform: translateX(-50%);
  bottom: 100%;
  left: 50%;
  margin-bottom: 12px;
  min-width: 200px;
  animation: ${animationOpacity} 0.1s ease-in;
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 100%);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 12px solid ${InterfaceBackgroundColor.BLUE_TRANSPARENT};
  }
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 14px 9px 14px;
  background: ${InterfaceBackgroundColor.BLUE_DARK_TRANSPARENT};
  border-radius: 5px 5px 0 0;
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    padding: 9px 11px;
  }
`;

export const Name = styled.div`
  color: ${InterfaceTextColor.SUCCESS};
  font-family: ${InterfaceFont.PIXEL_LABEL};
  font-size: 14px;
  line-height: 14px;
  margin: -2px 10px 0 0;
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    font-size: 13px;
    line-height: 13px;
  }
`;

export const Description = styled.div`
  font-family: ${InterfaceFont.PIXEL_TEXT};
  font-size: 11px;
  line-height: 12px;
  letter-spacing: 1px;
  color: #fff;
`;

export const Body = styled.div`
  background: ${InterfaceBackgroundColor.BLUE_TRANSPARENT};
  padding: 9px 14px 12px 14px;
  border-radius: 0 0 5px 5px;
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    padding: 7px 11px 11px 11px;
  }
`;

export const Container = styled.div<{
  $active?: boolean
}>`
  background: ${InterfaceBackgroundColor.BLACK_TRANSPARENT_50};
  padding: 14px;
  pointer-events: all;
  position: relative;
  border-bottom: 6px solid #000;
  border-radius: 5px;
  ${(props) => (props.$active && css`
    ${Icon} {
      opacity: 0.5;
    }
  `)};
  @media ${INTERFACE_DESKTOP_BREAKPOINT} {
    &:hover {
      cursor: pointer;
      ${(props) => (!props.$active && css`
        background: ${InterfaceBackgroundColor.BLACK};
      `)};
    }
  }
  @media ${INTERFACE_MOBILE_BREAKPOINT} {
    padding: 10px;
  }
`;

export const Timeout = styled.div`
  position: absolute;
  background: ${InterfaceBackgroundColor.SUCCESS_LIGHT};
  right: 0;
  left: 0;
  bottom: -6px;
  height: 6px;
  animation: ${animationTimeout} 1s linear;
`;
