import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteDoublePair extends Pair<number, number>, Object{
    first(): number;
    first(arg0: number): Pair<number, number>;
    first(arg0: number): ByteDoublePair;
    firstByte(): number;
    key(): number;
    key(arg0: number): Pair<number, number>;
    key(arg0: number): ByteDoublePair;
    keyByte(): number;
    left(arg0: number): Pair<number, number>;
    left(): number;
    left(arg0: number): ByteDoublePair;
    leftByte(): number;
    right(arg0: number): Pair<number, number>;
    right(): number;
    right(arg0: number): ByteDoublePair;
    rightDouble(): number;
    second(): number;
    second(arg0: number): Pair<number, number>;
    second(arg0: number): ByteDoublePair;
    secondDouble(): number;
    value(): number;
    value(arg0: number): Pair<number, number>;
    value(arg0: number): ByteDoublePair;
    valueDouble(): number;
}