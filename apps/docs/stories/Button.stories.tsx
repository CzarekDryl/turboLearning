import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Button } from "ui/lib/Button/Button";

const buttonMeta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "padded"
  }
};

export default buttonMeta;

export const Base: StoryObj<typeof Button> = {
  render: () => <Button />
};
