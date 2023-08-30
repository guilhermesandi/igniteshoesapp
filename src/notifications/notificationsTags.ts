import OneSignal from 'react-native-onesignal';

export function tagUserInfoCreate() {
  OneSignal.sendTags({
    'user_name': 'Guilherme',
    'user_email': 'guilherme_sandi@hotmail.com'
  });
}

export function tagCartUpdate(itemsCount: string) {
  OneSignal.sendTag('cart_items_count', itemsCount);
}