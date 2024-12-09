import moment from 'moment';
import 'moment/locale/de';
import 'moment/locale/en-gb';

export const MY = (date: string, language: string = 'en') =>
  moment(date, ['YYYY-MM-DD']).locale(language).format('MMM YYYY');

export const Y = (date: string) => moment(date, ['YYYY-MM-DD']).format('YYYY');
export const DMY = (date: string, language: string = 'en') =>
  moment(date, ['YYYY-MM-DD']).locale(language).format('D MMM YYYY');
