import type { Long2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractLong2ReferenceMap$BasicEntry<V extends Object | number | string | boolean> extends Object implements Long2ReferenceMap$Entry<V> {
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