interface Comparable<T = never> {
	eq(other: T extends never ? this : T): boolean;

	ne(other: T extends never ? this : T): boolean;

	lt(other: T extends never ? this : T): boolean;

	le(other: T extends never ? this : T): boolean;

	gt(other: T extends never ? this : T): boolean;

	ge(other: T extends never ? this : T): boolean;

	max(other: T extends never ? this : T): T extends never ? this : T;

	min(other: T extends never ? this : T): T extends never ? this : T;

	clamp(
		min: T extends never ? this : T,
		max: T extends never ? this : T,
	): T extends never ? this : T;
}
export type { Comparable };
