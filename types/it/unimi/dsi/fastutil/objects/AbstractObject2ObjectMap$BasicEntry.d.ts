import type { Object2ObjectMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ObjectMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractObject2ObjectMap$BasicEntry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object implements Object2ObjectMap$Entry<K, V> {
    constructor()
    constructor(arg0: K, arg1: V)
    key: K;
    readonly key: K;
    value: V;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    setValue(arg0: V): V;
    toString(): string;
}