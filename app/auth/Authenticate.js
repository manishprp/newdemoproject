import {RemoveValue, RetrieveValue} from '../utility/LocalStorage';
import ResponseObject from '../utility/ResponseObject';
import AppGoogleSignIn from './AppGoogleSignIn';
import {login} from './login';

const loginWithGoogle = async () => {
  let answer = ResponseObject();
  answer = await AppGoogleSignIn();
  return answer;
};

const loginNormal = async credentials => {
  let answer = ResponseObject();
  answer = await login(credentials);
  return answer;
};

const alreadyLoggedIn = async () => {
  const asnwer = await RetrieveValue('token', true);
  return asnwer.success;
};
const logout = async () => {
  const asnwer = await RemoveValue('token', true);
  return asnwer.success;
};

export {loginWithGoogle, loginNormal, alreadyLoggedIn, logout};
