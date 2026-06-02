import type { Serializable } from '../java/io/Serializable.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class Triple<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object implements Serializable {
    constructor(first: A, second: B, third: C)
    readonly first: A;
    readonly second: B;
    readonly third: C;
    component1(): A;
    component2(): B;
    component3(): C;
    copy(first: A, second: B, third: C): Triple<A, B, C>;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}