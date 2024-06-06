import { PanelBody } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { produce } from "immer";
import React, { useState } from "react";
import { Typography } from "../../../../../Components";
import { BBoxControl } from "../../panel/BBoxControl/BBoxControl";
import {Device} from "../../panel/Device/Device";
import PanelColorPicker from "../../panel/PanelColorPicker/PanelColorPicker";
import Tab from "../../panel/Tab/Tab";

const ContentStyle = ({ attributes, setAttributes, device }) => {
  const { styleContent } = attributes;
  const [tab, setTab] = useState("normal");
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
    <PanelBody
      title={__("Content Style", "content-ticker")}
      initialOpen={false}
    >
      <PanelColorPicker
        label={__("Background", "content-ticker")}
        value={styleContent.bg}
        onChange={(value) => update("bg", value)}
      />
      <Tab
        options={["normal", "hover"]}
        onChange={(val) => setTab(val)}
        value={tab}
      />
      <PanelColorPicker
        label={__("Text Color", "content-ticker")}
        value={styleContent.color[tab]}
        onChange={(value) => update("color", value, tab)}
      />
      <Typography
        label={__("Typography", "content-ticker")}
        value={styleContent.typography}
        onChange={(value) => update("typography", value)}
      />
      <hr />
      <div style={{ position: "relative" }}>
        <Device style={{ position: "absolute", left: "55px" }} />
        <BBoxControl
          label={__("Padding", "content-ticker")}
          values={styleContent.padding[device]}
          resetValues={{ top: "0px", right: "0px", bottom: "0px", left: "0px" }}
          onChange={(value) => update("padding", value, device)}
        />
      </div>
      <BBoxControl
        label={__("Border Radius", "content-ticker")}
        values={styleContent.bRadius}
        resetValues={{ top: "0px", right: "0px", bottom: "0px", left: "0px" }}
        onChange={(value) => update("bRadius", value)}
      />
    </PanelBody>
  );
};

export default withSelect((select) => {
  return {
    device: select("core/edit-post")
      .__experimentalGetPreviewDeviceType()
      ?.toLowerCase(),
  };
})(ContentStyle);
