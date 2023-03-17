import uniqid from 'uniqid';

const InitInformation = {
  name: 'Nick Gerner',
  description:
    'Experienced Software & Machine Learning Engineer with a demonstrated history.',
  aboutPrimary: 'Software Engineer',
  aboutSecondary: 'Washington, DC | tocode.ru',
  email: 'nick@gmail.com',
  phone: '+1 588-6500',
  education: 'Stanford University - BS Electrical Engineering',
  workExperience: [
    { text: 'Solutions Architect, Stripe.', id: uniqid() },
    { text: 'Some heresy, bla-bla-bla.', id: uniqid() },
    { text: 'lorem ipsum lorem ipsum', id: uniqid() },
  ],
  skills: [
    { name: 'html', percent: '80', id: uniqid() },
    { name: 'css', percent: '90', id: uniqid() },
    { name: 'JavaScript', percent: '70', id: uniqid() },
  ],
};

export default InitInformation;
