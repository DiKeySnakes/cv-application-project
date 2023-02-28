import React from 'react';
import styled from 'styled-components';
import { useReactToPrint } from 'react-to-print';
import MainTitle from './MainTitle.js';
import Avatar from './Avatar.js';
import Range from './Range.js';
import Title from './Title.js';
import Description from './Description.js';
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
  const [worksCounter, setWorksCounter] = React.useState(1);

  const componentRef = React.useRef();
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  });

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
                <Title>Nick Gerner</Title>
                <Description>
                  Experienced Software & Machine Learning Engineer with a
                  demonstrated history.
                </Description>
              </Content>
            </Row>

            <Row>
              <Sidebar>
                <Title size='3' isUppercase>
                  About me:
                </Title>
                <Description>Software Engineer</Description>
                <Description isSecondary>
                  Washington, DC | tocode.ru
                </Description>

                <Description isPrimary style={{ marginTop: '2rem' }}>
                  <MailIcon style={{ width: '1rem', marginRight: '0.6rem' }} />
                  nick@gmail.com
                </Description>
                <Description isPrimary>
                  <PhoneIcon style={{ width: '1rem', marginRight: '0.6rem' }} />
                  +1 588-6500
                </Description>
              </Sidebar>

              <Content>
                <Title size='3' isUppercase>
                  Education:
                </Title>
                <Description>
                  Stanford University - BS Electrical Engineering
                </Description>

                <Title
                  size='3'
                  isUppercase
                  isShowButton
                  onClick={() => setWorksCounter(worksCounter + 1)}
                  style={{ marginTop: '3.6rem' }}>
                  Work experience:
                </Title>
                {new Array(worksCounter).fill(1).map((_, i) => (
                  <Description key={i}>
                    {i + 1}. Solutions Architect, Stripe.
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
                  <Range key={i} />
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
