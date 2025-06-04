import React from 'react';
import { testTwo } from 'pkg-a/test-two';
import { MyComponent } from 'pkg-a/test-seven';

console.log(testTwo);

console.log(<MyComponent test={true} />);
// console.log(<MyComponent testNot={true} />);
