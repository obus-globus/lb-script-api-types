import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DoubleShortPair extends Pair<number, number>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): number;
    first(arg0: number): DoubleShortPair;
    first(arg0: number): DoubleShortPair;
    firstDouble(): number;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): number;
    key(arg0: number): DoubleShortPair;
    key(arg0: number): DoubleShortPair;
    keyDouble(): number;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): number;
    left(arg0: number): DoubleShortPair;
    left(arg0: number): DoubleShortPair;
    leftDouble(): number;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): number;
    right(arg0: number): DoubleShortPair;
    right(arg0: number): DoubleShortPair;
    rightShort(): number;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): number;
    second(arg0: number): DoubleShortPair;
    second(arg0: number): DoubleShortPair;
    secondShort(): number;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): number;
    value(arg0: number): DoubleShortPair;
    value(arg0: number): DoubleShortPair;
    valueShort(): number;
}