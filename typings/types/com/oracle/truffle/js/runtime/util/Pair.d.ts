import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Pair<T extends unknown, U extends unknown> extends Object {
    constructor(first: T, second: U)
    readonly first: T;
    readonly second: U;
    equals(obj: Object | null): boolean;
    getFirst(): T;
    getSecond(): U;
    hashCode(): number;
    toString(): string;
}