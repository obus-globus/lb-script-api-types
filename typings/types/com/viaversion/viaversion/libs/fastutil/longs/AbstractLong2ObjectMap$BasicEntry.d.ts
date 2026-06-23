import type { Long2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/longs/Long2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractLong2ObjectMap$BasicEntry<V extends unknown> extends Object implements Long2ObjectMap$Entry<V> {
    constructor()
    constructor(arg0: number, arg1: V)
    constructor(arg0: number, arg1: V)
    key: number;
    value: V;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    getLongKey(): number;
    hashCode(): number;
    setValue(arg0: V): V;
    toString(): string;
}