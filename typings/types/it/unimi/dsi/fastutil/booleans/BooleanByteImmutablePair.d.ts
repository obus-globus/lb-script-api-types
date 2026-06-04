import type { BooleanBytePair } from '../../../../../it/unimi/dsi/fastutil/booleans/BooleanBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BooleanByteImmutablePair extends Object implements BooleanBytePair, Serializable {
    static lexComparator(): (param0: BooleanBytePair) => kotlin.Boolean;
    static of(paramarg0: boolean, paramarg1: number): BooleanByteImmutablePair;
    static of(paramarg0: boolean, paramarg1: number): BooleanBytePair;
    constructor(arg0: boolean, arg1: number)
    // private left: boolean;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): boolean;
    first(arg0: boolean): BooleanBytePair;
    firstBoolean(): boolean;
    hashCode(): number;
    key(): boolean;
    key(arg0: boolean): BooleanBytePair;
    keyBoolean(): boolean;
    left(): boolean;
    left(arg0: boolean): BooleanBytePair;
    leftBoolean(): boolean;
    right(): number;
    right(arg0: number): BooleanBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): BooleanBytePair;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): BooleanBytePair;
    valueByte(): number;
}