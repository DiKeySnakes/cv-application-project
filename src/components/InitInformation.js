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
  workExperience: [
    {
      text: 'Aug 2011 - Sep 2019, Senior Web Developer, Allen Hamilton, San Diego. Planned, developed, tested, deployed, and maintained web applications. Provided effective troubleshooting and remediation for web applications. Wrote SQL statements and stored procedures. Worked well independently and within a team setting. Effectively translated client requirements into application designs and systems requirements. Followed policies and procedures related to application methods and quality standards at all times.',
      id: uniqid(),
    },
    {
      text: "Aug 2008 - Jul 2011, Junior Web Developer, Millbank and Morrison, Los Angeles. Worked as a productive and positive team member to design, code, test, report, and debug operations. Managed front-end and back-end development in the company's Portfolio Analyst, Employee Track, and Account Management systems. Successfully identified, diagnosed, and fixed website problems, including broken links, typographical errors, and formatting issues. Helped to achieve a consistent look and visual theme across the website by promoting uniform fonts, formatting, images, and layout. Worked to assess competing websites in regards to content, look, and feel. Evaluated and became knowledgeable in new standards, technologies, and trends in website development.",
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
