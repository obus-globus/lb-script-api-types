import type { AbstractLong2ObjectMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2ObjectMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2ObjectRBTreeMap$Entry<V extends unknown> extends AbstractLong2ObjectMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: V)
    // private info: number;
    // private left: Long2ObjectRBTreeMap$Entry<V>;
    // private right: Long2ObjectRBTreeMap$Entry<V>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Long2ObjectRBTreeMap$Entry<V>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Long2ObjectRBTreeMap$Entry<V>;
    left(arg0: Long2ObjectRBTreeMap$Entry<V>): void;
    next(): Long2ObjectRBTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Long2ObjectRBTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Long2ObjectRBTreeMap$Entry<V>;
    right(): Long2ObjectRBTreeMap$Entry<V>;
    right(arg0: Long2ObjectRBTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Long2ObjectRBTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}