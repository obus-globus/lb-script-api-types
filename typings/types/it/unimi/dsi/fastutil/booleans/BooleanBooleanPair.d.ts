import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanBooleanPair extends Pair<boolean, boolean>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): boolean;
    first(arg0: boolean): BooleanBooleanPair;
    firstBoolean(): boolean;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): boolean;
    key(arg0: boolean): BooleanBooleanPair;
    keyBoolean(): boolean;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): boolean;
    left(arg0: boolean): BooleanBooleanPair;
    leftBoolean(): boolean;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): boolean;
    right(arg0: boolean): BooleanBooleanPair;
    rightBoolean(): boolean;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): boolean;
    second(arg0: boolean): BooleanBooleanPair;
    secondBoolean(): boolean;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): boolean;
    value(arg0: boolean): BooleanBooleanPair;
    valueBoolean(): boolean;
}