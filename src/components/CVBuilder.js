import React from 'react';
import styled from 'styled-components';
import { useReactToPrint } from 'react-to-print';
import InitInformation from './InitInformation.js';
import InitWorkExperience from './InitWorkExperience.js';
import Header from './Header.js';
import Avatar from './Avatar.js';
import Range from './Range.js';
import Title from './Title.js';
import Description from './Description.js';
import uniqid from 'uniqid';
import 'uimini';

const Wrapper = styled.div`
  max-width: 95%;
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

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

const AuxillaryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

  const handleSkillsSaveClick = (e) => {
    const target = e.target;
    const elemId = target.parentNode.id;
    const text = target.parentNode.firstChild.firstChild.innerText;
    const input = text;
    const fields = input.split('-');
    const name = fields[0].trim();
    const percent = fields[1].replace('%', '').trim();
    setInformation((prevState) => {
      return {
        ...prevState,
        skills: information.skills
          .filter((elem) => elem.id !== elemId)
          .concat({ name: name, percent: percent, id: uniqid() }),
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
    const elemId = target.parentNode.parentNode.firstChild.firstChild.id;
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
    setInformation((prevState) => {
      return {
        ...prevState,
        name: target.textContent,
      };
    });
  };

  const handleDescriptionSave = (e) => {
    const target = e.target.parentNode.firstChild;
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
    const elemId = target.parentNode.firstChild.firstChild.id;
    const result = workExperience.find((elem) => elem.id === elemId);
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
    const elemId = target.parentNode.parentNode.firstChild.firstChild.id;
    const result = workExperience.find((elem) => elem.id === elemId);
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
    const elemId = target.parentNode.parentNode.firstChild.firstChild.id;
    const result = workExperience.find((elem) => elem.id === elemId);
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
    const elemId = target.parentNode.parentNode.firstChild.firstChild.id;
    const result = workExperience.find((elem) => elem.id === elemId);
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
    const itemId = target.id;
    const result = workExperience.find((elem) => elem.id === itemId);
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
    setWorkExperience(newWorkExperience.concat(newResult));
  };

  const handleRemoveListItem = (e) => {
    const target = e.target;
    const elemId = target.parentNode.parentNode.parentNode.id;
    const itemId = target.parentNode.parentNode.firstChild.id;
    const result = workExperience.find((elem) => elem.id === elemId);
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
    const result = workExperience.find((elem) => elem.id === elemId);
    const newWorkExperience = workExperience.filter(
      (elem) => elem.id !== elemId
    );
    const newResult = {
      ...result,
      list: result.list
        .filter((elem) => elem.id !== itemId)
        .concat({ activity: text, id: uniqid() }),
    };
    setWorkExperience(newWorkExperience.concat(newResult));
  };

  const handleReferencesSave = (e) => {
    const target = e.target;
    const text = target.parentNode.firstChild.textContent;
    setInformation((prevState) => {
      return {
        ...prevState,
        preferences: text,
      };
    });
  };

  const handleAddLanguageElem = () => {
    setInformation((prevState) => {
      return {
        ...prevState,
        languages: information.languages.concat({
          text: 'new language',
          id: uniqid(),
        }),
      };
    });
  };

  const handleRemoveLanguageElem = (e) => {
    const target = e.target;
    const elemId = target.parentNode.parentNode.firstChild.firstChild.id;
    setInformation((prevState) => {
      return {
        ...prevState,
        languages: information.languages.filter((elem) => elem.id !== elemId),
      };
    });
  };

  const handleLanguageElemSave = (e) => {
    const target = e.target;
    const elemId = target.parentNode.parentNode.firstChild.firstChild.id;
    const text = target.parentNode.parentNode.firstChild.firstChild.textContent;
    setInformation((prevState) => {
      return {
        ...prevState,
        languages: information.languages
          .filter((elem) => elem.id !== elemId)
          .concat({ text: text, id: uniqid() }),
      };
    });
  };

  const handleAboutPrimarySave = (e) => {
    const target = e.target;
    const text = target.parentNode.firstChild.textContent;
    setInformation((prevState) => {
      return {
        ...prevState,
        aboutPrimary: text,
      };
    });
  };

  const handleAboutSecondarySave = (e) => {
    const target = e.target;
    const text = target.parentNode.firstChild.textContent;
    setInformation((prevState) => {
      return {
        ...prevState,
        aboutSecondary: text,
      };
    });
  };

  const handleAddressSave = (e) => {
    const target = e.target;
    const text = target.parentNode.firstChild.textContent;
    setInformation((prevState) => {
      return {
        ...prevState,
        address: text,
      };
    });
  };

  const handleEmailSave = (e) => {
    const target = e.target;
    const text = target.parentNode.firstChild.textContent;
    setInformation((prevState) => {
      return {
        ...prevState,
        email: text,
      };
    });
  };

  const handlePhoneSave = (e) => {
    const target = e.target;
    const text = target.parentNode.firstChild.textContent;
    setInformation((prevState) => {
      return {
        ...prevState,
        phone: text,
      };
    });
  };

  return (
    <>
      <Header onClick={handlePrintClick} />
      <div className='ui-wrapper'>
        <div
          className='ui-content-wrapper'
          style={{
            backgroundColor: '#6096b4',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
          }}>
          <Left>
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
                    <Title size='3' isUppercase style={{ marginTop: '2rem' }}>
                      Skills:
                    </Title>
                    {information.skills.map((elem) => (
                      <Range
                        key={elem.id}
                        id={elem.id}
                        name={elem.name}
                        percent={elem.percent}
                      />
                    ))}
                  </Sidebar>
                  <Content>
                    <Title size='3' isUppercase>
                      Work experience:
                    </Title>
                    {workExperience.map((elem, index) => (
                      <div key={uniqid()} id={elem.id}>
                        <Title
                          id={elem.id}
                          size={'4'}
                          style={{ marginTop: '1rem' }}>
                          {index + 1}. {elem.title}
                        </Title>
                        <Description isSecondary>
                          <span>{elem.period}</span>
                        </Description>
                        <AuxillaryWrapper>
                          <Description isSecondary>
                            <span>{elem.employer}</span>
                          </Description>
                          <Description isSecondary>
                            <span>{elem.city}</span>
                          </Description>
                        </AuxillaryWrapper>
                        <ul id={elem.id} className='ui-ul'>
                          {elem.list.map((item) => (
                            <li key={uniqid()} id={item.id} className='ui-li'>
                              {item.activity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </Content>
                </Row>
                <Row>
                  <Sidebar>
                    <Title size={'3'} isUppercase style={{ marginTop: '2rem' }}>
                      Contacts:
                    </Title>
                    <Description isPrimary>
                      <i className='fa-solid fa-location-dot'></i>{' '}
                      {information.address}
                    </Description>
                    <Description isPrimary>
                      <i className='fa-solid fa-envelope'></i>{' '}
                      {information.email}
                    </Description>
                    <Description isPrimary>
                      <i className='fa-solid fa-phone'></i> {information.phone}
                    </Description>
                    <Title size={'3'} isUppercase style={{ marginTop: '2rem' }}>
                      Languages:
                    </Title>
                    {information.languages.map((elem) => (
                      <Description key={uniqid()} id={elem.id}>
                        {elem.text}
                      </Description>
                    ))}
                  </Sidebar>
                  <Content>
                    <Title size='3' isUppercase style={{ marginTop: '2rem' }}>
                      Education:
                    </Title>
                    {information.education.map((elem) => (
                      <Description key={elem.id} id={elem.id}>
                        {elem.text}
                      </Description>
                    ))}
                    <Title size={'3'} isUppercase style={{ marginTop: '2rem' }}>
                      References:
                    </Title>
                    <Description>{information.references}</Description>
                  </Content>
                </Row>
              </div>
            </Wrapper>
          </Left>
          <Right>
            <Wrapper>
              <div className='ui-container'>
                <Row itemsCenter>
                  <Sidebar>
                    <Avatar />
                  </Sidebar>
                  <Content>
                    <Title
                      isShowButton
                      onClick={handleNameSave}
                      buttonText='Save name'>
                      {information.name}
                    </Title>
                    <Description
                      isShowButton
                      onClick={handleDescriptionSave}
                      buttonText='Save description'>
                      {information.description}
                    </Description>
                  </Content>
                </Row>
                <Row>
                  <Sidebar>
                    <Title size='3' isUppercase>
                      About me:
                    </Title>
                    <Description
                      isShowButton
                      buttonText='save'
                      onClick={handleAboutPrimarySave}>
                      {information.aboutPrimary}
                    </Description>
                    <Description
                      isSecondary
                      isShowButton
                      buttonText='Save'
                      onClick={handleAboutSecondarySave}>
                      {information.aboutSecondary}
                    </Description>
                    <Title
                      size='3'
                      isUppercase
                      isShowButton
                      buttonText='Add element'
                      onClick={handleSkillsAddClick}>
                      Skills:
                    </Title>
                    {information.skills.map((elem) => (
                      <Range
                        key={elem.id}
                        id={elem.id}
                        isShowButton
                        name={elem.name}
                        percent={elem.percent}
                        onClickSave={handleSkillsSaveClick}
                        onClickRemove={handleSkillsRemoveClick}
                      />
                    ))}
                  </Sidebar>
                  <Content>
                    <Title
                      size='3'
                      isUppercase
                      isShowButton
                      buttonText='Add element'
                      onClick={handleWorkExperienceAddClick}>
                      Work experience:
                    </Title>
                    {workExperience.map((elem, index) => (
                      <div key={uniqid()} id={elem.id}>
                        <Title
                          id={elem.id}
                          size={'4'}
                          isShowButton
                          buttonText='Add list item'
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
                          buttonText='Save'
                          onClick={handleWorkExpPeriodSave}>
                          <span>{elem.period}</span>
                        </Description>
                        <Description
                          isSecondary
                          isShowButton
                          buttonText='Save'
                          onClick={handleWorkExpEmployerSave}>
                          <span>{elem.employer}</span>
                        </Description>
                        <Description
                          isSecondary
                          isShowButton
                          buttonText='Save'
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
                  </Content>
                </Row>
                <Row>
                  <Sidebar>
                    <Title size={'3'} isUppercase>
                      Contacts:
                    </Title>
                    <Description
                      isPrimary
                      style={{ marginTop: '2rem' }}
                      isShowButton
                      buttonText='Save'
                      onClick={handleAddressSave}>
                      <i className='fa-solid fa-location-dot'></i>{' '}
                      {information.address}
                    </Description>
                    <Description
                      isPrimary
                      isShowButton
                      buttonText='Save'
                      onClick={handleEmailSave}>
                      <i className='fa-solid fa-envelope'></i>{' '}
                      {information.email}
                    </Description>
                    <Description
                      isPrimary
                      isShowButton
                      buttonText='Save'
                      onClick={handlePhoneSave}>
                      <i className='fa-solid fa-phone'></i> {information.phone}
                    </Description>
                    <Title
                      size={'3'}
                      isUppercase
                      isShowButton
                      buttonText='Add element'
                      onClick={handleAddLanguageElem}>
                      Languages:
                    </Title>
                    {information.languages.map((elem) => (
                      <div key={uniqid()}>
                        <Description key={uniqid()} id={elem.id}>
                          {elem.text}
                        </Description>
                        <ButtonGroup key={uniqid()}>
                          <Button
                            key={uniqid()}
                            className='ui-button isLink'
                            onClick={handleLanguageElemSave}>
                            Save
                          </Button>
                          <Button
                            key={uniqid()}
                            className='ui-button isLink'
                            onClick={handleRemoveLanguageElem}>
                            Remove
                          </Button>
                        </ButtonGroup>
                      </div>
                    ))}
                  </Sidebar>
                  <Content>
                    <Title
                      size='3'
                      isUppercase
                      isShowButton
                      buttonText='Add element'
                      onClick={handleEducationAddClick}>
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
                    <Title size={'3'} isUppercase>
                      References:
                    </Title>
                    <Description
                      isShowButton
                      buttonText='Save'
                      onClick={handleReferencesSave}>
                      {information.references}
                    </Description>
                  </Content>
                </Row>
              </div>
              <button className='ui-button isLink' onClick={handleResetClick}>
                Reset
              </button>
            </Wrapper>
          </Right>
        </div>
      </div>
    </>
  );
};

export default CVBuilder;
