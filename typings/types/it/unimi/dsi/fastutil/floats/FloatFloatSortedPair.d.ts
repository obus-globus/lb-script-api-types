import type { SortedPair } from '../../../../../it/unimi/dsi/fastutil/SortedPair.d.ts'
import type { FloatFloatPair } from '../../../../../it/unimi/dsi/fastutil/floats/FloatFloatPair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatFloatSortedPair extends SortedPair<number>, FloatFloatPair, Serializable, Object{
    contains(arg0: Object): boolean;
    contains(arg0: number): boolean;
    first(): number;
    first(arg0: number): FloatFloatPair;
    firstFloat(): number;
    key(): number;
    key(arg0: number): FloatFloatPair;
    keyFloat(): number;
    left(): number;
    left(arg0: number): FloatFloatPair;
    right(): number;
    right(arg0: number): FloatFloatPair;
    second(): number;
    second(arg0: number): FloatFloatPair;
    secondFloat(): number;
    value(): number;
    value(arg0: number): FloatFloatPair;
    valueFloat(): number;
}