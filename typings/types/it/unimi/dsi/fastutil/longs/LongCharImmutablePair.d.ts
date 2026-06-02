import type { LongCharPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongCharPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongCharImmutablePair extends Object implements LongCharPair, Serializable {
    static lexComparator(): (param0: LongCharPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: string): LongCharImmutablePair;
    static of(paramarg0: number, paramarg1: string): LongCharPair;
    constructor(arg0: number, arg1: string)
    // private left: number;
    // private right: string;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongCharPair;
    first(arg0: number): LongCharPair;
    firstLong(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongCharPair;
    key(arg0: number): LongCharPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongCharPair;
    left(arg0: number): LongCharPair;
    leftLong(): number;
    right(): string;
    right(arg0: string): LongCharPair;
    right(arg0: string): LongCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): LongCharPair;
    second(arg0: string): LongCharPair;
    secondChar(): string;
    toString(): string;
    value(): string;
    value(arg0: string): LongCharPair;
    value(arg0: string): LongCharPair;
    valueChar(): string;
}