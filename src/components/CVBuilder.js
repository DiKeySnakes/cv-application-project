import React from 'react';
import styled from 'styled-components';
import { useReactToPrint } from 'react-to-print';
import InitInformation from './InitInformation.js';
import InitWorkExperience from './InitWorkExperience.js';
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
  background-color: #eee9da;
  border: 2px solid black;
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

const Button = styled.button`
  display: inline-block;
  transition: 0.1s all ease;
  opacity: 0 !important;
  &:hover {
    opacity: 1 !important;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const CVBuilder = () => {
  const LOCAL_STORAGE_KEY_INFO = 'CVBuilderProject.information';
  const LOCAL_STORAGE_KEY_WORK = 'CVBuilderProject.workExperience';

  const storedInformation = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY_INFO)
  );
  const storedWorkExperience = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEY_WORK)
  );

  const [information, setInformation] = React.useState(
    storedInformation ? storedInformation : InitInformation
  );
  const [workExperience, setWorkExperience] = React.useState(
    storedWorkExperience ? storedWorkExperience : InitWorkExperience
  );

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY_INFO, JSON.stringify(information));
    localStorage.setItem(
      LOCAL_STORAGE_KEY_WORK,
      JSON.stringify(workExperience)
    );
  }, [information, workExperience]);

  const componentRef = React.useRef();
  const handlePrintClick = useReactToPrint({
    content: () => componentRef.current,
  });

  const handleResetClick = () => {
    setInformation(InitInformation);
    setWorkExperience(InitWorkExperience);
  };

  const handleWorkExperienceAddClick = () => {
    const newWorkExperience = workExperience.concat({
      period: 'period',
      title: 'title',
      employer: 'employer',
      city: 'city',
      list: [
        {
          activity: 'activity',
          id: uniqid(),
        },
      ],
      id: uniqid(),
    });
    setWorkExperience(newWorkExperience);
  };

  const handleWorkExperienceRemoveClick = (e) => {
    const target = e.target;
    console.log('target:', target);
    const elemId = target.parentNode.id;
    const newWorkExperience = workExperience.filter(
      (elem) => elem.id !== elemId
    );
    setWorkExperience(newWorkExperience);
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
    const elemId = target.parentNode.parentNode.firstChild.firstChild.id;
    setInformation((prevState) => {
      return {
        ...prevState,
        education: information.education.filter((elem) => elem.id !== elemId),
      };
    });
  };

  const handleEducationSave = (e) => {
    const target = e.target;
    const text = target.parentNode.parentNode.firstChild.firstChild.textContent;
    console.log('text:', text);
    const elemId = target.parentNode.parentNode.firstChild.firstChild.id;
    console.log('elemId:', elemId);
    const result = information.education.find((elem) => elem.id === elemId);
    console.log('result:', result);
    setInformation((prevState) => {
      return {
        ...prevState,
        education: information.education
          .filter((elem) => elem.id !== elemId)
          .concat({ text: text, id: uniqid() }),
      };
    });
  };

  const handleNameSave = (e) => {
    const target = e.target.parentNode.firstChild;
    console.log('target:', target);
    setInformation((prevState) => {
      return {
        ...prevState,
        name: target.textContent,
      };
    });
  };

  const handleDescriptionSave = (e) => {
    const target = e.target.parentNode.firstChild;
    console.log('target:', target);
    setInformation((prevState) => {
      return {
        ...prevState,
        description: target.textContent,
      };
    });
  };

  const handleWorkExpTitleSave = (e) => {
    const target = e.target;
    const text = target.parentNode.firstChild.firstChild.textContent;
    console.log('title:', text);
    const elemId = target.parentNode.firstChild.firstChild.id;
    console.log('elemId:', elemId);
    const result = workExperience.find((elem) => elem.id === elemId);
    console.log('result:', result);
    const newWorkExperience = workExperience.filter(
      (elem) => elem.id !== elemId
    );
    const newResult = {
      ...result,
      title: text,
    };
    setWorkExperience(newWorkExperience.concat(newResult));
  };

  const handleWorkExpPeriodSave = (e) => {
    const target = e.target;
    const text = target.parentNode.firstChild.firstChild.textContent;
    console.log('period:', text);
    const elemId = target.parentNode.parentNode.firstChild.firstChild.id;
    console.log('elemId:', elemId);
    const result = workExperience.find((elem) => elem.id === elemId);
    console.log('result:', result);
    const newWorkExperience = workExperience.filter(
      (elem) => elem.id !== elemId
    );
    const newResult = {
      ...result,
      period: text,
    };
    setWorkExperience(newWorkExperience.concat(newResult));
  };

  const handleWorkExpEmployerSave = (e) => {
    const target = e.target;
    const text = target.parentNode.firstChild.firstChild.textContent;
    console.log('employer:', text);
    const elemId = target.parentNode.parentNode.firstChild.firstChild.id;
    console.log('elemId:', elemId);
    const result = workExperience.find((elem) => elem.id === elemId);
    console.log('result:', result);
    const newWorkExperience = workExperience.filter(
      (elem) => elem.id !== elemId
    );
    const newResult = {
      ...result,
      employer: text,
    };
    setWorkExperience(newWorkExperience.concat(newResult));
  };

  const handleWorkExpCitySave = (e) => {
    const target = e.target;
    const text = target.parentNode.firstChild.firstChild.textContent;
    console.log('city:', text);
    const elemId = target.parentNode.parentNode.firstChild.firstChild.id;
    console.log('elemId:', elemId);
    const result = workExperience.find((elem) => elem.id === elemId);
    console.log('result:', result);
    const newWorkExperience = workExperience.filter(
      (elem) => elem.id !== elemId
    );
    const newResult = {
      ...result,
      city: text,
    };
    setWorkExperience(newWorkExperience.concat(newResult));
  };

  const handleAddListItem = (e) => {
    const target = e.target.parentNode.firstChild;
    console.log('target:', target);
    const itemId = target.id;
    const result = workExperience.find((elem) => elem.id === itemId);
    console.log('result:', result);
    const newWorkExperience = workExperience.filter(
      (elem) => elem.id !== itemId
    );
    const newResult = {
      ...result,
      list: result.list.concat({
        activity: 'new activity',
        id: uniqid(),
      }),
    };
    console.log('newResult:', newResult);
    console.log('newWorkExperience:', newWorkExperience);
    setWorkExperience(newWorkExperience.concat(newResult));
  };

  const handleRemoveListItem = (e) => {
    const target = e.target;
    const elemId = target.parentNode.parentNode.parentNode.id;
    const itemId = target.parentNode.parentNode.firstChild.id;
    console.log('itemId:', itemId);
    console.log('elemId:', elemId);
    const result = workExperience.find((elem) => elem.id === elemId);
    console.log('result:', result);
    const newWorkExperience = workExperience.filter(
      (elem) => elem.id !== elemId
    );
    const newResult = {
      ...result,
      list: result.list.filter((elem) => elem.id !== itemId),
    };
    setWorkExperience(newWorkExperience.concat(newResult));
  };

  const handleListItemSave = (e) => {
    const target = e.target;
    const elemId = target.parentNode.parentNode.parentNode.id;
    const itemId = target.parentNode.parentNode.firstChild.id;
    const text = target.parentNode.parentNode.firstChild.firstChild.textContent;
    console.log('text:', text);
    console.log('itemId:', itemId);
    console.log('elemId:', elemId);
    const result = workExperience.find((elem) => elem.id === elemId);
    console.log('result:', result);
    const newWorkExperience = workExperience.filter(
      (elem) => elem.id !== elemId
    );
    const newResult = {
      ...result,
      list: result.list
        .filter((elem) => elem.id !== itemId)
        .concat({ activity: text, id: uniqid() }),
    };
    console.log('newResult:', newResult);
    setWorkExperience(newWorkExperience.concat(newResult));
  };

  return (
    <>
      <Header onClick={handlePrintClick} />
      <div className='ui-wrapper'>
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
                  <Title isShowButton onClick={handleNameSave}>
                    {information.name}
                  </Title>
                  <Description isShowButton onClick={handleDescriptionSave}>
                    {information.description}
                  </Description>
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
                  {workExperience.map((elem, index) => (
                    <div key={uniqid()} id={elem.id}>
                      <Title
                        id={elem.id}
                        size={'4'}
                        isShowButton
                        onClick={handleAddListItem}>
                        {index + 1}. {elem.title}
                      </Title>

                      <Button
                        key={uniqid()}
                        className='ui-button isLink'
                        onClick={handleWorkExpTitleSave}>
                        Save title
                      </Button>

                      <Description
                        isSecondary
                        isShowButton
                        onClick={handleWorkExpPeriodSave}>
                        <span>{elem.period}</span>
                      </Description>

                      <Description
                        isSecondary
                        isShowButton
                        onClick={handleWorkExpEmployerSave}>
                        <span>{elem.employer}</span>
                      </Description>

                      <Description
                        isSecondary
                        isShowButton
                        onClick={handleWorkExpCitySave}>
                        <span>{elem.city}</span>
                      </Description>

                      <ul id={elem.id} className='ui-ul'>
                        {elem.list.map((item) => (
                          <div key={uniqid()}>
                            <li
                              key={uniqid()}
                              id={item.id}
                              className='ui-li'
                              contentEditable
                              suppressContentEditableWarning
                              spellCheck={false}>
                              {item.activity}
                            </li>
                            <ButtonGroup key={uniqid()}>
                              <Button
                                key={uniqid()}
                                className='ui-button isLink'
                                onClick={handleListItemSave}>
                                Save list item
                              </Button>
                              <Button
                                key={uniqid()}
                                className='ui-button isLink'
                                onClick={handleRemoveListItem}>
                                Remove list item
                              </Button>
                            </ButtonGroup>
                          </div>
                        ))}
                      </ul>
                      <Button
                        key={uniqid()}
                        className='ui-button isLink'
                        onClick={handleWorkExperienceRemoveClick}>
                        Remove work experience element
                      </Button>
                    </div>
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
                    <div key={uniqid()}>
                      <Description key={elem.id} id={elem.id}>
                        {elem.text}
                      </Description>
                      <ButtonGroup key={uniqid()}>
                        <Button
                          key={uniqid()}
                          className='ui-button isLink'
                          onClick={handleEducationSave}>
                          Save element
                        </Button>
                        <Button
                          key={uniqid()}
                          className='ui-button isLink'
                          onClick={handleEducationRemoveClick}>
                          Remove element
                        </Button>
                      </ButtonGroup>
                    </div>
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
            <Button className='ui-button isLink' onClick={handleResetClick}>
              Reset
            </Button>
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default CVBuilder;
