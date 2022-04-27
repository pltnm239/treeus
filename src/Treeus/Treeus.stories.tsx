import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Treeus } from './Treeus';
import { ITreeusProps, ITreeusItem } from './Treeus.type';
import './Treeus.stories.css';

export default {
    title: 'Treeus',
    component: Treeus,
    parameters: {
        options: { showPanel: true },
        backgrounds: {
            default: 'default',
            values: [
                { name: 'default', value: 'white' },
                { name: 'dark', value: '#222831' },
            ],
        },
    },
    decorators: [
        (Story) => (
            <div style={{ width: '150px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Treeus>;

const Template: ComponentStory<typeof Treeus> = (args) => <Treeus {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    items: require('./test-data/mocks/Basic.json'),
};

export const DarkTheme = Template.bind({});
DarkTheme.parameters = {
    backgrounds: { default: 'dark' },
};
DarkTheme.args = {
    items: require('./test-data/mocks/DarkTheme.json'),
    className: 'Treeus_dark',
};

export const CustomRender = Template.bind({});
const getCustomRenderItems = () => {
    const tennisPlayers = [
        {
            name: 'Roger Federer',
            pic: 'https://lh3.googleusercontent.com/1dkVCzMCO5HoMT2PTZYldIBjbHpus6_lpcWytufSZAxRe2v7gehw2aI222fdoVH3oAEYMcn-_1udzzGPfnxC0D6dPDeETKMeU2dvMyw=s0',
        },
        {
            name: 'Rafael Nadal',
            pic: 'https://lh3.googleusercontent.com/drzSzbmVdZq5ZHNBm_YWhwPyHlIkQD8GdGxxUiRVRZqLGM-tx1m0NrCTylM2BIpe6wT2htCZ3afiIAflUu7eEoddkogc6ikn4z_HA54=s0',
        },
    ];

    let items = require('./test-data/mocks/CustomRender.json');
    items = items.map((item: ITreeusItem, index: number) => {
        item.label = (
            <span style={{ color: 'red' }}>
                <img width="12px" src={tennisPlayers[index].pic} />
                <span style={{ display: 'inline-block', marginLeft: '5px' }}>{tennisPlayers[index].name}</span>
            </span>
        );

        return item;
    });

    return items;
};
CustomRender.args = {
    items: getCustomRenderItems(),
    className: 'Treeus_tennis',
};

const longListStyle = {
    width: '250px',
    height: '570px',
    border: '1px solid rgba(0,0,0,0.1)',
    borderRadius: '5px',
};

export const ThousandElements = (args: ITreeusProps, { loaded: { items } }: { loaded: { items: ITreeusItem[] } }) => (
    <div style={longListStyle}>
        <Treeus {...args} items={items} />
    </div>
);

ThousandElements.loaders = [
    async () => ({
        items: require('./test-data/mocks/ThousandElements.json'),
    }),
];
ThousandElements.parameters = {
    options: { showPanel: false },
};

export const FiftyThousandElements = (
    args: ITreeusProps,
    { loaded: { items } }: { loaded: { items: ITreeusItem[] } },
) => (
    <div style={longListStyle}>
        <Treeus {...args} items={items} />
    </div>
);
FiftyThousandElements.parameters = {
    options: { showPanel: false },
};
FiftyThousandElements.loaders = [
    async () => ({
        items: require('./test-data/mocks/FiftyThousandElements.json'),
    }),
];

export const DifferentNesting = Template.bind({});
DifferentNesting.args = {
    items: require('./test-data/mocks/DifferentNesting.json'),
};
