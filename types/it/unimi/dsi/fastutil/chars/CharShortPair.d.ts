import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharShortPair extends Pair<string, number>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): string;
    first(arg0: string): CharShortPair;
    first(arg0: string): CharShortPair;
    firstChar(): string;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): string;
    key(arg0: string): CharShortPair;
    key(arg0: string): CharShortPair;
    keyChar(): string;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): string;
    left(arg0: string): CharShortPair;
    left(arg0: string): CharShortPair;
    leftChar(): string;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): number;
    right(arg0: number): CharShortPair;
    right(arg0: number): CharShortPair;
    rightShort(): number;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): number;
    second(arg0: number): CharShortPair;
    second(arg0: number): CharShortPair;
    secondShort(): number;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): number;
    value(arg0: number): CharShortPair;
    value(arg0: number): CharShortPair;
    valueShort(): number;
}