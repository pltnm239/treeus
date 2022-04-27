const fs = require('fs');
const { nanoid } = require('nanoid');
const { generateSlug } = require('random-word-slugs');
const [, , name, itemsCount] = process.argv;

(async () => {
    let data;
    if (name === 'DifferentNesting') {
        data = getDiffNesting();
        await save(data);

        return;
    }

    data = getListItems(itemsCount);
    await save(data);
})();

async function save(data) {
    await fs.writeFile(`./src/Treeus/test-data/mocks/${name}.json`, JSON.stringify(data), () => {
        console.log('Done');
    });
}

function getListItem() {
    return {
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
    };
}

function getListItems(count) {
    const list = [];
    while (count) {
        count -= 1;
        list.push(getListItem());
    }

    return list;
}

function getDiffNesting() {
    return [
        {
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
                {
                    id: nanoid(),
                    label: generateSlug(1),
                },
            ],
        },
        {
            id: nanoid(),
            label: generateSlug(1),
        },
        {
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
                {
                    id: nanoid(),
                    label: generateSlug(1),
                    children: [
                        {
                            id: nanoid(),
                            label: generateSlug(1),
                        },
                        {
                            id: nanoid(),
                            label: generateSlug(1),
                        },
                        {
                            id: nanoid(),
                            label: generateSlug(1),
                        },
                    ],
                },
                {
                    id: nanoid(),
                    label: generateSlug(1),
                },
            ],
        },
    ];
}
