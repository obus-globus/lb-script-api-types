import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatBooleanPair extends Pair<number, boolean>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): number;
    first(arg0: number): FloatBooleanPair;
    first(arg0: number): FloatBooleanPair;
    firstFloat(): number;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): number;
    key(arg0: number): FloatBooleanPair;
    key(arg0: number): FloatBooleanPair;
    keyFloat(): number;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): number;
    left(arg0: number): FloatBooleanPair;
    left(arg0: number): FloatBooleanPair;
    leftFloat(): number;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): boolean;
    right(arg0: boolean): FloatBooleanPair;
    right(arg0: boolean): FloatBooleanPair;
    rightBoolean(): boolean;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): boolean;
    second(arg0: boolean): FloatBooleanPair;
    second(arg0: boolean): FloatBooleanPair;
    secondBoolean(): boolean;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): boolean;
    value(arg0: boolean): FloatBooleanPair;
    value(arg0: boolean): FloatBooleanPair;
    valueBoolean(): boolean;
}