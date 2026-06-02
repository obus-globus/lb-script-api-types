import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteBooleanPair extends Pair<number, boolean>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): number;
    first(arg0: number): ByteBooleanPair;
    first(arg0: number): ByteBooleanPair;
    firstByte(): number;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): number;
    key(arg0: number): ByteBooleanPair;
    key(arg0: number): ByteBooleanPair;
    keyByte(): number;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): number;
    left(arg0: number): ByteBooleanPair;
    left(arg0: number): ByteBooleanPair;
    leftByte(): number;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): boolean;
    right(arg0: boolean): ByteBooleanPair;
    right(arg0: boolean): ByteBooleanPair;
    rightBoolean(): boolean;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): boolean;
    second(arg0: boolean): ByteBooleanPair;
    second(arg0: boolean): ByteBooleanPair;
    secondBoolean(): boolean;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): boolean;
    value(arg0: boolean): ByteBooleanPair;
    value(arg0: boolean): ByteBooleanPair;
    valueBoolean(): boolean;
}