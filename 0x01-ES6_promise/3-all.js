import { uploadPhoto, createUser } from './util';

export default function handleProfileSignup() {
  const photo = uploadPhoto();
  const user = createUser();
  return Promise.all([photo, user])
    .then((messages) => {
      const { body } = messages[0];
      const { firstName, lastName } = messages[1];
      console.log(body, firstName, lastName);
    }).catch(() => console.log('Signup system offline'));
}
