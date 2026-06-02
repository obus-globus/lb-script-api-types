import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LongFloatPair extends Pair<number, number>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): number;
    first(arg0: number): LongFloatPair;
    first(arg0: number): LongFloatPair;
    firstLong(): number;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): number;
    key(arg0: number): LongFloatPair;
    key(arg0: number): LongFloatPair;
    keyLong(): number;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): number;
    left(arg0: number): LongFloatPair;
    left(arg0: number): LongFloatPair;
    leftLong(): number;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): number;
    right(arg0: number): LongFloatPair;
    right(arg0: number): LongFloatPair;
    rightFloat(): number;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): number;
    second(arg0: number): LongFloatPair;
    second(arg0: number): LongFloatPair;
    secondFloat(): number;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): number;
    value(arg0: number): LongFloatPair;
    value(arg0: number): LongFloatPair;
    valueFloat(): number;
}