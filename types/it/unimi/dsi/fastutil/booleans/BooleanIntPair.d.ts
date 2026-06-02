import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanIntPair extends Pair<boolean, number>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): boolean;
    first(arg0: boolean): BooleanIntPair;
    first(arg0: boolean): BooleanIntPair;
    firstBoolean(): boolean;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): boolean;
    key(arg0: boolean): BooleanIntPair;
    key(arg0: boolean): BooleanIntPair;
    keyBoolean(): boolean;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): boolean;
    left(arg0: boolean): BooleanIntPair;
    left(arg0: boolean): BooleanIntPair;
    leftBoolean(): boolean;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): number;
    right(arg0: number): BooleanIntPair;
    right(arg0: number): BooleanIntPair;
    rightInt(): number;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): number;
    second(arg0: number): BooleanIntPair;
    second(arg0: number): BooleanIntPair;
    secondInt(): number;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): number;
    value(arg0: number): BooleanIntPair;
    value(arg0: number): BooleanIntPair;
    valueInt(): number;
}