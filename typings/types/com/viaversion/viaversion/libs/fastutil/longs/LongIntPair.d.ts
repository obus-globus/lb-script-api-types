import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface LongIntPair extends Pair<number, number>, Object{
    first(): number;
    first(arg0: number): Pair<number, number>;
    first(arg0: number): LongIntPair;
    firstLong(): number;
    key(): number;
    key(arg0: number): Pair<number, number>;
    key(arg0: number): LongIntPair;
    keyLong(): number;
    left(arg0: number): Pair<number, number>;
    left(): number;
    left(arg0: number): LongIntPair;
    leftLong(): number;
    right(arg0: number): Pair<number, number>;
    right(): number;
    right(arg0: number): LongIntPair;
    rightInt(): number;
    second(): number;
    second(arg0: number): Pair<number, number>;
    second(arg0: number): LongIntPair;
    secondInt(): number;
    value(): number;
    value(arg0: number): Pair<number, number>;
    value(arg0: number): LongIntPair;
    valueInt(): number;
}