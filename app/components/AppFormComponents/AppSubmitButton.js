import {useFormikContext} from 'formik';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from '..';

function AppSubmitButton({title}) {
  const {handleSubmit} = useFormikContext();
  return <Button onPress={handleSubmit} title={title} />;
}

const styles = StyleSheet.create({
  container: {},
});
export default AppSubmitButton;
