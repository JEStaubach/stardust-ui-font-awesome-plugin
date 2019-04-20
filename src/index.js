import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as freeSolidSvgIcons from '@fortawesome/free-solid-svg-icons';
import * as freeBrandsSvgIcons from '@fortawesome/free-brands-svg-icons';
import * as freeRegularSvgIcons from '@fortawesome/free-regular-svg-icons';


const isMatch = key => ( key.match(/^fa[A-Z]/g) !== null );

const iconSets = [freeSolidSvgIcons, freeBrandsSvgIcons, freeRegularSvgIcons];

const faIcons = iconSets.map( iconSet => (
  Object.keys(iconSet).reduce( (acc, cur) => {
    if (isMatch(cur)) {
      library.add(iconSet[cur]);
      return {
        ...acc,
        [`${iconSet[cur].prefix} ${iconSet[cur].iconName}`]: {
          isSvg: true,
          icon: () => <FontAwesomeIcon icon={iconSet[cur]} />,
        },
      };
    }
    return acc;
  }, {})
)).reduce( (acc, curr) => ({ ...acc, ...curr }), {});

export {
  faIcons,
};
