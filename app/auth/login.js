import apiClient from '../api/client';
import {isLoggedIn, retrieve} from '../utility/Keychain';
import {StoreValue} from '../utility/LocalStorage';
import ResponseObject from '../utility/ResponseObject';

const endpoint = 'auth/login';

const login = async credentials => {
  let answer = ResponseObject();
  try {
    const response = await apiClient.post(
      endpoint,
      JSON.stringify(credentials),
    );
    const token = response?.data?.token;
    if (token) {
      answer = await StoreValue('token', token, true);
    } else {
      answer.message = response?.problem;
      answer.success = false;
    }
  } catch (error) {
    answer.success = false;
    answer.message = 'Login Failed, check credentials';
  } finally {
    return answer;
  }
};

export {login};
