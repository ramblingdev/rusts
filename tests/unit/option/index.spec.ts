import * as barrel from "@/option/index.js";
import * as None from "@/option/none.js";
import * as Option from "@/option/option.js";
import * as Some from "@/option/some.js";

const allKeys = Object.keys({ ...Option, ...Some, ...None });
const allEntries = { ...Option, ...Some, ...None };

describe("option/index", () => {
	test("exports", () => {
		expect(barrel).toMatchObject(allEntries);

		expect(Object.keys(barrel)).toEqual(allKeys);
	});
});
