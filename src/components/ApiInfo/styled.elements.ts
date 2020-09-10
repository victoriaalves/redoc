import { H1, MiddlePanel } from '../../common-elements';
import styled, { extensionsHook } from '../../styled-components';

const delimiterWidth = 15;

export const ApiInfoWrap = MiddlePanel;

export const ApiHeader = styled(H1)`
  margin-top: 0;
  margin-bottom: 0.5em;

  ${extensionsHook('ApiHeader')};
`;

export const DownloadButton = styled.a`
  font-weight: normal;
  margin-left: 0.5em;
  padding: 14px 28px;
  display: inline-block;
  color: #FFFFFF;
  text-decoration: none;
  background-color: #1087FF;
  cursor: pointer;

  ${extensionsHook('DownloadButton')};
`;

export const InfoSpan = styled.span`
  &::before {
    content: '|';
    display: inline-block;
    opacity: 0.5;
    width: ${delimiterWidth}px;
    text-align: center;
  }

  &:last-child::after {
    display: none;
  }
`;

export const InfoSpanBoxWrap = styled.div`
  overflow: hidden;
`;

export const InfoSpanBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  // hide separator on new lines: idea from https://stackoverflow.com/a/31732902/1749888
  margin-left: -${delimiterWidth}px;
`;
