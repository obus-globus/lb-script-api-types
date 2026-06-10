import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteBytePair extends Pair<number, number>, Object{
    first(): number;
    first(arg0: number): Pair<number, number>;
    first(arg0: number): ByteBytePair;
    firstByte(): number;
    key(): number;
    key(arg0: number): Pair<number, number>;
    key(arg0: number): ByteBytePair;
    keyByte(): number;
    left(arg0: number): Pair<number, number>;
    left(): number;
    left(arg0: number): ByteBytePair;
    leftByte(): number;
    right(arg0: number): Pair<number, number>;
    right(): number;
    right(arg0: number): ByteBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): Pair<number, number>;
    second(arg0: number): ByteBytePair;
    secondByte(): number;
    value(): number;
    value(arg0: number): Pair<number, number>;
    value(arg0: number): ByteBytePair;
    valueByte(): number;
}