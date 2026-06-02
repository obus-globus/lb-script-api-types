import type { AbstractShort2ObjectMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2ObjectMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2ObjectRBTreeMap$Entry<V extends Object | number | string | boolean> extends AbstractShort2ObjectMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: V)
    // private info: number;
    // private left: Short2ObjectRBTreeMap$Entry<V>;
    // private right: Short2ObjectRBTreeMap$Entry<V>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Short2ObjectRBTreeMap$Entry<V>;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Short2ObjectRBTreeMap$Entry<V>;
    left(arg0: Short2ObjectRBTreeMap$Entry<V>): void;
    next(): Short2ObjectRBTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Short2ObjectRBTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Short2ObjectRBTreeMap$Entry<V>;
    right(): Short2ObjectRBTreeMap$Entry<V>;
    right(arg0: Short2ObjectRBTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Short2ObjectRBTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}