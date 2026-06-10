import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface FloatLongPair extends Pair<number, number>, Object{
    first(): number;
    first(arg0: number): Pair<number, number>;
    first(arg0: number): FloatLongPair;
    firstFloat(): number;
    key(): number;
    key(arg0: number): Pair<number, number>;
    key(arg0: number): FloatLongPair;
    keyFloat(): number;
    left(arg0: number): Pair<number, number>;
    left(): number;
    left(arg0: number): FloatLongPair;
    leftFloat(): number;
    right(arg0: number): Pair<number, number>;
    right(): number;
    right(arg0: number): FloatLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): Pair<number, number>;
    second(arg0: number): FloatLongPair;
    secondLong(): number;
    value(): number;
    value(arg0: number): Pair<number, number>;
    value(arg0: number): FloatLongPair;
    valueLong(): number;
}