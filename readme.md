# Jest Mock Testid

Do you have React components that need data-testid added to their props?
Are your components indirectly called from your test file?
Are you over having all those `jest.mock` blocks for your `react-testing-library` test files?

Add `jest-mock-testid` to your test plan today!

## Installation

`npm i -D jest-mock-testid`

## Methods

### mockTestids

```js
import mockTestids from './mock-testids';
import Module from './test/module';

jest.mock('./test/module');
mockTestids('./test/module', 'moduleId');

it('should find `module`',() => {
	const { getByTestId } = render(<Module />);
	expect(getByTestId('moduleId')).toBeInTheDocument();
});
```

## License

Copyright (c) 2022, Michael Szmadzinski. (MIT License)
