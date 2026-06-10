import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatFloatPair extends Pair<number, number>, Object{
    first(): number;
    first(arg0: number): Pair<number, number>;
    first(arg0: number): FloatFloatPair;
    firstFloat(): number;
    key(): number;
    key(arg0: number): Pair<number, number>;
    key(arg0: number): FloatFloatPair;
    keyFloat(): number;
    left(arg0: number): Pair<number, number>;
    left(): number;
    left(arg0: number): FloatFloatPair;
    leftFloat(): number;
    right(arg0: number): Pair<number, number>;
    right(): number;
    right(arg0: number): FloatFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): Pair<number, number>;
    second(arg0: number): FloatFloatPair;
    secondFloat(): number;
    value(): number;
    value(arg0: number): Pair<number, number>;
    value(arg0: number): FloatFloatPair;
    valueFloat(): number;
}