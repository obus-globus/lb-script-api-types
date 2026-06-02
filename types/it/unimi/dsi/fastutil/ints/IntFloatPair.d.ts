import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IntFloatPair extends Pair<number, number>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): number;
    first(arg0: number): IntFloatPair;
    first(arg0: number): IntFloatPair;
    firstInt(): number;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): number;
    key(arg0: number): IntFloatPair;
    key(arg0: number): IntFloatPair;
    keyInt(): number;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): number;
    left(arg0: number): IntFloatPair;
    left(arg0: number): IntFloatPair;
    leftInt(): number;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): number;
    right(arg0: number): IntFloatPair;
    right(arg0: number): IntFloatPair;
    rightFloat(): number;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): number;
    second(arg0: number): IntFloatPair;
    second(arg0: number): IntFloatPair;
    secondFloat(): number;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): number;
    value(arg0: number): IntFloatPair;
    value(arg0: number): IntFloatPair;
    valueFloat(): number;
}