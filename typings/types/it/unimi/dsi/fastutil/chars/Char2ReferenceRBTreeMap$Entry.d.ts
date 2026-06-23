import type { AbstractChar2ReferenceMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2ReferenceMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2ReferenceRBTreeMap$Entry<V extends unknown> extends AbstractChar2ReferenceMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: V)
    // private info: number;
    // private left: Char2ReferenceRBTreeMap$Entry<V>;
    // private right: Char2ReferenceRBTreeMap$Entry<V>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Char2ReferenceRBTreeMap$Entry<V>;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Char2ReferenceRBTreeMap$Entry<V>;
    left(arg0: Char2ReferenceRBTreeMap$Entry<V>): void;
    next(): Char2ReferenceRBTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Char2ReferenceRBTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Char2ReferenceRBTreeMap$Entry<V>;
    right(): Char2ReferenceRBTreeMap$Entry<V>;
    right(arg0: Char2ReferenceRBTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Char2ReferenceRBTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}