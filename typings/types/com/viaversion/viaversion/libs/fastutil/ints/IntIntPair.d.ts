import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IntIntPair extends Pair<number, number>, Object{
    first(): number;
    first(arg0: number): Pair<number, number>;
    first(arg0: number): IntIntPair;
    firstInt(): number;
    key(): number;
    key(arg0: number): Pair<number, number>;
    key(arg0: number): IntIntPair;
    keyInt(): number;
    left(arg0: number): Pair<number, number>;
    left(): number;
    left(arg0: number): IntIntPair;
    leftInt(): number;
    right(arg0: number): Pair<number, number>;
    right(): number;
    right(arg0: number): IntIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): Pair<number, number>;
    second(arg0: number): IntIntPair;
    secondInt(): number;
    value(): number;
    value(arg0: number): Pair<number, number>;
    value(arg0: number): IntIntPair;
    valueInt(): number;
}