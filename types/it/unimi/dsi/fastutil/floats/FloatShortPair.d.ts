import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatShortPair extends Pair<number, number>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): number;
    first(arg0: number): FloatShortPair;
    first(arg0: number): FloatShortPair;
    firstFloat(): number;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): number;
    key(arg0: number): FloatShortPair;
    key(arg0: number): FloatShortPair;
    keyFloat(): number;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): number;
    left(arg0: number): FloatShortPair;
    left(arg0: number): FloatShortPair;
    leftFloat(): number;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): number;
    right(arg0: number): FloatShortPair;
    right(arg0: number): FloatShortPair;
    rightShort(): number;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): number;
    second(arg0: number): FloatShortPair;
    second(arg0: number): FloatShortPair;
    secondShort(): number;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): number;
    value(arg0: number): FloatShortPair;
    value(arg0: number): FloatShortPair;
    valueShort(): number;
}