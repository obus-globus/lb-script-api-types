import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
export class ZipShort extends Object implements Serializable, Cloneable {
    static ZERO: ZipShort;
    static getBytes(paramarg0: number): number[];
    static getValue(paramarg0: number[]): number;
    static getValue(paramarg0: number[], paramarg1: number): number;
    static putShort(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number)
    readonly value: number;
    protected clone(): Object;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    getBytes(): number[];
    getValue(): number;
    hashCode(): number;
    toString(): string;
}