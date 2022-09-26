import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterContainer>
        <FooterContent>
            <FooterLinkContainer>
                <FooterLinkTitle>
                    Netflix Korea 
                </FooterLinkTitle>
                <FooterLinkContent>
                    <FooterLink href=''> Netflix is? </FooterLink>
                    <FooterLink href=''> Netflix is? </FooterLink>
                    <FooterLink href=''> Netflix is? </FooterLink>
                    <FooterLink href=''> Netflix is? </FooterLink>
                </FooterLinkContent>
            </FooterLinkContainer>
            <FooterDescContainer>
                <FooterDescRights>
                    &copy; Netflix Rights Reseved. 
                </FooterDescRights>
            </FooterDescContainer>
        </FooterContent>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  border-top: 1px solid rgba(25, 25, 25);
  width: 100%;
  position: relative;
  z-index: 100;

  @media screen and (max-width: 768px) {
    padding: 20px 20px
    padding-bottom: 30px
}
  `

  const FooterContent = styled.div``;

  const FooterLinkContainer = styled.div`
    width: 500px
    @media screen and (max-width: 768px) {
        width: 100%;
    }
  `;

  const FooterLinkTitle = styled.div`
    font-size: 20px;
    font-weight: normal;
    color: gray;
      `;

 const FooterLinkContent = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 35px;
    
    @media screen and (max-width: 768px) {
        margin-top: 26px;
        `;

const FooterLink = styled.a`
    color: gray;
    font-size: 14px;
    font-weight: normal;
    width: 110px;
    margin-bottom 21px;
    text-decoration: none;

    &:hover{
        text-decoration: underline; 
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 16px;
`

const FooterDescContainer = styled.div`
    margin-top: 30px;
    @media screen and (max-width: 768px) {
        margin-top: 20px;
    `
const FooterDescRights = styled.h2`
    color: white;
    font-size: 14px; 
    text-align: center;   
`;