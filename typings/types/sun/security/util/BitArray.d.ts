import type { Object } from '../../../java/lang/Object.d.ts'
export class BitArray extends Object {
    constructor(arg0: boolean[])
    constructor(arg0: number)
    constructor(arg0: number, arg1: number[])
    constructor(arg0: number, arg1: number[], arg2: number)
    // private length: number;
    // private repn: number[];
    clone(): Object;
    equals(arg0: Object | null): boolean;
    get(arg0: number): boolean;
    hashCode(): number;
    length(): number;
    set(arg0: number, arg1: boolean): void;
    toBooleanArray(): boolean[];
    toByteArray(): number[];
    toString(): string;
    truncate(): BitArray;
}