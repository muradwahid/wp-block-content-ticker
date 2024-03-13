import React from 'react';
import Ticker from '../Ticker';
import { FaAngleLeft, FaAngleRight } from '../../../utils/icons';

const ContentTickerFront = ({ attributes }) => {
  const { tickerBadge, animation } = attributes;
  return (
    <div className="cttk-ticker-wrapper">
      <div className="cttk-ticker-swiper-wrapper">
        <div className="cttk-ticker-badge">
          {/* <RichText
            tagName="span"
            value={tickerBadge.text}
            onChange={(val) =>
              setAttributes({ tickerBadge: { ...tickerBadge, text: val } })
            }
          /> */}
          {tickerBadge.text}
        </div>
        <Ticker attributes={attributes} />
        {animation.arrows && (
          <>
            <FaAngleLeft className="custom-prev-btn" />
            <FaAngleRight className="custom-next-btn" />
          </>
        )}
      </div>
    </div>
  );
};

export default ContentTickerFront;