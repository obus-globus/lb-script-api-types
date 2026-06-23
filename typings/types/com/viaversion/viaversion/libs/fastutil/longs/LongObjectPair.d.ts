import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface LongObjectPair<V extends unknown> extends Pair<number, V>, Object{
    first(): number;
    first(arg0: number): Pair<number, V>;
    first(arg0: number): LongObjectPair<V>;
    firstLong(): number;
    key(): number;
    key(arg0: number): Pair<number, V>;
    key(arg0: number): LongObjectPair<V>;
    keyLong(): number;
    left(arg0: number): Pair<number, V>;
    left(): number;
    left(arg0: number): LongObjectPair<V>;
    leftLong(): number;
    right(arg0: V): Pair<number, V>;
    second(): V;
    second(arg0: V): Pair<number, V>;
    value(): V;
    value(arg0: V): Pair<number, V>;
}