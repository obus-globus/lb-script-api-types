import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IntLongPair extends Pair<number, number>, Object{
    first(): number;
    first(arg0: number): Pair<number, number>;
    first(arg0: number): IntLongPair;
    firstInt(): number;
    key(): number;
    key(arg0: number): Pair<number, number>;
    key(arg0: number): IntLongPair;
    keyInt(): number;
    left(arg0: number): Pair<number, number>;
    left(): number;
    left(arg0: number): IntLongPair;
    leftInt(): number;
    right(arg0: number): Pair<number, number>;
    right(): number;
    right(arg0: number): IntLongPair;
    rightLong(): number;
    second(): number;
    second(arg0: number): Pair<number, number>;
    second(arg0: number): IntLongPair;
    secondLong(): number;
    value(): number;
    value(arg0: number): Pair<number, number>;
    value(arg0: number): IntLongPair;
    valueLong(): number;
}