import type { DoubleLongPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleLongPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleLongMutablePair extends Object implements DoubleLongPair, Serializable {
    static of(paramarg0: number, paramarg1: number): DoubleLongMutablePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleLongPair;
    firstDouble(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleLongPair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleLongPair;
    left(arg0: number): DoubleLongMutablePair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleLongPair;
    right(arg0: number): DoubleLongMutablePair;
    rightLong(): number;
    second(): number;
    second(arg0: number): DoubleLongPair;
    secondLong(): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleLongPair;
    valueLong(): number;
}