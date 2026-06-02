import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ObjectCharPair<K extends Object | number | string | boolean> extends Pair<K, string>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): string;
    right(arg0: string): ObjectCharPair<K>;
    right(arg0: string): ObjectCharPair<K>;
    rightChar(): string;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): string;
    second(arg0: string): ObjectCharPair<K>;
    second(arg0: string): ObjectCharPair<K>;
    secondChar(): string;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): string;
    value(arg0: string): ObjectCharPair<K>;
    value(arg0: string): ObjectCharPair<K>;
    valueChar(): string;
}