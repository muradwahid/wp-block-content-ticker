import { PanelBody, RangeControl } from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { produce } from "immer";
import React, { useState } from "react";
import { BorderControl, Label } from "../../../../../Components";
import leftAngelArrow from "../../../../assets/icon/angle-left-solid.svg";
import rightArrow from "../../../../assets/icon/angle-right-solid.svg";
import { BBoxControl } from "../../panel/BBoxControl/BBoxControl";
import {Device} from "../../panel/Device/Device";
import MediaArea from "../../panel/MediaArea/MediaArea";
import PanelColorPicker from "../../panel/PanelColorPicker/PanelColorPicker";
import Tab from "../../panel/Tab/Tab";

const ArrowStyles = ({ attributes, setAttributes, device }) => {
  const { arrows } = attributes;
  const [tab, setTab] = useState("normal");
  const update = (property, value, secondProperty, thirdProperty) => {
    const updatedData = produce(arrows, (draft) => {
      if (thirdProperty) {
        draft[property][secondProperty][thirdProperty] = value;
      } else if (secondProperty) {
        draft[property][secondProperty] = value;
      } else {
        draft[property] = value;
      }
    });
    setAttributes({ arrows: updatedData });
  };
  return (
    <PanelBody title={__("Arrows", "content-ticker")} initialOpen={false}>
      <div className="mt10">
        <Label>{__("Choose prev arrow", "content-ticker")}</Label>
        <MediaArea
          value={arrows.left}
          onChange={(value) => update("left", value)}
          default={leftAngelArrow}
        />
      </div>

      <div className="mt10">
        <Label>{__("Choose next arrow", "content-ticker")}</Label>
        <MediaArea
          value={arrows.right}
          onChange={(value) => update("right", value)}
          default={rightArrow}
        />
      </div>

      <div className="cttk-panelDeviceWrapper">
        <Device className="cttk-panelDevice" style={{ left: "80px" }} />
        <RangeControl
          className="mt10"
          label={__("Arrows Size", "content-ticker")}
          value={arrows.size[device]}
          onChange={(value) => update("size", value, device)}
        />
      </div>

      <div className="cttk-panelDeviceWrapper">
        <Device className="cttk-panelDevice" style={{ left: "110px" }} />
        <RangeControl
          min={-50}
          max={200}
          className="mt10"
          label={__("Align Left Arrow", "content-ticker")}
          value={arrows.alignLeft[device]}
          onChange={(value) => update("alignLeft", value, device)}
        />
      </div>

      <div className="cttk-panelDeviceWrapper">
        <Device className="cttk-panelDevice" style={{ left: "110px" }} />
        <RangeControl
          min={-50}
          max={200}
          className="mt10"
          label={__("Align Right Arrow", "content-ticker")}
          value={arrows.alignRight[device]}
          onChange={(value) => update("alignRight", value, device)}
        />
      </div>

      <div className="cttk-panelDeviceWrapper">
        <Device className="cttk-panelDevice" />
        <BBoxControl
          label={__("Padding", "content-ticker")}
          values={arrows.padding[device]}
          onChange={(value) => update("padding", value, device)}
        />
      </div>

      <Tab
        options={["normal", "hover"]}
        value={tab}
        onChange={(value) => setTab(value)}
      />
      <PanelColorPicker
        label={__("Background", "content-ticker")}
        value={arrows.bg[tab]}
        onChange={(value) => update("bg", value, tab)}
      />
      <PanelColorPicker
        label={__("Color", "content-ticker")}
        value={arrows.color[tab]}
        onChange={(value) => update("color", value, tab)}
      />
      {tab === "normal" && (
        <BorderControl
          label={__("Border", "content-ticker")}
          value={arrows.border}
          onChange={(value) => update("border", value)}
        />
      )}
      {tab === "hover" && (
        <PanelColorPicker
          label={__("Border Color", "content-ticker")}
          value={arrows.bColor}
          onChange={(value) => update("bColor", value)}
        />
      )}
    </PanelBody>
  );
};

export default withSelect((select) => {
  return {
    device: select("core/edit-post")
      .__experimentalGetPreviewDeviceType()
      ?.toLowerCase(),
  };
})(ArrowStyles);
