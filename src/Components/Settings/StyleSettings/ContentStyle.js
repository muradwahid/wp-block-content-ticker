import { __experimentalBoxControl as BoxControl, PanelBody, } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import React, { useState } from 'react';
import { Typography } from '../../../../../Components';
import Device from '../../panel/Device/Device';
import PanelColorPicker from '../../panel/PanelColorPicker/PanelColorPicker';
import Tab from '../../panel/Tab/Tab';

const ContentStyle = ({ attributes, setAttributes }) => {
  const { styleContent } = attributes;
  const [tab, setTab] = useState("normal")
  const [paddingDevice, setPaddingDevice] = useState("desktop");
  const update = (property, value, secondProperty, thirdProperty) => {
    const updatedData = produce(styleContent, (draft) => {
      if (thirdProperty) {
        draft[property][secondProperty][thirdProperty] = value;
      } else if (secondProperty) {
        draft[property][secondProperty] = value;
      } else {
        draft[property] = value;
      }
    });
    setAttributes({ styleContent: updatedData });
  };
  return (
    <PanelBody title={__('Content Style', 'content-ticker')} initialOpen={false}>
      <PanelColorPicker
        label={__('Background', 'content-ticker')}
        value={styleContent.bg}
        onChange={(value) => update('bg', value)}
      />
      <Tab
        options={['normal', 'hover']}
        onChange={(val) => setTab(val)}
        value={tab}
      />
      <PanelColorPicker
        label={__('Text Color', 'content-ticker')}
        value={styleContent.color[tab]}
        onChange={(value) => update('color', value, tab)}
      />
      <Typography
        label={__('Typography', 'content-ticker')}
        value={styleContent.typography}
        onChange={(value) => update('typography', value)}
      />
      <hr />
      <div style={{ position: 'relative' }}>
        <Device
          style={{ position: 'absolute', left: '55px' }}
          device={paddingDevice}
          onChange={(value) => setPaddingDevice(value)}
        />
        <BoxControl
          label={__('Padding', 'content-ticker')}
          values={styleContent.padding[paddingDevice]}
          resetValues={{ desktop: '0px', tablet: '0px', mobile: '0px' }}
          onChange={(value) => update('padding', value, paddingDevice)}
        />
      </div>
      <BoxControl
        label={__('Border Radius', 'content-ticker')}
        values={styleContent.bRadius}
        resetValues={{ desktop: '0px', tablet: '0px', mobile: '0px' }}
        onChange={(value) => update('bRadius', value)}
      />
    </PanelBody>
  );
};

export default ContentStyle;