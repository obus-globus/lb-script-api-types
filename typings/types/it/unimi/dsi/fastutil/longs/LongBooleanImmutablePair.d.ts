import type { LongBooleanPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongBooleanPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class LongBooleanImmutablePair extends Object implements LongBooleanPair, Serializable {
    static of(paramarg0: number, paramarg1: boolean): LongBooleanImmutablePair;
    constructor(arg0: number, arg1: boolean)
    // private left: number;
    // private right: boolean;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): LongBooleanPair;
    firstLong(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): LongBooleanPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongBooleanPair;
    leftLong(): number;
    right(): boolean;
    right(arg0: boolean): LongBooleanPair;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): LongBooleanPair;
    secondBoolean(): boolean;
    toString(): string;
    value(): boolean;
    value(arg0: boolean): LongBooleanPair;
    valueBoolean(): boolean;
}