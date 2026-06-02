import type { AbstractInt2ObjectMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2ObjectMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2ObjectRBTreeMap$Entry<V extends Object | number | string | boolean> extends AbstractInt2ObjectMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: V)
    // private info: number;
    // private left: Int2ObjectRBTreeMap$Entry<V>;
    // private right: Int2ObjectRBTreeMap$Entry<V>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Int2ObjectRBTreeMap$Entry<V>;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Int2ObjectRBTreeMap$Entry<V>;
    left(arg0: Int2ObjectRBTreeMap$Entry<V>): void;
    next(): Int2ObjectRBTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Int2ObjectRBTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Int2ObjectRBTreeMap$Entry<V>;
    right(): Int2ObjectRBTreeMap$Entry<V>;
    right(arg0: Int2ObjectRBTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Int2ObjectRBTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}