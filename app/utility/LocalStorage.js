import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Keychain from 'react-native-keychain';
import ResponseObject from './ResponseObject';

const StoreValue = async (key, value, isSecure = false) => {
  let answer = ResponseObject();
  if (isSecure) {
    try {
      await Keychain.setGenericPassword(key, value);
      answer.success = true;
    } catch (error) {
      answer.success = false;
      answer.message = 'Cannot store the value';
    }
  } else {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      answer.success = true;
    } catch (e) {
      answer.success = false;
      answer.message = 'Something went wrong';
    }
  }
  return answer;
};

const RetrieveValue = async (key, isSecure = false) => {
  let answer = ResponseObject();
  if (isSecure) {
    try {
      const credentials = await Keychain.getGenericPassword();
      if (credentials) {
        answer.success = true;
        answer.value = credentials.password;
      } else {
        answer.success = false;
        answer.message = 'No credentials stored';
      }
    } catch (error) {
      answer.success = false;
      answer.message = 'Keychain couldnt be accessed!';
    }
  } else {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      answer.value = jsonValue != null ? JSON.parse(jsonValue) : null;
      answer.success = true;
    } catch (e) {
      answer.success = false;
      answer.message = 'Cannot fetch value';
    }
  }
  return answer;
};

const RemoveValue = async (value, isSecure) => {
  let answer = ResponseObject();
  if (isSecure) {
    try {
      await Keychain.resetGenericPassword();

      answer.success = true;
    } catch (error) {
      answer.success = false;
      answer.message = 'Keychain couldnt be accessed!';
    }
  } else {
    try {
      await AsyncStorage.removeItem(key);
      answer.success = true;
    } catch (e) {
      answer.success = false;
      answer.message = 'Cannot fetch value';
    }
  }
  return answer;
};

export {StoreValue, RetrieveValue, RemoveValue};
