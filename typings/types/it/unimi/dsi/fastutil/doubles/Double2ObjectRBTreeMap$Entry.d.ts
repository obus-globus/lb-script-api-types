import type { AbstractDouble2ObjectMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2ObjectMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2ObjectRBTreeMap$Entry<V extends unknown> extends AbstractDouble2ObjectMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: V)
    // private info: number;
    // private left: Double2ObjectRBTreeMap$Entry<V>;
    // private right: Double2ObjectRBTreeMap$Entry<V>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Double2ObjectRBTreeMap$Entry<V>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Double2ObjectRBTreeMap$Entry<V>;
    left(arg0: Double2ObjectRBTreeMap$Entry<V>): void;
    next(): Double2ObjectRBTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Double2ObjectRBTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Double2ObjectRBTreeMap$Entry<V>;
    right(): Double2ObjectRBTreeMap$Entry<V>;
    right(arg0: Double2ObjectRBTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Double2ObjectRBTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}