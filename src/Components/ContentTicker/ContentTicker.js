import { RichText } from '@wordpress/block-editor';
import React from 'react';
import Ticker from './Ticker';
import { FaAngleLeft, FaAngleRight } from '../../utils/icons';
const ContentTicker = ({ attributes, setAttributes }) => {
  const { tickerBadge, animation } = attributes;

  return (
    <div className="cttk-ticker-wrapper">
      <div className="cttk-ticker-swiper-wrapper">
        <div className="cttk-ticker-badge">
          <RichText
            tagName="span"
            value={tickerBadge.text}
            onChange={(val) =>
              setAttributes({ tickerBadge: { ...tickerBadge, text: val } })
            }
          />
        </div>
        <Ticker attributes={attributes} />
        {animation.arrows && (
          <div className="cttk-navBtnWrapper">
            <div className='cttk-navBtn'>
              {/* <FaAngleLeft className="custom-prev-btn" id="cttk-prevBtn" /> */}
              <svg className="custom-next-btn" id='cttk-nextBtn' xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 320 512" ><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
              {/* <FaAngleRight className="custom-next-btn" id='cttk-nextBtn' /> */}
              <svg className="custom-prev-btn" id="cttk-prevBtn" xmlns="http://www.w3.org/2000/svg" height="1em" width="1em" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" /></svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentTicker;
