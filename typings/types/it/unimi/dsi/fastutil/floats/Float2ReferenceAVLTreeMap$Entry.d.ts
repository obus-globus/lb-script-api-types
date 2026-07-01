import type { AbstractFloat2ReferenceMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2ReferenceMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2ReferenceAVLTreeMap$Entry<V extends unknown> extends AbstractFloat2ReferenceMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: V)
    // private info: number;
    // private left: Float2ReferenceAVLTreeMap$Entry<V>;
    // private right: Float2ReferenceAVLTreeMap$Entry<V>;
    balance(): number;
    balance(arg0: number): void;
    clone(): Float2ReferenceAVLTreeMap$Entry<V>;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Float2ReferenceAVLTreeMap$Entry<V>;
    left(arg0: Float2ReferenceAVLTreeMap$Entry<V>): void;
    next(): Float2ReferenceAVLTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Float2ReferenceAVLTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Float2ReferenceAVLTreeMap$Entry<V>;
    right(): Float2ReferenceAVLTreeMap$Entry<V>;
    right(arg0: Float2ReferenceAVLTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Float2ReferenceAVLTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}