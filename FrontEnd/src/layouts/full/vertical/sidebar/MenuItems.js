import {
  IconAward,
  IconBoxMultiple,
  IconPoint,
  IconBan,
  IconStar,
  IconMoodSmile,
  IconAperture
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: 15116,
    title: 'Productos',
    icon: IconAperture,
    href: '/sample-page',
    chip: 'New',
    chipColor: 'secondary',
  },
  {
    id: 15117,
    title: 'Info',
    icon: IconAperture,
    href: '/Info',
    chip: 'New',
    chipColor: 'secondary',
  }
];

export default Menuitems;
