import type { SortedPair } from '../../../../../it/unimi/dsi/fastutil/SortedPair.d.ts'
import type { DoubleDoublePair } from '../../../../../it/unimi/dsi/fastutil/doubles/DoubleDoublePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DoubleDoubleSortedPair extends SortedPair<number>, DoubleDoublePair, Serializable, Object{
    contains(arg0: Object): boolean;
    contains(arg0: number): boolean;
    first(): number;
    first(arg0: number): DoubleDoublePair;
    firstDouble(): number;
    key(): number;
    key(arg0: number): DoubleDoublePair;
    keyDouble(): number;
    left(): number;
    left(arg0: number): DoubleDoublePair;
    right(): number;
    right(arg0: number): DoubleDoublePair;
    second(): number;
    second(arg0: number): DoubleDoublePair;
    secondDouble(): number;
    value(): number;
    value(arg0: number): DoubleDoublePair;
    valueDouble(): number;
}