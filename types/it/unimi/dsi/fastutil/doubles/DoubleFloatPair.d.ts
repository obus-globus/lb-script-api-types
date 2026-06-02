import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DoubleFloatPair extends Pair<number, number>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): number;
    first(arg0: number): DoubleFloatPair;
    first(arg0: number): DoubleFloatPair;
    firstDouble(): number;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): number;
    key(arg0: number): DoubleFloatPair;
    key(arg0: number): DoubleFloatPair;
    keyDouble(): number;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): number;
    left(arg0: number): DoubleFloatPair;
    left(arg0: number): DoubleFloatPair;
    leftDouble(): number;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): number;
    right(arg0: number): DoubleFloatPair;
    right(arg0: number): DoubleFloatPair;
    rightFloat(): number;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): number;
    second(arg0: number): DoubleFloatPair;
    second(arg0: number): DoubleFloatPair;
    secondFloat(): number;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): number;
    value(arg0: number): DoubleFloatPair;
    value(arg0: number): DoubleFloatPair;
    valueFloat(): number;
}