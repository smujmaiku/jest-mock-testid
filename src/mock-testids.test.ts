import mockTestids from './mock-testids';

import module1, { Module as Module1, Other as Other1 } from './test/module1';
import module2, { Module as Module2, Other as Other2 } from './test/module2';

jest.mock('./test/module1');
jest.mock('./test/module2');

mockTestids('./test/module1', { default: 'module1', Other: 'other1' });
mockTestids('./test/module2', 'module2');

describe('mock-testids', () => {
	describe('mockTestids by map', () => {
		it('should return data-testid', () => {
			expect(module1({ more: 'props' })).toEqual({
				more: 'props',
				'data-testid': 'module1',
			});

			// It is the same as default
			expect(Module1({ more: 'props' })).toEqual({
				more: 'props',
				'data-testid': 'module1',
			});

			expect(Other1({ more: 'props' })).toEqual({
				more: 'props',
				'data-testid': 'other1',
			});
		});
	});

	describe('mockTestids by string', () => {
		it('should return data-testid', () => {
			expect(module2({ more: 'props' })).toEqual({
				more: 'props',
				'data-testid': 'module2',
			});

			// It is the same as default
			expect(Module2({ more: 'props' })).toEqual({
				more: 'props',
				'data-testid': 'module2',
			});

			// It was not mocked
			expect(Other2({ more: 'props' })).toBeUndefined();
		});
	});
});
