import type { AbstractInt2ObjectMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2ObjectMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2ObjectAVLTreeMap$Entry<V extends Object | number | string | boolean> extends AbstractInt2ObjectMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: V)
    // private info: number;
    // private left: Int2ObjectAVLTreeMap$Entry<V>;
    // private right: Int2ObjectAVLTreeMap$Entry<V>;
    balance(): number;
    balance(arg0: number): void;
    clone(): Int2ObjectAVLTreeMap$Entry<V>;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Int2ObjectAVLTreeMap$Entry<V>;
    left(arg0: Int2ObjectAVLTreeMap$Entry<V>): void;
    next(): Int2ObjectAVLTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Int2ObjectAVLTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Int2ObjectAVLTreeMap$Entry<V>;
    right(): Int2ObjectAVLTreeMap$Entry<V>;
    right(arg0: Int2ObjectAVLTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Int2ObjectAVLTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}