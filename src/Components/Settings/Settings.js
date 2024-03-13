import {
  Button,
  __experimentalInputControl as InputControl,
  PanelBody,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { produce } from 'immer';
import React, { Fragment } from 'react';
import { Label } from '../../../../Components';
import { FaPlus } from '../../utils/icons';
import PanelRepeater from '../panel/PanelRepeater/PanelRepeater';
import AnimationSettings from './AnimationSettings';

const Settings = ({ attributes, setAttributes }) => {
  const { tickerBadge, contentSettings } = attributes;
  const update = (property, value, secondProperty) => {
    const updatedData = produce(contentSettings, (draft) => {
      if (secondProperty) {
        draft[property][secondProperty] = value;
      } else {
        draft[property] = value;
      }
    });
    setAttributes({ contentSettings: updatedData });
  };
  const addNewItem = () => {
    const copyContent = [...contentSettings];
    copyContent.push({
      content: `Ticker custom content ${contentSettings.length + 1}`,
      link: '#',
      toggle: false,
    });
    setAttributes({ contentSettings: copyContent });
  }
  const handleRemove = (index) => {
    const copyContent = [...contentSettings];
    copyContent.splice(index, 1)
    setAttributes({ contentSettings: copyContent })
  }
  const handleCopy = (index) => {
    const copyContent = [...contentSettings];
    const copiedItem = { ...copyContent[index] };
    copyContent.splice(index + 1, 0, copiedItem);
    setAttributes({ contentSettings: copyContent });
  }
  return (
    <Fragment>
      <PanelBody title={__('Content', 'content-ticker')} initialOpen={true}>
        <Label>{__('Badge Text', 'content-ticker')}</Label>
        <InputControl
          className="mt5"
          value={tickerBadge.text}
          onChange={(value) =>
            setAttributes({ tickerBadge: { ...tickerBadge, text: value } })
          }
        />
        {contentSettings?.map((content, index) => (
          <PanelRepeater
            length={contentSettings.length}
            toggle={content.toggle}
            key={index}
            title={content.content}
            index={index}
            handleCopy={handleCopy}
            handleDelete={handleRemove}
          >
            <Label className="mt5">{__('Content', 'content-ticker')}</Label>
            <InputControl
              className="mt5 mb5"
              value={content.content}
              onChange={(value) => update(index, value, 'content')}
            />
            <Label className="mt5">{__('Link', 'content-ticker')}</Label>
            <InputControl
              className="mt5"
              value={content.link}
              onChange={(value) => update(index, value, 'link')}
            />
          </PanelRepeater>
        ))}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <Button
            onClick={addNewItem}
            variant="primary"
            className="cttk-addItemsBtn"
          >
            <FaPlus /> Add Item
          </Button>
        </div>
      </PanelBody>
      <AnimationSettings attributes={attributes} setAttributes={setAttributes} />
    </Fragment>
  );
};

export default Settings;
