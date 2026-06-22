import type { SortedPair } from '../../../../../it/unimi/dsi/fastutil/SortedPair.d.ts'
import type { ByteBytePair } from '../../../../../it/unimi/dsi/fastutil/bytes/ByteBytePair.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteByteSortedPair extends SortedPair<number>, ByteBytePair, Serializable, Object{
    contains(arg0: Object): boolean;
    contains(arg0: number): boolean;
    first(): number;
    first(arg0: number): ByteBytePair;
    firstByte(): number;
    key(): number;
    key(arg0: number): ByteBytePair;
    keyByte(): number;
    left(): number;
    left(arg0: number): ByteBytePair;
    leftByte(): number;
    right(): number;
    right(arg0: number): ByteBytePair;
    rightByte(): number;
    second(): number;
    second(arg0: number): ByteBytePair;
    secondByte(): number;
    value(): number;
    value(arg0: number): ByteBytePair;
    valueByte(): number;
}