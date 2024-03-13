import React from 'react';
import {
  getBackgroundCSS,
  getTypoCSS,
} from '../../../../Components/utils/getCSS';
import { getCssBox } from '../../utils/functions';
const Style = ({ attributes }) => {
  const { cId, tickerBadge, styleContent } = attributes;
  const wrapper = `#cttk-content-ticker-${cId} .cttk-ticker-swiper-wrapper`;
  const badge = `${wrapper} .cttk-ticker-badge`;
  const content = `${wrapper} .cttk-ticker-content-wrapper`;
  return (
    <style>{`
    ${getTypoCSS(badge, tickerBadge.typography)?.googleFontLink}
    ${getTypoCSS(`${content} a.cttk-ticker-link`, styleContent.typography)
        ?.googleFontLink
      }
    ${getTypoCSS(badge, tickerBadge.typography)?.styles}
      ${badge}{
        width:${tickerBadge.width.desktop};
        height:${tickerBadge.height.desktop};
        color:${tickerBadge.color.text};
        padding:${getCssBox(tickerBadge.padding.desktop)};
        margin:${getCssBox(tickerBadge.margin.desktop)};
        border-radius:${getCssBox(tickerBadge.bRadius.desktop)};
        ${getBackgroundCSS(tickerBadge.color.bg)}
      }
      ${content}{
        background-color:${styleContent.bg};
        padding:${getCssBox(styleContent.padding.desktop)};
        border-radius:${getCssBox(styleContent.bRadius)};
        width:calc(100% - ${tickerBadge.width.desktop});
      }
      ${content} a.cttk-ticker-link{
        color:${styleContent.color.normal};
        transition:all 0.2s ease-in-out;
      }
      ${content} a.cttk-ticker-link:hover{
        color:${styleContent.color.hover};
      }
      
    ${getTypoCSS(`${content} .cttk-ticker-link`, styleContent.typography)
        ?.styles
      }

      @media (max-width:1024px){
        ${badge}{
          width:${tickerBadge.width.tablet};
          height:${tickerBadge.height.tablet};
          padding:${getCssBox(tickerBadge.padding.tablet)};
          margin:${getCssBox(tickerBadge.margin.tablet)};
          border-radius:${getCssBox(tickerBadge.bRadius.tablet)};
        }
        ${content}{
          padding:${getCssBox(styleContent.padding.tablet)};
          width:calc(100% - ${tickerBadge.width.tablet});
        }
      }

      @media (max-width:767px){
        ${badge}{
          width:${tickerBadge.width.mobile};
          height:${tickerBadge.height.mobile};
          padding:${getCssBox(tickerBadge.padding.mobile)};
          margin:${getCssBox(tickerBadge.margin.mobile)};
          border-radius:${getCssBox(tickerBadge.bRadius.mobile)};
        }
        ${content}{
          padding:${getCssBox(styleContent.padding.mobile)};
          width:calc(100% - ${tickerBadge.width.mobile});
        }
      }

    `}</style>
  );
};

export default Style;
