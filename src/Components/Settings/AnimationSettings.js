import { PanelBody, RangeControl, SelectControl, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import React, { Fragment } from 'react';
import { Label } from '../../../../Components';
const AnimationSettings = ({ attributes, setAttributes }) => {
  const { animation } = attributes;
  const update = (property, value) => {
    const updatedData = produce(animation, (draft) => {
      draft[property] = value;
    });
    setAttributes({ animation: updatedData });
  };
  return (
    <Fragment>
      <PanelBody
        title={__('Animation Settings', 'content-ticker')}
        initialOpen={false}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
          }}
        >
          <Label className="mb10">{__('Effect', 'content-ticker')}</Label>
          <SelectControl
            value={animation.effect}
            options={[
              { value: 'slide', label: 'Slide' },
              { value: 'fade', label: 'Fade' },
            ]}
            onChange={(value) => update('effect', value)}
            style={{ width: '130px' }}
          />
        </div>
        <RangeControl
          label={__('Slider Speed(ms)', 'content-ticker')}
          value={animation.sliderSpeed}
          onChange={(value) => update('sliderSpeed', value)}
          min={0}
          max={10000}
        />
        <ToggleControl
          label={__('Autoplay', 'content-ticker')}
          checked={animation.autoplay}
          value={animation.autoplay}
          onChange={(value) => update('autoplay', value)}
        />
        <RangeControl
          label={__('Autoplay Speed(ms)', 'content-ticker')}
          value={animation.autopPlaySpeed}
          onChange={(value) => update('autopPlaySpeed', value)}
          min={0}
          max={10000}
        />
        <ToggleControl
          label={__('Pause On Hover', 'content-ticker')}
          checked={animation.pauseOnHover}
          value={animation.pauseOnHover}
          onChange={(value) => update('pauseOnHover', value)}
        />
        <ToggleControl
          label={__('Infinite Loop', 'content-ticker')}
          checked={animation.loop}
          value={animation.loop}
          onChange={(value) => update('loop', value)}
        />
        <ToggleControl
          label={__('Grab Cursor', 'content-ticker')}
          checked={animation.grabCursor}
          value={animation.grabCursor}
          onChange={(value) => update('grabCursor', value)}
        />
        <ToggleControl
          label={__('Navigation Arrows', 'content-ticker')}
          checked={animation.arrows}
          value={animation.arrows}
          onChange={(value) => update('arrows', value)}
        />
        {animation.effect === 'slide' && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
            }}
          >
            <Label className="mb10">{__('Direction', 'content-ticker')}</Label>
            <SelectControl
              value={animation.direction}
              options={[
                { value: 'left', label: 'Left' },
                { value: 'right', label: 'Right' },
              ]}
              onChange={(value) => update('direction', value)}
              style={{ width: '130px' }}
            />
          </div>
        )}
      </PanelBody>
    </Fragment>
  );
};

export default AnimationSettings;
