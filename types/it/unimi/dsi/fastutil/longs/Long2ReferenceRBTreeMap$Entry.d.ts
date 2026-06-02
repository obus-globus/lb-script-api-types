import type { AbstractLong2ReferenceMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2ReferenceMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2ReferenceRBTreeMap$Entry<V extends Object | number | string | boolean> extends AbstractLong2ReferenceMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: V)
    // private info: number;
    // private left: Long2ReferenceRBTreeMap$Entry<V>;
    // private right: Long2ReferenceRBTreeMap$Entry<V>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Long2ReferenceRBTreeMap$Entry<V>;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Long2ReferenceRBTreeMap$Entry<V>;
    left(arg0: Long2ReferenceRBTreeMap$Entry<V>): void;
    next(): Long2ReferenceRBTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Long2ReferenceRBTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Long2ReferenceRBTreeMap$Entry<V>;
    right(): Long2ReferenceRBTreeMap$Entry<V>;
    right(arg0: Long2ReferenceRBTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Long2ReferenceRBTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}