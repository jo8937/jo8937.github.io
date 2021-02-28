import React from 'react';
import style from './about.module.less';
import { stripTags, domHtml } from '../../utils/stripTags';

const AboutTile = (props) => {
  const {
    img, textH4, textH3, alt, height, width,
  } = props;
  return (
    <div className={style.aboutTile}>
      <div className={style.aboutBlock}>
        <img
          src={`../${img}`}
          height={height || 64}
          width={width || 64}
          alt={alt || ''}
        />
      </div>
      <div className={`textCenter ${style.mrTp26PX}`}>
        <h3>{textH3 || '' }</h3>
        <h4 dangerouslySetInnerHTML={domHtml(textH4 || '')}></h4>
      </div>
    </div>
  );
};

export default AboutTile;
