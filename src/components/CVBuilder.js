import React from 'react';
import styled from 'styled-components';
import { useReactToPrint } from 'react-to-print';
import InitInformation from './InitInformation.js';
import MainTitle from './MainTitle.js';
import Avatar from './Avatar.js';
import Range from './Range.js';
import Title from './Title.js';
import Description from './Description.js';
import uniqid from 'uniqid';
import 'uimini';

import { ReactComponent as MailIcon } from '../assets/icons/mail.svg';
import { ReactComponent as PhoneIcon } from '../assets/icons/phone.svg';

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  background-color: white;
  border: 1px solid #ececec;
  box-shadow: 5px 7px 10px 4px #ececec;
  border-radius: 14px;
`;

const Row = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: ${(props) => (props.itemsCenter ? 'center' : 'start')};
  margin: 2rem 0;
`;

const Sidebar = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const Content = styled.div`
  flex: 3;
  margin-left: 1rem;
`;

const CVBuilder = () => {
  const [skillsCounter, setSkillsCounter] = React.useState(1);
  const [information, setInformation] = React.useState(InitInformation);

  const componentRef = React.useRef();
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePlusClick = () => {
    setInformation((prevState) => {
      return {
        ...prevState,
        workExperience: information.workExperience.concat({
          text: '',
          id: uniqid(),
        }),
      };
    });
  };

  const handleMinusClick = (e) => {
    const target = e.target;
    const elemId = target.parentNode.firstChild.id;
    console.log('target:', target.parentNode.firstChild.id);
    setInformation((prevState) => {
      return {
        ...prevState,
        workExperience: information.workExperience.filter(
          (elem) => elem.id !== elemId
        ),
      };
    });
  };

  return (
    <div className='ui-wrapper'>
      <MainTitle onClick={handlePrintClick} />
      <div className='ui-content-wrapper'>
        <Wrapper>
          <div className='ui-container' ref={componentRef}>
            <Row itemsCenter>
              <Sidebar>
                <Avatar />
              </Sidebar>
              <Content>
                <Title>{information.name}</Title>
                <Description>{information.description}</Description>
              </Content>
            </Row>

            <Row>
              <Sidebar>
                <Title size='3' isUppercase>
                  About me:
                </Title>
                <Description>{information.aboutPrimary}</Description>
                <Description isSecondary>
                  {information.aboutSecondary}
                </Description>

                <Description isPrimary style={{ marginTop: '2rem' }}>
                  <MailIcon style={{ width: '1rem', marginRight: '0.6rem' }} />
                  {information.email}
                </Description>
                <Description isPrimary>
                  <PhoneIcon style={{ width: '1rem', marginRight: '0.6rem' }} />
                  {information.phone}
                </Description>
              </Sidebar>

              <Content>
                <Title size='3' isUppercase>
                  Education:
                </Title>
                <Description>{information.education}</Description>

                <Title
                  size='3'
                  isUppercase
                  isShowButton
                  onClick={handlePlusClick}
                  style={{ marginTop: '3.6rem' }}>
                  Work experience:
                </Title>
                {information.workExperience.map((elem, index) => (
                  <Description
                    key={elem.id}
                    id={elem.id}
                    isShowButton
                    onClick={handleMinusClick}>
                    {index + 1}. {elem.text}
                  </Description>
                ))}

                <Title
                  size='3'
                  isUppercase
                  isShowButton
                  onClick={() => setSkillsCounter(skillsCounter + 1)}
                  style={{ marginTop: '3rem' }}>
                  Skills:
                </Title>

                {new Array(skillsCounter).fill(1).map((_, i) => (
                  <Range
                    key={i}
                    isShowButton
                    onClick={() => setSkillsCounter(skillsCounter - 1)}
                  />
                ))}
              </Content>
            </Row>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default CVBuilder;
