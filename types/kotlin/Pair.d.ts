import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class Pair<A extends Object | number | string | boolean, B extends Object | number | string | boolean> extends Object implements Serializable {
    constructor(first: A, second: B)
    readonly first: A;
    readonly second: B;
    component1(): A;
    component2(): B;
    copy(first: A, second: B): Pair<A, B>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}