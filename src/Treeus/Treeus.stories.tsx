import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Treeus } from './Treeus';
import { ITreeusItem } from './Treeus.type';
import { nanoid } from 'nanoid';
import { generateSlug } from 'random-word-slugs';
import './Treeus.stories.css';

export default {
    title: 'Treeus',
    component: Treeus,
    parameters: {
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

const getListItem = () => ({
    id: nanoid(),
    label: generateSlug(1),
    children: [
        {
            id: nanoid(),
            label: generateSlug(1),
            children: [
                {
                    id: nanoid(),
                    label: generateSlug(1),
                },
            ],
        },
    ],
});

const getListItems = (count: number) => {
    const list: ITreeusItem[] = [];
    while (count) {
        count -= 1;
        list.push(getListItem());
    }

    return list;
};

const Template: ComponentStory<typeof Treeus> = (args) => <Treeus {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    items: getListItems(5),
};

export const DarkTheme = Template.bind({});
DarkTheme.parameters = {
    backgrounds: { default: 'dark' },
};
DarkTheme.args = {
    items: getListItems(5),
    className: 'Treeus_dark',
};

export const ThousandElements = Template.bind({});
ThousandElements.args = {
    items: getListItems(1000),
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

    let items = getListItems(2);
    items = items.map((item, index) => {
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
