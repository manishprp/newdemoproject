import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {object, string} from 'yup';

import {
  BetweenLines,
  ClickableRoundImage,
  ClickableText,
  FormTextInput,
  Screen,
  SubmitButtom,
  Text,
  AppForm,
} from '../components';
import {assets, color, strings} from '../config';
import {
  alreadyLoggedIn,
  loginNormal,
  loginWithGoogle,
} from '../auth/Authenticate';

function LoginScreen({navigation}) {
  const _alreadyLoggedIn = async () => {
    const ans = await alreadyLoggedIn();
    if (ans) {
      navigation.navigate(strings.DASHBOARD);
    }
  };

  useEffect(() => {
    _alreadyLoggedIn();
  }, []);

  let userSchema = object({
    password: string().required('Password is required').label('Password'),
    username: string().required('Username is required').label('Username'),
  });

  const _handleSubmit = async credentials => {
    const res = await loginNormal({...credentials});
    if (res.success) {
      navigation.navigate(strings.DASHBOARD);
    }
  };

  return (
    <Screen style={styles.container} isScrollable>
      <Text style={styles.title}>{strings.LOGIN}</Text>

      <AppForm
        validationSchema={userSchema}
        initialValues={{username: undefined, password: undefined}}
        onSubmit={_handleSubmit}>
        <FormTextInput name={'username'} placeholder={strings.USERNAME} />

        <FormTextInput
          name={'password'}
          placeholder={strings.PASSWORD}
          secureTextEntry
        />

        <SubmitButtom title={strings.LOGIN} />
      </AppForm>

      <BetweenLines text={strings.orLoginWith} />

      <View style={styles.optionsContainer}>
        <View style={styles.space} />

        <ClickableRoundImage
          image={assets.googleIcon}
          onPress={async () => {
            const res = await loginWithGoogle();
            if (res.success) {
              navigation.navigate(strings.DASHBOARD);
            }
          }}
        />

        <View style={styles.space} />

        <ClickableRoundImage image={assets.metaIcon} />

        <View style={styles.space} />

        <ClickableRoundImage image={assets.appleIcon} />

        <View style={styles.space} />
      </View>

      <ClickableText
        onPress={() => {
          navigation.navigate(strings.REGISTER);
        }}
        style={styles.text}
        nonClickableText={`Don't have an`}
        clickableText={'account?'}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 40,
  },
  optionText: {fontSize: 14, marginTop: 25, textAlign: 'center'},
  space: {flex: 1},
  title: {
    marginBottom: 30,
    textAlign: 'center',
    color: color.black,
    fontWeight: 'bold',
  },
  text: {position: 'absolute', bottom: 10, alignSelf: 'center'},
});

export default LoginScreen;
