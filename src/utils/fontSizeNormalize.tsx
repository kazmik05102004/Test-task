import {Dimensions, PixelRatio} from 'react-native';
import {isAndroidDevice} from './isAndroidDevice';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const scale = SCREEN_WIDTH > 600 ? SCREEN_WIDTH / 800 : SCREEN_WIDTH / 500;

export function normalize(size: number) {
  const newSize = size * scale;
  if (!isAndroidDevice) {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
