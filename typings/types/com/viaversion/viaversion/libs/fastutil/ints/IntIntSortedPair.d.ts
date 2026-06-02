import type { SortedPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/SortedPair.d.ts'
import type { IntIntPair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/IntIntPair.d.ts'
import type { Serializable } from '../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IntIntSortedPair extends SortedPair<number>, IntIntPair, Serializable, Object{
    contains(arg0: Object): boolean;
    contains(arg0: Object): boolean;
    contains(arg0: number): boolean;
    first(): number;
    first(arg0: number): IntIntPair;
    first(arg0: number): IntIntPair;
    firstInt(): number;
    key(): number;
    key(arg0: number): IntIntPair;
    key(arg0: number): IntIntPair;
    keyInt(): number;
    left(): number;
    left(arg0: number): IntIntPair;
    left(arg0: number): IntIntPair;
    right(): number;
    right(arg0: number): IntIntPair;
    right(arg0: number): IntIntPair;
    second(): number;
    second(arg0: number): IntIntPair;
    second(arg0: number): IntIntPair;
    secondInt(): number;
    value(): number;
    value(arg0: number): IntIntPair;
    value(arg0: number): IntIntPair;
    valueInt(): number;
}