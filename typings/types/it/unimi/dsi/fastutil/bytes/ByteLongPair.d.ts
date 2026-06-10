import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteLongPair extends Pair<number, number>, Object{
    first(): number;
    first(arg0: number): Pair<number, number>;
    first(arg0: number): ByteLongPair;
    firstByte(): number;
    key(): number;
    key(arg0: number): Pair<number, number>;
    key(arg0: number): ByteLongPair;
    keyByte(): number;
    left(arg0: number): Pair<number, number>;
    left(): number;
    left(arg0: number): ByteLongPair;
    leftByte(): number;
    right(arg0: number): Pair<number, number>;
    right(): number;
    right(arg0: number): ByteLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): Pair<number, number>;
    second(arg0: number): ByteLongPair;
    secondLong(): number;
    value(): number;
    value(arg0: number): Pair<number, number>;
    value(arg0: number): ByteLongPair;
    valueLong(): number;
}