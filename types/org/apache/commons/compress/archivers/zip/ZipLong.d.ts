import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../java/lang/Cloneable.d.ts'
export class ZipLong extends Object implements Serializable, Cloneable {
    static AED_SIG: ZipLong;
    static CFH_SIG: ZipLong;
    static DD_SIG: ZipLong;
    static LFH_SIG: ZipLong;
    static SINGLE_SEGMENT_SPLIT_MARKER: ZipLong;
    static getBytes(paramarg0: number): number[];
    static getValue(paramarg0: number[]): number;
    static getValue(paramarg0: number[], paramarg1: number): number;
    static putLong(paramarg0: number, paramarg1: number[], paramarg2: number): void;
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number)
    constructor(arg0: number)
    readonly value: number;
    protected clone(): Object;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    getBytes(): number[];
    getIntValue(): number;
    getValue(): number;
    hashCode(): number;
    putLong(arg0: number[], arg1: number): void;
    toString(): string;
}