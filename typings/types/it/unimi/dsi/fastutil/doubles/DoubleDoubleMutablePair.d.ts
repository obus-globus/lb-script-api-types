import type { DoubleDoublePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Comparator } from '../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DoubleDoubleMutablePair extends Object implements DoubleDoublePair, Serializable {
    static lexComparator(): (param0: DoubleDoublePair) => kotlin.Boolean;
    static of(paramarg0: number, paramarg1: number): DoubleDoubleMutablePair;
    static of(paramarg0: number, paramarg1: number): DoubleDoublePair;
    constructor(arg0: number, arg1: number)
    // private left: number;
    // private right: number;
    equals(arg0: Object | null): boolean;
    first(): number;
    first(arg0: number): DoubleDoublePair;
    firstDouble(): number;
    hashCode(): number;
    key(): number;
    key(arg0: number): DoubleDoublePair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleDoublePair;
    left(arg0: number): DoubleDoubleMutablePair;
    leftDouble(): number;
    right(): number;
    right(arg0: number): DoubleDoublePair;
    right(arg0: number): DoubleDoubleMutablePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): DoubleDoublePair;
    secondDouble(): number;
    toString(): string;
    value(): number;
    value(arg0: number): DoubleDoublePair;
    valueDouble(): number;
}