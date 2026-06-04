import type { SortedPair } from '../../../../../it/unimi/dsi/fastutil/SortedPair.d.ts'
import type { LongLongPair } from '../../../../../it/unimi/dsi/fastutil/longs/LongLongPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LongLongSortedPair extends SortedPair<number>, LongLongPair, Serializable, Object{
    contains(arg0: Object): boolean;
    contains(arg0: number): boolean;
    first(): number;
    first(arg0: number): LongLongPair;
    firstLong(): number;
    key(): number;
    key(arg0: number): LongLongPair;
    keyLong(): number;
    left(): number;
    left(arg0: number): LongLongPair;
    right(): number;
    right(arg0: number): LongLongPair;
    second(): number;
    second(arg0: number): LongLongPair;
    secondLong(): number;
    value(): number;
    value(arg0: number): LongLongPair;
    valueLong(): number;
}