import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta = {
  title: 'Example/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ExitLabel: Story = {
  args: {
    name: 'IPO',
    type: 'exit',
  },
};

export const SeriesLabel: Story = {
  args: {
    name: 'シード',
    type: 'series',
  },
};

export const InvestorLabel: Story = {
  args: {
    name: '独立系VC',
    type: 'investor',
  },
};
