import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ShortLongPair extends Pair<number, number>, Object{
    first(): number;
    first(arg0: number): Pair<number, number>;
    first(arg0: number): ShortLongPair;
    firstShort(): number;
    key(): number;
    key(arg0: number): Pair<number, number>;
    key(arg0: number): ShortLongPair;
    keyShort(): number;
    left(arg0: number): Pair<number, number>;
    left(): number;
    left(arg0: number): ShortLongPair;
    leftShort(): number;
    right(arg0: number): Pair<number, number>;
    right(): number;
    right(arg0: number): ShortLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): Pair<number, number>;
    second(arg0: number): ShortLongPair;
    secondLong(): number;
    value(): number;
    value(arg0: number): Pair<number, number>;
    value(arg0: number): ShortLongPair;
    valueLong(): number;
}