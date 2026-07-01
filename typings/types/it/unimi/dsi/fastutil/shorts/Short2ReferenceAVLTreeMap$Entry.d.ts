import type { AbstractShort2ReferenceMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2ReferenceMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2ReferenceAVLTreeMap$Entry<V extends unknown> extends AbstractShort2ReferenceMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: V)
    // private info: number;
    // private left: Short2ReferenceAVLTreeMap$Entry<V>;
    // private right: Short2ReferenceAVLTreeMap$Entry<V>;
    balance(): number;
    balance(arg0: number): void;
    clone(): Short2ReferenceAVLTreeMap$Entry<V>;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Short2ReferenceAVLTreeMap$Entry<V>;
    left(arg0: Short2ReferenceAVLTreeMap$Entry<V>): void;
    next(): Short2ReferenceAVLTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Short2ReferenceAVLTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Short2ReferenceAVLTreeMap$Entry<V>;
    right(): Short2ReferenceAVLTreeMap$Entry<V>;
    right(arg0: Short2ReferenceAVLTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Short2ReferenceAVLTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}