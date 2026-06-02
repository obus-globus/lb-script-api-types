import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanFloatPair extends Pair<boolean, number>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): boolean;
    first(arg0: boolean): BooleanFloatPair;
    first(arg0: boolean): BooleanFloatPair;
    firstBoolean(): boolean;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): boolean;
    key(arg0: boolean): BooleanFloatPair;
    key(arg0: boolean): BooleanFloatPair;
    keyBoolean(): boolean;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): boolean;
    left(arg0: boolean): BooleanFloatPair;
    left(arg0: boolean): BooleanFloatPair;
    leftBoolean(): boolean;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): number;
    right(arg0: number): BooleanFloatPair;
    right(arg0: number): BooleanFloatPair;
    rightFloat(): number;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): number;
    second(arg0: number): BooleanFloatPair;
    second(arg0: number): BooleanFloatPair;
    secondFloat(): number;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): number;
    value(arg0: number): BooleanFloatPair;
    value(arg0: number): BooleanFloatPair;
    valueFloat(): number;
}