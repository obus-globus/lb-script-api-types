import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatCharPair extends Pair<number, string>, Object{
    first(): number;
    first(arg0: number): Pair<number, string>;
    first(arg0: number): FloatCharPair;
    firstFloat(): number;
    key(): number;
    key(arg0: number): Pair<number, string>;
    key(arg0: number): FloatCharPair;
    keyFloat(): number;
    left(arg0: number): Pair<number, string>;
    left(): number;
    left(arg0: number): FloatCharPair;
    leftFloat(): number;
    right(arg0: string): Pair<number, string>;
    right(): string;
    right(arg0: string): FloatCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): Pair<number, string>;
    second(arg0: string): FloatCharPair;
    secondChar(): string;
    value(): string;
    value(arg0: string): Pair<number, string>;
    value(arg0: string): FloatCharPair;
    valueChar(): string;
}