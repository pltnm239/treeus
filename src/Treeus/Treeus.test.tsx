import React from 'react';
import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from './Treeus.stories';
const excludeTests = ['ThousandElements', 'FiftyThousandElements'];
const testCases = Object.values(composeStories(stories)).map((Story) => [Story.storyName!, Story]);

test.each(testCases)('Treeus %s', async (_storyName, Treeus) => {
    if (excludeTests.includes(_storyName as string)) {
        return;
    }

    const tree = await render(<Treeus />);
    const labels = document.querySelectorAll('Label');
    labels.forEach((label) => (label.innerHTML = 'test'));
    expect(tree.baseElement).toMatchSnapshot();
});
