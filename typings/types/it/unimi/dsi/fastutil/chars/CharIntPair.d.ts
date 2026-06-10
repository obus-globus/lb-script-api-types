import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharIntPair extends Pair<string, number>, Object{
    first(): string;
    first(arg0: string): Pair<string, number>;
    first(arg0: string): CharIntPair;
    firstChar(): string;
    key(): string;
    key(arg0: string): Pair<string, number>;
    key(arg0: string): CharIntPair;
    keyChar(): string;
    left(arg0: string): Pair<string, number>;
    left(): string;
    left(arg0: string): CharIntPair;
    leftChar(): string;
    right(arg0: number): Pair<string, number>;
    right(): number;
    right(arg0: number): CharIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): Pair<string, number>;
    second(arg0: number): CharIntPair;
    secondInt(): number;
    value(): number;
    value(arg0: number): Pair<string, number>;
    value(arg0: number): CharIntPair;
    valueInt(): number;
}