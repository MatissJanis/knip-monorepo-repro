Reproduction for knip - using monorepo workspaces.

Expected results to be reported:
```
Unused files (2)
packages/pkg-a/test-one.ts
packages/pkg-a/test-three.ts
```

Real results reported:
```
Unused files (1)
packages/pkg-a/test-three.ts
```


### Usage
```
yarn install
yarn knip
```