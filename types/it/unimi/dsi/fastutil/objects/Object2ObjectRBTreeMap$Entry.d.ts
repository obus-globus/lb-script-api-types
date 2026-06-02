import type { AbstractObject2ObjectMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2ObjectMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2ObjectRBTreeMap$Entry<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends AbstractObject2ObjectMap$BasicEntry<K, V> implements Cloneable {
    constructor()
    constructor(arg0: K, arg1: V)
    // private info: number;
    // private left: Object2ObjectRBTreeMap$Entry<K, V>;
    // private right: Object2ObjectRBTreeMap$Entry<K, V>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Object2ObjectRBTreeMap$Entry<K, V>;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Object2ObjectRBTreeMap$Entry<K, V>;
    left(arg0: Object2ObjectRBTreeMap$Entry<K, V>): void;
    next(): Object2ObjectRBTreeMap$Entry<K, V>;
    pred(): boolean;
    pred(arg0: Object2ObjectRBTreeMap$Entry<K, V>): void;
    pred(arg0: boolean): void;
    prev(): Object2ObjectRBTreeMap$Entry<K, V>;
    right(): Object2ObjectRBTreeMap$Entry<K, V>;
    right(arg0: Object2ObjectRBTreeMap$Entry<K, V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Object2ObjectRBTreeMap$Entry<K, V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}