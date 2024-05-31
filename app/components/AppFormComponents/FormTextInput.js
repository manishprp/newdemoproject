import {TextInput} from '..';

import React from 'react';
import {StyleSheet, View} from 'react-native';
import ErrorMessage from '../ErrorMessage';
import {useFormikContext} from 'formik';

function FormTextInput({
  name,
  placeholder,
  suffixIcon,
  error,
  isVisible = false,
  ...otherProps
}) {
  const {setFieldTouched, handleChange, errors, touched} = useFormikContext();
  return (
    <View style={styles.container}>
      <TextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        placeholder={placeholder}
        suffixIcon={suffixIcon}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} isVisible={touched[name]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 10},
});
export default FormTextInput;
