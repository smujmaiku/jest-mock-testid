export type MockPropsI = Record<string, unknown>;
export type MockPropMapI = Record<string, MockPropsI>;

export default function mockProps(
	moduleName: string,
	propMap: MockPropMapI
): void {
	const mockModule = jest.requireMock(moduleName);
	const realModule = jest.requireActual(moduleName);

	for (const [key, props] of Object.entries(propMap)) {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		mockModule[key].mockImplementation((realProps: any) =>
			realModule[key]({
				...realProps,
				...props,
			})
		);
	}
}
