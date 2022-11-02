import mockProps from './mock-props';

import module1, { Module as Module1, Other as Other1 } from './test/module1';

jest.mock('./test/module1');

mockProps('./test/module1', {
	default: { mock: 'module1' },
	Other: { mock: 'other1' },
});

describe('mock-props', () => {
	it('should return mock prop', () => {
		expect(module1({ more: 'props' })).toEqual({
			more: 'props',
			mock: 'module1',
		});

		// It is the same as default
		expect(Module1({ more: 'props' })).toEqual({
			more: 'props',
			mock: 'module1',
		});

		expect(Other1({ more: 'props' })).toEqual({
			more: 'props',
			mock: 'other1',
		});
	});
});
