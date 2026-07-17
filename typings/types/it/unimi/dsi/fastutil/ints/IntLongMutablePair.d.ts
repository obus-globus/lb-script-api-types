import type { IntLongPair } from '../../../../../it/unimi/dsi/fastutil/ints/IntLongPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class IntLongMutablePair extends Object implements IntLongPair, Serializable {
    static of(paramarg0: number, paramarg1: number): IntLongMutablePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): IntLongPair;
    firstInt(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): IntLongPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntLongPair;
    left(arg0: number): IntLongMutablePair;
    leftInt(): number;
    right(): number;
    right(arg0: number): IntLongPair;
    right(arg0: number): IntLongMutablePair;
    rightLong(): number;
    second(): number;
    second(arg0: number): IntLongPair;
    secondLong(): number;
    toString(): string;
    value(): number;
    value(arg0: number): IntLongPair;
    valueLong(): number;
}