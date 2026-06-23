import type { AbstractChar2ObjectMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2ObjectMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2ObjectAVLTreeMap$Entry<V extends unknown> extends AbstractChar2ObjectMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: V)
    // private info: number;
    // private left: Char2ObjectAVLTreeMap$Entry<V>;
    // private right: Char2ObjectAVLTreeMap$Entry<V>;
    balance(): number;
    balance(arg0: number): void;
    clone(): Char2ObjectAVLTreeMap$Entry<V>;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Char2ObjectAVLTreeMap$Entry<V>;
    left(arg0: Char2ObjectAVLTreeMap$Entry<V>): void;
    next(): Char2ObjectAVLTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Char2ObjectAVLTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Char2ObjectAVLTreeMap$Entry<V>;
    right(): Char2ObjectAVLTreeMap$Entry<V>;
    right(arg0: Char2ObjectAVLTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Char2ObjectAVLTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}