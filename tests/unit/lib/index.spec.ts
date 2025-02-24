import { Logger } from "tslog";
import { log, shallowCopy, deepCopy } from "@/lib/index.js";

describe("lib/logger", () => {
	test("log", () => {
		expect(log).toBeInstanceOf(Logger);
	});
});

describe("lib/utils", () => {
	test("shallowCopy", () => {
		// Test array
		const arr = [1, 2, [3, 4]];
		const copy = shallowCopy(arr);
		expect(copy).not.toBe(arr);
		expect(copy[2]).toBe(arr[2]);
		expect(copy).toEqual(arr);

		// Test object
		const obj = { a: 1, b: { c: 2 } };
		const copyObj = shallowCopy(obj);
		expect(copyObj).not.toBe(obj);
		expect(copyObj.b).toBe(obj.b);
		expect(copyObj).toEqual(obj);

		// Test primitive
		const primitive = 1;
		const copyPrimitive = shallowCopy(primitive);
		expect(copyPrimitive).toBe(primitive);
	});

	test("deepCopy", () => {
		// Test array
		const arr = [1, 2, [3, 4]];
		const copy = deepCopy(arr);
		expect(copy).not.toBe(arr);
		expect(copy[2]).not.toBe(arr[2]);
		expect(copy).toEqual(arr);

		// Test object
		const obj = { a: 1, b: { c: 2 } };
		const copyObj = deepCopy(obj);
		expect(copyObj).not.toBe(obj);
		expect(copyObj.b).not.toBe(obj.b);
		expect(copyObj).toEqual(obj);

		// Test primitive
		const primitive = 1;
		const copyPrimitive = deepCopy(primitive);
		expect(copyPrimitive).toBe(primitive);
	});
});
