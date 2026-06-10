import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DoubleIntPair extends Pair<number, number>, Object{
    first(): number;
    first(arg0: number): Pair<number, number>;
    first(arg0: number): DoubleIntPair;
    firstDouble(): number;
    key(): number;
    key(arg0: number): Pair<number, number>;
    key(arg0: number): DoubleIntPair;
    keyDouble(): number;
    left(arg0: number): Pair<number, number>;
    left(): number;
    left(arg0: number): DoubleIntPair;
    leftDouble(): number;
    right(arg0: number): Pair<number, number>;
    right(): number;
    right(arg0: number): DoubleIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): Pair<number, number>;
    second(arg0: number): DoubleIntPair;
    secondInt(): number;
    value(): number;
    value(arg0: number): Pair<number, number>;
    value(arg0: number): DoubleIntPair;
    valueInt(): number;
}