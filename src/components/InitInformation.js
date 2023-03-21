import uniqid from 'uniqid';

const InitInformation = {
  name: 'Nick Gerner',
  description:
    'Experienced web developer adept in all stages of advanced web development. Knowledgeable in user interface, testing, and debugging processes. Bringing forth expertise in design, installation, testing and maintenance of web systems. Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies, including Java, ASP.NET, C#, IIS, Tomcat, and Microsoft SQL Server. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.',
  aboutPrimary: 'Skill highlights',
  aboutSecondary:
    'Project management. Strong decision maker. Complex problem solver. Creative design. Innovative. Service focused.',
  email: 'gerner@gmail.com',
  phone: '+1 588-6500',
  education: [
    {
      text: 'Aug 2008 - May 2010, Master of Computer Science, University of California, Los Angeles',
      id: uniqid(),
    },
    {
      text: 'Aug 2004 - Aug 2008, Bachelor of Computer Science, Pepperdine University, Malibu',
      id: uniqid(),
    },
  ],
  skills: [
    { name: 'Visual Design Skills', percent: '80', id: uniqid() },
    {
      name: 'Knowledge in User Interface/ User Experience',
      percent: '90',
      id: uniqid(),
    },
    { name: 'Adaptability', percent: '70', id: uniqid() },
    { name: 'Database Management', percent: '70', id: uniqid() },
    { name: 'Strong Leadership Skills', percent: '70', id: uniqid() },
    { name: 'Programming', percent: '70', id: uniqid() },
  ],
};

export default InitInformation;
