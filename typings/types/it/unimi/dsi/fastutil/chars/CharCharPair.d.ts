import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharCharPair extends Pair<string, string>, Object{
    first(): string;
    first(arg0: string): Pair<string, string>;
    first(arg0: string): CharCharPair;
    firstChar(): string;
    key(): string;
    key(arg0: string): Pair<string, string>;
    key(arg0: string): CharCharPair;
    keyChar(): string;
    left(arg0: string): Pair<string, string>;
    left(): string;
    left(arg0: string): CharCharPair;
    leftChar(): string;
    right(arg0: string): Pair<string, string>;
    right(): string;
    right(arg0: string): CharCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): Pair<string, string>;
    second(arg0: string): CharCharPair;
    secondChar(): string;
    value(): string;
    value(arg0: string): Pair<string, string>;
    value(arg0: string): CharCharPair;
    valueChar(): string;
}