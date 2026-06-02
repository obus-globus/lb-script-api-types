import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharCharPair extends Pair<string, string>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): string;
    first(arg0: string): CharCharPair;
    first(arg0: string): CharCharPair;
    firstChar(): string;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): string;
    key(arg0: string): CharCharPair;
    key(arg0: string): CharCharPair;
    keyChar(): string;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): string;
    left(arg0: string): CharCharPair;
    left(arg0: string): CharCharPair;
    leftChar(): string;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): string;
    right(arg0: string): CharCharPair;
    right(arg0: string): CharCharPair;
    rightChar(): string;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): string;
    second(arg0: string): CharCharPair;
    second(arg0: string): CharCharPair;
    secondChar(): string;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): string;
    value(arg0: string): CharCharPair;
    value(arg0: string): CharCharPair;
    valueChar(): string;
}