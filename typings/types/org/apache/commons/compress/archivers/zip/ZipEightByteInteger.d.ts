import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { BigInteger } from '../../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ZipEightByteInteger extends Object implements Serializable {
    static ZERO: ZipEightByteInteger;
    static getBytes(paramarg0: BigInteger): number[];
    static getBytes(paramarg0: number): number[];
    static getLongValue(paramarg0: number[]): number;
    static getLongValue(paramarg0: number[], paramarg1: number): number;
    static getValue(paramarg0: number[]): BigInteger;
    static getValue(paramarg0: number[], paramarg1: number): BigInteger;
    constructor(arg0: BigInteger)
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: number)
    constructor(arg0: number)
    readonly value: number;
    equals(arg0: Object | null): boolean;
    getBytes(): number[];
    getLongValue(): number;
    getValue(): BigInteger;
    hashCode(): number;
    toString(): string;
}