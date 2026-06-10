import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CharLongPair extends Pair<string, number>, Object{
    first(): string;
    first(arg0: string): Pair<string, number>;
    first(arg0: string): CharLongPair;
    firstChar(): string;
    key(): string;
    key(arg0: string): Pair<string, number>;
    key(arg0: string): CharLongPair;
    keyChar(): string;
    left(arg0: string): Pair<string, number>;
    left(): string;
    left(arg0: string): CharLongPair;
    leftChar(): string;
    right(arg0: number): Pair<string, number>;
    right(): number;
    right(arg0: number): CharLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): Pair<string, number>;
    second(arg0: number): CharLongPair;
    secondLong(): number;
    value(): number;
    value(arg0: number): Pair<string, number>;
    value(arg0: number): CharLongPair;
    valueLong(): number;
}