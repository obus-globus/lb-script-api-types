import type { Pair } from '../../../../../it/unimi/dsi/fastutil/Pair.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ReferenceBooleanPair<K extends Object | number | string | boolean> extends Pair<K, boolean>, Object{
    first(): K;
    first(arg0: K): Pair<K, boolean>;
    key(): K;
    key(arg0: K): Pair<K, boolean>;
    left(arg0: K): Pair<K, boolean>;
    right(arg0: boolean): Pair<K, boolean>;
    right(): boolean;
    right(arg0: boolean): ReferenceBooleanPair<K>;
    rightBoolean(): boolean;
    second(): boolean;
    second(arg0: boolean): Pair<K, boolean>;
    second(arg0: boolean): ReferenceBooleanPair<K>;
    secondBoolean(): boolean;
    value(): boolean;
    value(arg0: boolean): Pair<K, boolean>;
    value(arg0: boolean): ReferenceBooleanPair<K>;
    valueBoolean(): boolean;
}