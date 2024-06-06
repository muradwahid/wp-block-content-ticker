import {
  Flex,
  PanelBody,
  __experimentalUnitControl as UnitControl,
} from "@wordpress/components";
import { withSelect } from "@wordpress/data";
import { __ } from "@wordpress/i18n";
import { produce } from "immer";
import React from "react";
import { Background, Label, Typography } from "../../../../../Components";
import { BBoxControl } from "../../panel/BBoxControl/BBoxControl";
import {Device} from "../../panel/Device/Device";
import PanelColorPicker from "../../panel/PanelColorPicker/PanelColorPicker";

const BadgeStyle = ({ attributes, setAttributes, device }) => {
  const { tickerBadge } = attributes;

  const update = (property, value, secondProperty, thirdProperty) => {
    const updatedData = produce(tickerBadge, (draft) => {
      if (thirdProperty) {
        draft[property][secondProperty][thirdProperty] = value;
      } else if (secondProperty) {
        draft[property][secondProperty] = value;
      } else {
        draft[property] = value;
      }
    });
    setAttributes({ tickerBadge: updatedData });
  };
  return (
    <PanelBody title={__("Badge Style", "content-ticker")} initialOpen={true}>
      <Flex className="cttk-panelDeviceWrapper">
        <Label className="mb10">{__("Width", "content-ticker")}</Label>
        <Device className="cttk-panelDevice mb10" />

        <UnitControl
          className="width65"
          value={tickerBadge.width[device]}
          onChange={(value) => update("width", value, device)}
        />
      </Flex>
      <Flex className="cttk-panelDeviceWrapper">
        <Device className="cttk-panelDevice mb10" />
        <Label className="mb10">{__("Height", "content-ticker")}</Label>
        <UnitControl
          className="width65"
          value={tickerBadge.height[device]}
          onChange={(value) => update("height", value, device)}
        />
      </Flex>
      <Background
        label={__("Background", "content-ticker")}
        value={tickerBadge.color.bg}
        onChange={(value) => update("color", value, "bg")}
        defaults={{ color: "#0e0e0e" }}
      />
      <PanelColorPicker
        label={__("Color", "content-ticker")}
        value={tickerBadge.color.text}
        onChange={(value) => update("color", value, "text")}
        default="#00F"
      />
      <Typography
        label={__("Typography", "content-ticker")}
        value={tickerBadge.typography}
        onChange={(value) => update("typography", value)}
      />
      <div className="cttk-panelDeviceWrapper mt10">
        <Device className="cttk-panelDevice" />
        <BBoxControl
          label={__("Padding", "content-ticker")}
          values={tickerBadge.padding[device]}
          onChange={(value) => update("padding", value, [device])}
        />
      </div>
      <div className="cttk-panelDeviceWrapper mt10">
        <Device className="cttk-panelDevice" />
        <BBoxControl
          label={__("Margin", "content-ticker")}
          values={tickerBadge.margin.desktop}
          onChange={(value) => update("margin", value, [device])}
        />
      </div>
      <div style={{ position: "relative" }}>
        <Device style={{ position: "absolute", left: "90px" }} />
        <BBoxControl
          label={__("Border Radius", "content-ticker")}
          values={tickerBadge.bRadius[device]}
          onChange={(value) => update("bRadius", value, [device])}
        />
      </div>
    </PanelBody>
  );
};

export default withSelect((select) => {
  return {
    device: select("core/edit-post")
      .__experimentalGetPreviewDeviceType()
      ?.toLowerCase(),
  };
})(BadgeStyle);
