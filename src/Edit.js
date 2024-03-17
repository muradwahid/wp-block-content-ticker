import { InspectorControls } from '@wordpress/block-editor';
import { Fragment, useEffect, useState } from 'react';
import ContentTicker from './Components/ContentTicker/ContentTicker';
import Settings from './Components/Settings/Settings';
import Style from './Components/Style/Style';
import TabPanel from "./Components/panel/TabPanel/TabPanel";
import StyleSettings from './Components/Settings/StyleSettings/StyleSettings';
const Edit = props => {
  const { className, setAttributes, clientId, attributes } = props;
  const { cId } = attributes;
  const [tab, setTab] = useState("style")
  useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId
  return (
    <Fragment>
      <InspectorControls>
        <TabPanel tab={tab} setTab={setTab} />
      </InspectorControls>
      <InspectorControls>
        {tab === 'content' && (
          <Settings attributes={attributes} setAttributes={setAttributes} />
        )}
        {
          tab === "style" && <StyleSettings attributes={attributes} setAttributes={setAttributes} />
        }
      </InspectorControls>
      <div className={className} id={`cttk-content-ticker-${cId}`}>
        <Style attributes={attributes} />
        <ContentTicker attributes={attributes} setAttributes={setAttributes} />
      </div>
    </Fragment>
  );
};
export default Edit;