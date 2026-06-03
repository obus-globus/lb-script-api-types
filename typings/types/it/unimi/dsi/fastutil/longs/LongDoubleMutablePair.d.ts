import type { LongDoublePair } from '../../../../../it/unimi/dsi/fastutil/longs/LongDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongDoubleMutablePair extends Object implements LongDoublePair, Serializable {
    static lexComparator(): (param0: LongDoublePair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): LongDoubleMutablePair;
    static of(paramarg0: number, paramarg1: number): LongDoublePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongDoublePair;
    first(arg0: number): LongDoublePair;
    firstLong(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongDoublePair;
    key(arg0: number): LongDoublePair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongDoublePair;
    left(arg0: number): LongDoubleMutablePair;
    left(): number;
    left(arg0: number): LongDoublePair;
    left(arg0: number): LongDoublePair;
    leftLong(): number;
    right(): number;
    right(arg0: number): LongDoublePair;
    right(arg0: number): LongDoubleMutablePair;
    right(): number;
    right(arg0: number): LongDoublePair;
    right(arg0: number): LongDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): LongDoublePair;
    second(arg0: number): LongDoublePair;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): LongDoublePair;
    value(arg0: number): LongDoublePair;
    valueDouble(): number;
}