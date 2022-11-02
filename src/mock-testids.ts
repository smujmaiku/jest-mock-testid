import mockProps from './mock-props';
import type { MockPropMapI } from './mock-props';

export type MockTestidMapI = Record<string, string>;

export function mockTestids(moduleName: string, testidMap: string): void;
export function mockTestids(
	moduleName: string,
	testidMap: MockTestidMapI
): void;
export function mockTestids(
	moduleName: string,
	testidMap: MockTestidMapI | string
): void {
	if (typeof testidMap === 'string') {
		mockTestids(moduleName, { default: testidMap });
		return;
	}

	const props: MockPropMapI = {};
	for (const [key, testid] of Object.entries(testidMap)) {
		props[key] = {
			'data-testid': testid,
		};
	}

	mockProps(moduleName, props);
}

export default mockTestids;
