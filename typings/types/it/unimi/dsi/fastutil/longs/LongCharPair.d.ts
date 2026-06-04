import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface LongCharPair extends Pair<number, string>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): number;
    first(arg0: number): LongCharPair;
    firstLong(): number;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): number;
    key(arg0: number): LongCharPair;
    keyLong(): number;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): number;
    left(arg0: number): LongCharPair;
    leftLong(): number;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): string;
    right(arg0: string): LongCharPair;
    rightChar(): string;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): string;
    second(arg0: string): LongCharPair;
    secondChar(): string;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): string;
    value(arg0: string): LongCharPair;
    valueChar(): string;
}