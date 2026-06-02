import type { AbstractInt2ReferenceMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2ReferenceMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2ReferenceRBTreeMap$Entry<V extends Object | number | string | boolean> extends AbstractInt2ReferenceMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: V)
    // private info: number;
    // private left: Int2ReferenceRBTreeMap$Entry<V>;
    // private right: Int2ReferenceRBTreeMap$Entry<V>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Int2ReferenceRBTreeMap$Entry<V>;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Int2ReferenceRBTreeMap$Entry<V>;
    left(arg0: Int2ReferenceRBTreeMap$Entry<V>): void;
    next(): Int2ReferenceRBTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Int2ReferenceRBTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Int2ReferenceRBTreeMap$Entry<V>;
    right(): Int2ReferenceRBTreeMap$Entry<V>;
    right(arg0: Int2ReferenceRBTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Int2ReferenceRBTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}