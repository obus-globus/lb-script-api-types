import type { DoubleLongPair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleLongPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleLongMutablePair extends Object implements DoubleLongPair, Serializable {
    static lexComparator(): (param0: DoubleLongPair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): DoubleLongMutablePair;
    static of(paramarg0: number, paramarg1: number): DoubleLongPair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleLongPair;
    first(arg0: number): DoubleLongPair;
    firstDouble(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleLongPair;
    key(arg0: number): DoubleLongPair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleLongPair;
    left(arg0: number): DoubleLongMutablePair;
    left(): number;
    left(arg0: number): DoubleLongPair;
    left(arg0: number): DoubleLongPair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleLongPair;
    right(arg0: number): DoubleLongMutablePair;
    right(): number;
    right(arg0: number): DoubleLongPair;
    right(arg0: number): DoubleLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): DoubleLongPair;
    second(arg0: number): DoubleLongPair;
    secondLong(): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleLongPair;
    value(arg0: number): DoubleLongPair;
    valueLong(): number;
}