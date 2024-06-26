import uploadPhoto from './5-photo-reject';
import signUpUser from './4-user-promise';

export default function handleProfileSignup(firstName, lastName, filename) {
  return Promise.all([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((val) => val);
}
