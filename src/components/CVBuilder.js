import React from 'react';
import styled from 'styled-components';
import { useReactToPrint } from 'react-to-print';
import InitInformation from './InitInformation.js';
import Header from './Header.js';
// import MainTitle from './MainTitle.js';
import Avatar from './Avatar.js';
import Range from './Range.js';
import Title from './Title.js';
import Description from './Description.js';
import uniqid from 'uniqid';
import 'uimini';

import { ReactComponent as MailIcon } from '../assets/icons/mail.svg';
import { ReactComponent as PhoneIcon } from '../assets/icons/phone.svg';

const Wrapper = styled.div`
  max-width: 800px;
  margin: 2rem auto;
  padding: 3rem 2rem;
  /* background-color: white; */
  background-color: #eee9da;
  /* border: 1px solid #ececec; */
  border: 2px solid black;
  /* box-shadow: 5px 7px 10px 4px #ececec; */
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  border-radius: 1rem;
  margin-top: 6rem;
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
  const [information, setInformation] = React.useState(InitInformation);

  const componentRef = React.useRef();
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleWorkExperienceAddClick = () => {
    setInformation((prevState) => {
      return {
        ...prevState,
        workExperience: information.workExperience.concat({
          text: 'Write here anything you want',
          id: uniqid(),
        }),
      };
    });
  };

  const handleWorkExperienceRemoveClick = (e) => {
    const target = e.target;
    const elemId = target.parentNode.firstChild.id;
    setInformation((prevState) => {
      return {
        ...prevState,
        workExperience: information.workExperience.filter(
          (elem) => elem.id !== elemId
        ),
      };
    });
  };

  const handleSkillsAddClick = () => {
    setInformation((prevState) => {
      return {
        ...prevState,
        skills: information.skills.concat({
          name: 'You name it',
          percent: 50,
          id: uniqid(),
        }),
      };
    });
  };

  const handleSkillsRemoveClick = (e) => {
    const target = e.target;
    const elemId = target.parentNode.id;
    setInformation((prevState) => {
      return {
        ...prevState,
        skills: information.skills.filter((elem) => elem.id !== elemId),
      };
    });
  };

  const handleEducationAddClick = () => {
    setInformation((prevState) => {
      return {
        ...prevState,
        education: information.education.concat({
          text: 'Write here anything you want',
          id: uniqid(),
        }),
      };
    });
  };

  const handleEducationRemoveClick = (e) => {
    const target = e.target;
    const elemId = target.parentNode.firstChild.id;
    setInformation((prevState) => {
      return {
        ...prevState,
        education: information.education.filter((elem) => elem.id !== elemId),
      };
    });
  };

  return (
    <>
      <Header onClick={handlePrintClick} />
      <div className='ui-wrapper'>
        {/* <MainTitle onClick={handlePrintClick} /> */}
        <div
          className='ui-content-wrapper'
          style={{ backgroundColor: '#6096b4' }}>
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
                    <MailIcon
                      style={{ width: '1rem', marginRight: '0.6rem' }}
                    />
                    {information.email}
                  </Description>
                  <Description isPrimary>
                    <PhoneIcon
                      style={{ width: '1rem', marginRight: '0.6rem' }}
                    />
                    {information.phone}
                  </Description>
                </Sidebar>

                <Content>
                  <Title
                    size='3'
                    isUppercase
                    isShowButton
                    onClick={handleWorkExperienceAddClick}>
                    Work experience:
                  </Title>
                  {information.workExperience.map((elem, index) => (
                    <Description
                      key={elem.id}
                      id={elem.id}
                      isShowButton
                      onClick={handleWorkExperienceRemoveClick}>
                      {index + 1}. {elem.text}
                    </Description>
                  ))}

                  <Title
                    size='3'
                    isUppercase
                    isShowButton
                    onClick={handleEducationAddClick}
                    style={{ marginTop: '3.6rem' }}>
                    Education:
                  </Title>
                  {information.education.map((elem) => (
                    <Description
                      key={elem.id}
                      id={elem.id}
                      isShowButton
                      onClick={handleEducationRemoveClick}>
                      {elem.text}
                    </Description>
                  ))}

                  <Title
                    size='3'
                    isUppercase
                    isShowButton
                    onClick={handleSkillsAddClick}
                    style={{ marginTop: '3rem' }}>
                    Skills:
                  </Title>

                  {information.skills.map((elem) => (
                    <Range
                      key={elem.id}
                      id={elem.id}
                      isShowButton
                      name={elem.name}
                      percent={elem.percent}
                      onClick={handleSkillsRemoveClick}
                    />
                  ))}
                </Content>
              </Row>
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default CVBuilder;
