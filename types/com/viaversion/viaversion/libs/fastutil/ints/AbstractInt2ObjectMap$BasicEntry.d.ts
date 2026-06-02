import type { Int2ObjectMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/ints/Int2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractInt2ObjectMap$BasicEntry<V extends Object | number | string | boolean> extends Object implements Int2ObjectMap$Entry<V> {
    constructor()
    constructor(arg0: number, arg1: V)
    constructor(arg0: number, arg1: V)
    key: number;
    value: V;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    getIntKey(): number;
    hashCode(): number;
    setValue(arg0: V): V;
    toString(): string;
}