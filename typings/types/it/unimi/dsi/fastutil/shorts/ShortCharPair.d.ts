import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ShortCharPair extends Pair<number, string>, Object{
    first(): number;
    first(arg0: number): Pair<number, string>;
    first(arg0: number): ShortCharPair;
    firstShort(): number;
    key(): number;
    key(arg0: number): Pair<number, string>;
    key(arg0: number): ShortCharPair;
    keyShort(): number;
    left(arg0: number): Pair<number, string>;
    left(): number;
    left(arg0: number): ShortCharPair;
    leftShort(): number;
    right(arg0: string): Pair<number, string>;
    right(): string;
    right(arg0: string): ShortCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): Pair<number, string>;
    second(arg0: string): ShortCharPair;
    secondChar(): string;
    value(): string;
    value(arg0: string): Pair<number, string>;
    value(arg0: string): ShortCharPair;
    valueChar(): string;
}