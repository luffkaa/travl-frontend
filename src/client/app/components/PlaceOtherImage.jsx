import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ExifOrientationImg from 'react-exif-orientation-img';
import Img from 'react-fix-image-orientation';

export default class ArticleImage extends PureComponent {
  static propTypes = {
    imgSrc: PropTypes.string,
    }

  render() {
    const { imgSrc } = this.props;

    return (
      <div>
        <ExifOrientationImg className="article__place_image" src={`https://travl.dev${imgSrc}`} />
      </div>
    );
  }
}
