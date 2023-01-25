import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((messages) => {
      const { body } = messages[0];
      const { firstName, lastName } = messages[1];
      console.log(body, firstName, lastName);
    }).catch(() => { console.log('Signup system offline'); });
}
