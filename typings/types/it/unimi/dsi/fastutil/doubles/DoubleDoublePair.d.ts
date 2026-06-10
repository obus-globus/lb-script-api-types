import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DoubleDoublePair extends Pair<number, number>, Object{
    first(): number;
    first(arg0: number): Pair<number, number>;
    first(arg0: number): DoubleDoublePair;
    firstDouble(): number;
    key(): number;
    key(arg0: number): Pair<number, number>;
    key(arg0: number): DoubleDoublePair;
    keyDouble(): number;
    left(arg0: number): Pair<number, number>;
    left(): number;
    left(arg0: number): DoubleDoublePair;
    leftDouble(): number;
    right(arg0: number): Pair<number, number>;
    right(): number;
    right(arg0: number): DoubleDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): Pair<number, number>;
    second(arg0: number): DoubleDoublePair;
    secondDouble(): number;
    value(): number;
    value(arg0: number): Pair<number, number>;
    value(arg0: number): DoubleDoublePair;
    valueDouble(): number;
}