import type { AbstractFloat2ObjectMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2ObjectMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2ObjectRBTreeMap$Entry<V extends unknown> extends AbstractFloat2ObjectMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: V)
    // private info: number;
    // private left: Float2ObjectRBTreeMap$Entry<V>;
    // private right: Float2ObjectRBTreeMap$Entry<V>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Float2ObjectRBTreeMap$Entry<V>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Float2ObjectRBTreeMap$Entry<V>;
    left(arg0: Float2ObjectRBTreeMap$Entry<V>): void;
    next(): Float2ObjectRBTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Float2ObjectRBTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Float2ObjectRBTreeMap$Entry<V>;
    right(): Float2ObjectRBTreeMap$Entry<V>;
    right(arg0: Float2ObjectRBTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Float2ObjectRBTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}