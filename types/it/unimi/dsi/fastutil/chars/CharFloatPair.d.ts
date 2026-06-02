import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharFloatPair extends Pair<string, number>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    first(): string;
    first(arg0: string): CharFloatPair;
    first(arg0: string): CharFloatPair;
    firstChar(): string;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key(): string;
    key(arg0: string): CharFloatPair;
    key(arg0: string): CharFloatPair;
    keyChar(): string;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left(): string;
    left(arg0: string): CharFloatPair;
    left(arg0: string): CharFloatPair;
    leftChar(): string;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): number;
    right(arg0: number): CharFloatPair;
    right(arg0: number): CharFloatPair;
    rightFloat(): number;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): number;
    second(arg0: number): CharFloatPair;
    second(arg0: number): CharFloatPair;
    secondFloat(): number;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): number;
    value(arg0: number): CharFloatPair;
    value(arg0: number): CharFloatPair;
    valueFloat(): number;
}