import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanShortPair extends Pair<boolean, number>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): boolean;
    first(arg0: boolean): BooleanShortPair;
    first(arg0: boolean): BooleanShortPair;
    firstBoolean(): boolean;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): boolean;
    key(arg0: boolean): BooleanShortPair;
    key(arg0: boolean): BooleanShortPair;
    keyBoolean(): boolean;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): boolean;
    left(arg0: boolean): BooleanShortPair;
    left(arg0: boolean): BooleanShortPair;
    leftBoolean(): boolean;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): number;
    right(arg0: number): BooleanShortPair;
    right(arg0: number): BooleanShortPair;
    rightShort(): number;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): number;
    second(arg0: number): BooleanShortPair;
    second(arg0: number): BooleanShortPair;
    secondShort(): number;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): number;
    value(arg0: number): BooleanShortPair;
    value(arg0: number): BooleanShortPair;
    valueShort(): number;
}