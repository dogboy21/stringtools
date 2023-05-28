export const StringOperations = [
    {
        name: 'Capitalize',
        fn: (str) => str.toUpperCase(),
    },
    {
        name: 'Lowercase',
        fn: (str) => str.toLowerCase(),
    },
    {
        name: 'Studlycaps',
        fn: (str) => str.split('').map(char => Math.random() > 0.5 ? char.toUpperCase() : char.toLowerCase()).join(''),
    },
    {
        name: 'Length',
        fn: (str) => str.length,
    },
    {
        name: 'Word Count',
        fn: (str) => str.split(' ').filter(word => !!word.trim()).length,
    },
    {
        name: 'Reverse',
        fn: (str) => str.split('').reverse().join(''),
    },
    {
        name: 'Trim',
        fn: (str) => str.trim(),
    },
    {
        name: 'Base64 Encode',
        fn: (str) => btoa(str),
    },
    {
        name: 'Base64 Decode',
        fn: (str) => atob(str),
    },
    {
        name: 'URI Encode',
        fn: (str) => encodeURIComponent(str),
    },
    {
        name: 'Remove Duplicate Lines',
        fn: (str) => [...new Set(str.split('\n'))].join('\n'),
    },
    {
        name: 'Sort Lines',
        fn: (str) => str.split('\n').sort().join('\n'),
    },
    {
        name: 'Randomize Word Order',
        fn: (str) => str.split(' ').filter(word => !!word.trim()).sort(() => Math.random() - 0.5).join(' '),
    },
    {
        name: 'Prettify JSON',
        fn: (str) => JSON.stringify(JSON.parse(str), null, 4),
    },
    {
        name: 'Minify JSON',
        fn: (str) => JSON.stringify(JSON.parse(str)),
    },
]
