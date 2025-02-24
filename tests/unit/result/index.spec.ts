import * as None from "@/result/err.js";
import * as barrel from "@/result/index.js";
import * as Some from "@/result/ok.js";
import * as Option from "@/result/result.js";

const allKeys = Object.keys({ ...Option, ...Some, ...None });
const allEntries = { ...Option, ...Some, ...None };

describe("option/index", () => {
	test("result/index exports", () => {
		expect(barrel).toMatchObject(allEntries);

		expect(Object.keys(barrel)).toEqual(allKeys);
	});
});
