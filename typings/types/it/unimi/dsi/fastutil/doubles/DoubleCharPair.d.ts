import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DoubleCharPair extends Pair<number, string>, Object{
    first(): number;
    first(arg0: number): Pair<number, string>;
    first(arg0: number): DoubleCharPair;
    firstDouble(): number;
    key(): number;
    key(arg0: number): Pair<number, string>;
    key(arg0: number): DoubleCharPair;
    keyDouble(): number;
    left(arg0: number): Pair<number, string>;
    left(): number;
    left(arg0: number): DoubleCharPair;
    leftDouble(): number;
    right(arg0: string): Pair<number, string>;
    right(): string;
    right(arg0: string): DoubleCharPair;
    rightChar(): string;
    second(): string;
    second(arg0: string): Pair<number, string>;
    second(arg0: string): DoubleCharPair;
    secondChar(): string;
    value(): string;
    value(arg0: string): Pair<number, string>;
    value(arg0: string): DoubleCharPair;
    valueChar(): string;
}