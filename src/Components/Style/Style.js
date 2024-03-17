import React from 'react';
import {
  getBackgroundCSS,
  getBorderCSS,
  getTypoCSS,
} from '../../../../Components/utils/getCSS';
import { getCssBox } from '../../utils/functions';
const Style = ({ attributes }) => {
  const { cId, tickerBadge, styleContent, arrows } = attributes;
  const blockWrapper = `#cttk-content-ticker-${cId} .cttk-ticker-wrapper`
  const wrapper = `${blockWrapper} .cttk-ticker-swiper-wrapper`;
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
      #cttk-nextBtn,#cttk-prevBtn{
        height:${arrows.size.desktop}px;
        width:${arrows.size.desktop}px;
        font-size:${arrows.size.desktop}px;
        padding:${getCssBox(arrows.padding.desktop)};
        color:${arrows.color.normal};
        fill:${arrows.color.normal};
        background:${arrows.bg.normal};
        ${getBorderCSS(arrows.border)}
      }
      #cttk-nextBtn{
        right:${arrows.alignLeft.desktop}px;
      }
      #cttk-prevBtn{
        right:${arrows.alignRight.desktop}px;
      }
      #cttk-nextBtn:hover{
        color:${arrows.color.hover};
        fill:${arrows.color.hover};
        background:${arrows.bg.hover};
        border-color:${arrows.bColor};
      }
      #cttk-prevBtn:hover{
        color:${arrows.color.hover};
        fill:${arrows.color.hover};
        background:${arrows.bg.hover};
        border-color:${arrows.bColor};
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
        #cttk-nextBtn,#cttk-prevBtn{
          height:${arrows.size.tablet}px;
          width:${arrows.size.tablet}px;
          font-size:${arrows.size.tablet}px;
          padding:${getCssBox(arrows.padding.tablet)};
        }
        #cttk-nextBtn{
          right:${arrows.alignLeft.tablet}px;
        }
        #cttk-prevBtn{
          right:${arrows.alignRight.tablet}px;
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
        #cttk-nextBtn,#cttk-prevBtn{
          height:${arrows.size.mobile}px;
          width:${arrows.size.mobile}px;
          font-size:${arrows.size.mobile}px;
          padding:${getCssBox(arrows.padding.mobile)};
        }
        #cttk-nextBtn{
          right:${arrows.alignLeft.mobile}px;
        }
        #cttk-prevBtn{
          right:${arrows.alignRight.mobile}px;
        }
      }
    `}</style>
  );
};

export default Style;
