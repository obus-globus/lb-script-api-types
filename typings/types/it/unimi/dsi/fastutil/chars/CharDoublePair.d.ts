import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharDoublePair extends Pair<string, number>, Object{
    first(): string;
    first(arg0: string): Pair<string, number>;
    first(arg0: string): CharDoublePair;
    firstChar(): string;
    key(): string;
    key(arg0: string): Pair<string, number>;
    key(arg0: string): CharDoublePair;
    keyChar(): string;
    left(arg0: string): Pair<string, number>;
    left(): string;
    left(arg0: string): CharDoublePair;
    leftChar(): string;
    right(arg0: number): Pair<string, number>;
    right(): number;
    right(arg0: number): CharDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): Pair<string, number>;
    second(arg0: number): CharDoublePair;
    secondDouble(): number;
    value(): number;
    value(arg0: number): Pair<string, number>;
    value(arg0: number): CharDoublePair;
    valueDouble(): number;
}