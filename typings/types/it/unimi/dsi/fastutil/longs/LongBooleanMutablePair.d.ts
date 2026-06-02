import type { LongBooleanPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongBooleanPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongBooleanMutablePair extends Object implements LongBooleanPair, Serializable {
    static lexComparator(): (param0: LongBooleanPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: boolean): LongBooleanMutablePair;
    static of(paramarg0: number, paramarg1: boolean): LongBooleanPair;
    constructor(arg0: number, arg1: boolean)
    // private left: number;
    // private right: boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongBooleanPair;
    first(arg0: number): LongBooleanPair;
    firstLong(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongBooleanPair;
    key(arg0: number): LongBooleanPair;
    keyLong(): number;
    left(arg0: number): LongBooleanMutablePair;
    left(): number;
    left(arg0: number): LongBooleanPair;
    left(arg0: number): LongBooleanPair;
    leftLong(): number;
    right(arg0: boolean): LongBooleanMutablePair;
    right(): boolean;
    right(arg0: boolean): LongBooleanPair;
    right(arg0: boolean): LongBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): LongBooleanPair;
    second(arg0: boolean): LongBooleanPair;
    secondBoolean(): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): LongBooleanPair;
    value(arg0: boolean): LongBooleanPair;
    valueBoolean(): boolean;
}