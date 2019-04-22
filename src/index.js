import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const wrapLibrary = lib => {
  return Object.keys(lib.definitions).reduce( (acc, prefix) => {
    return {
      ...acc,
      ...Object.keys(lib.definitions[prefix]).reduce( (acc2, iconName) => {
        return {
          ...acc2,
          [`${prefix} ${iconName}`]: {
            isSvg: true,
            icon: () => <FontAwesomeIcon icon={{prefix, iconName, icon: lib.definitions[prefix][iconName]}} />,
          }
        };
      }, {})
    };
  }, {});
}

export {
  wrapLibrary,
};
