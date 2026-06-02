import type { AbstractDouble2ReferenceMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2ReferenceMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2ReferenceRBTreeMap$Entry<V extends Object | number | string | boolean> extends AbstractDouble2ReferenceMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: V)
    // private info: number;
    // private left: Double2ReferenceRBTreeMap$Entry<V>;
    // private right: Double2ReferenceRBTreeMap$Entry<V>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Double2ReferenceRBTreeMap$Entry<V>;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Double2ReferenceRBTreeMap$Entry<V>;
    left(arg0: Double2ReferenceRBTreeMap$Entry<V>): void;
    next(): Double2ReferenceRBTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Double2ReferenceRBTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Double2ReferenceRBTreeMap$Entry<V>;
    right(): Double2ReferenceRBTreeMap$Entry<V>;
    right(arg0: Double2ReferenceRBTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Double2ReferenceRBTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}