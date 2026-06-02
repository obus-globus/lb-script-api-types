import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharDoublePair extends Pair<string, number>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): string;
    first(arg0: string): CharDoublePair;
    first(arg0: string): CharDoublePair;
    firstChar(): string;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): string;
    key(arg0: string): CharDoublePair;
    key(arg0: string): CharDoublePair;
    keyChar(): string;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): string;
    left(arg0: string): CharDoublePair;
    left(arg0: string): CharDoublePair;
    leftChar(): string;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): number;
    right(arg0: number): CharDoublePair;
    right(arg0: number): CharDoublePair;
    rightDouble(): number;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): number;
    second(arg0: number): CharDoublePair;
    second(arg0: number): CharDoublePair;
    secondDouble(): number;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): number;
    value(arg0: number): CharDoublePair;
    value(arg0: number): CharDoublePair;
    valueDouble(): number;
}