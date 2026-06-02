import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IntBooleanPair extends Pair<number, boolean>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): number;
    first(arg0: number): IntBooleanPair;
    first(arg0: number): IntBooleanPair;
    firstInt(): number;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): number;
    key(arg0: number): IntBooleanPair;
    key(arg0: number): IntBooleanPair;
    keyInt(): number;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): number;
    left(arg0: number): IntBooleanPair;
    left(arg0: number): IntBooleanPair;
    leftInt(): number;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): boolean;
    right(arg0: boolean): IntBooleanPair;
    right(arg0: boolean): IntBooleanPair;
    rightBoolean(): boolean;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): boolean;
    second(arg0: boolean): IntBooleanPair;
    second(arg0: boolean): IntBooleanPair;
    secondBoolean(): boolean;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): boolean;
    value(arg0: boolean): IntBooleanPair;
    value(arg0: boolean): IntBooleanPair;
    valueBoolean(): boolean;
}