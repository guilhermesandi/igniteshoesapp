import OneSignal from 'react-native-onesignal';

export function tagUserInfoCreate() {
  OneSignal.sendTags({
    'user_name': 'Guilherme',
    'user_email': 'guilherme_sandi@hotmail.com'
  });
}