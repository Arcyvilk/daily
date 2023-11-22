import { ReactComponent as Cat } from './Cat.svg';
import { ReactComponent as Moon } from './Moon.svg';
import { ReactComponent as Sun } from './Sun.svg';

const icons = { Cat, Moon, Sun };

export type IconType = keyof typeof icons;
export default icons;
