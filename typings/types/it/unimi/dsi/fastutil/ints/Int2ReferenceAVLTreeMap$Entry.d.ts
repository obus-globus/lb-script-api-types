import type { AbstractInt2ReferenceMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2ReferenceMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2ReferenceAVLTreeMap$Entry<V extends unknown> extends AbstractInt2ReferenceMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: V)
    // private info: number;
    // private left: Int2ReferenceAVLTreeMap$Entry<V>;
    // private right: Int2ReferenceAVLTreeMap$Entry<V>;
    balance(): number;
    balance(arg0: number): void;
    clone(): Int2ReferenceAVLTreeMap$Entry<V>;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Int2ReferenceAVLTreeMap$Entry<V>;
    left(arg0: Int2ReferenceAVLTreeMap$Entry<V>): void;
    next(): Int2ReferenceAVLTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Int2ReferenceAVLTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Int2ReferenceAVLTreeMap$Entry<V>;
    right(): Int2ReferenceAVLTreeMap$Entry<V>;
    right(arg0: Int2ReferenceAVLTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Int2ReferenceAVLTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}