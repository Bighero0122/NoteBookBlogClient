import styled from "styled-components";

export const Container = styled.div`
  background: #f2f8f7;
  height: 435px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const AppFooter = styled.div`
  display: flex;
  padding-top: 103px;
  padding-left: 152px;
  padding-right: 218px;
`;

export const FooterLine = styled.div`
  border-radius: 3px;
  background: #d1e7e5;
  width: 1px;
  height: 1296px;
  transform: rotate(-90deg);
  flex-shrink: 0;
`;

export const FooterAuthor = styled.div`
  color: #555;
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 18px */
  padding-left: 634px;
  padding-right: 634px;
  padding-top: 24px;
  padding-bottom: 28px;
`;
