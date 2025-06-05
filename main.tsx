import React from 'react';
import { testTwo } from 'pkg-a/test-two';
import { MyComponent } from 'pkg-a/test-seven';

console.log(testTwo);

console.log(<MyComponent test={true} />);

// error: `packages/pkg-a/runner.js` should NOT be reported as unused
require('pkg-a/node-process');