import type { Pair } from '../../../../../../com/viaversion/viaversion/libs/fastutil/Pair.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ObjectIntPair<K extends Object | number | string | boolean> extends Pair<K, number>, Object{
    first<L extends Object | number | string | boolean>(): L;
    first<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    key<L extends Object | number | string | boolean>(): L;
    key<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    left<L extends Object | number | string | boolean>(arg0: L): Pair<L, R>;
    right<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    right(): number;
    right(arg0: number): ObjectIntPair<K>;
    right(arg0: number): ObjectIntPair<K>;
    rightInt(): number;
    second<R extends Object | number | string | boolean>(): R;
    second<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    second(): number;
    second(arg0: number): ObjectIntPair<K>;
    second(arg0: number): ObjectIntPair<K>;
    secondInt(): number;
    value<R extends Object | number | string | boolean>(): R;
    value<R extends Object | number | string | boolean>(arg0: R): Pair<L, R>;
    value(): number;
    value(arg0: number): ObjectIntPair<K>;
    value(arg0: number): ObjectIntPair<K>;
    valueInt(): number;
}