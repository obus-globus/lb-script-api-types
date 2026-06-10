import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharFloatPair extends Pair<string, number>, Object{
    first(): string;
    first(arg0: string): Pair<string, number>;
    first(arg0: string): CharFloatPair;
    firstChar(): string;
    key(): string;
    key(arg0: string): Pair<string, number>;
    key(arg0: string): CharFloatPair;
    keyChar(): string;
    left(arg0: string): Pair<string, number>;
    left(): string;
    left(arg0: string): CharFloatPair;
    leftChar(): string;
    right(arg0: number): Pair<string, number>;
    right(): number;
    right(arg0: number): CharFloatPair;
    rightFloat(): number;
    second(): number;
    second(arg0: number): Pair<string, number>;
    second(arg0: number): CharFloatPair;
    secondFloat(): number;
    value(): number;
    value(arg0: number): Pair<string, number>;
    value(arg0: number): CharFloatPair;
    valueFloat(): number;
}