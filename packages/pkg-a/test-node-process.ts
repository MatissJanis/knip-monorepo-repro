import { spawn } from 'node:child_process';

spawn(
    'node',
    [
        'runner.js',
    ],
);

// TODO: similarly pnp usage should work too:
// spawn(
//     'node',
//     [
//         '-r',
//         './.pnp.cjs',
//         'runner.js',
//     ],
// );