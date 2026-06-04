import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ShortCharPair extends Pair<number, string>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): number;
    first(arg0: number): ShortCharPair;
    firstShort(): number;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): number;
    key(arg0: number): ShortCharPair;
    keyShort(): number;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): number;
    left(arg0: number): ShortCharPair;
    leftShort(): number;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): string;
    right(arg0: string): ShortCharPair;
    rightChar(): string;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): string;
    second(arg0: string): ShortCharPair;
    secondChar(): string;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): string;
    value(arg0: string): ShortCharPair;
    valueChar(): string;
}