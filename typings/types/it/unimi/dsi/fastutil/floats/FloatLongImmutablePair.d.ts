import type { FloatLongPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatLongPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatLongImmutablePair extends Object implements FloatLongPair, Serializable {
    static of(paramarg0: number, paramarg1: number): FloatLongImmutablePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatLongPair;
    firstFloat(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatLongPair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatLongPair;
    leftFloat(): number;
    right(): number;
    right(arg0: number): FloatLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): FloatLongPair;
    secondLong(): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatLongPair;
    valueLong(): number;
}