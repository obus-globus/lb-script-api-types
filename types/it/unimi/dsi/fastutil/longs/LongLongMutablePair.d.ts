import type { LongLongPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongLongPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongLongMutablePair extends Object implements LongLongPair, Serializable {
    static lexComparator(): (param0: LongLongPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): LongLongMutablePair;
    static of(paramarg0: number, paramarg1: number): LongLongPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongLongPair;
    first(arg0: number): LongLongPair;
    firstLong(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongLongPair;
    key(arg0: number): LongLongPair;
    keyLong(): number;
    left(arg0: number): LongLongMutablePair;
    left(): number;
    left(arg0: number): LongLongPair;
    left(arg0: number): LongLongPair;
    leftLong(): number;
    right(arg0: number): LongLongMutablePair;
    right(): number;
    right(arg0: number): LongLongPair;
    right(arg0: number): LongLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): LongLongPair;
    second(arg0: number): LongLongPair;
    secondLong(): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongLongPair;
    value(arg0: number): LongLongPair;
    valueLong(): number;
}