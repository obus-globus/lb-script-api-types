import type { AbstractChar2ObjectMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2ObjectMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2ObjectRBTreeMap$Entry<V extends Object | number | string | boolean> extends AbstractChar2ObjectMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: V)
    // private info: number;
    // private left: Char2ObjectRBTreeMap$Entry<V>;
    // private right: Char2ObjectRBTreeMap$Entry<V>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Char2ObjectRBTreeMap$Entry<V>;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Char2ObjectRBTreeMap$Entry<V>;
    left(arg0: Char2ObjectRBTreeMap$Entry<V>): void;
    next(): Char2ObjectRBTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Char2ObjectRBTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Char2ObjectRBTreeMap$Entry<V>;
    right(): Char2ObjectRBTreeMap$Entry<V>;
    right(arg0: Char2ObjectRBTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Char2ObjectRBTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}