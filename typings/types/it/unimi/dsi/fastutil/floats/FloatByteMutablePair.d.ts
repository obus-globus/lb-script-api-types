import type { FloatBytePair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FloatByteMutablePair extends Object implements FloatBytePair, Serializable {
    static of(paramarg0: number, paramarg1: number): FloatByteMutablePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): FloatBytePair;
    firstFloat(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): FloatBytePair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatBytePair;
    left(arg0: number): FloatByteMutablePair;
    leftFloat(): number;
    right(): number;
    right(arg0: number): FloatBytePair;
    right(arg0: number): FloatByteMutablePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): FloatBytePair;
    secondByte(): number;
    toString(): string;
    value(): number;
    value(arg0: number): FloatBytePair;
    valueByte(): number;
}