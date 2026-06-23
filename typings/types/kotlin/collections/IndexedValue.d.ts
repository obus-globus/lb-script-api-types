import type { Object } from '../../java/lang/Object.d.ts'
export class IndexedValue<T extends unknown> extends Object {
    constructor(index: number, value: T)
    readonly index: number;
    readonly value: T;
    component1(): number;
    component2(): T;
    copy(index: number, value: T): IndexedValue<T>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}