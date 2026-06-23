import type { AbstractLong2ObjectMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2ObjectMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2ObjectAVLTreeMap$Entry<V extends unknown> extends AbstractLong2ObjectMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: V)
    // private info: number;
    // private left: Long2ObjectAVLTreeMap$Entry<V>;
    // private right: Long2ObjectAVLTreeMap$Entry<V>;
    balance(): number;
    balance(arg0: number): void;
    clone(): Long2ObjectAVLTreeMap$Entry<V>;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Long2ObjectAVLTreeMap$Entry<V>;
    left(arg0: Long2ObjectAVLTreeMap$Entry<V>): void;
    next(): Long2ObjectAVLTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Long2ObjectAVLTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Long2ObjectAVLTreeMap$Entry<V>;
    right(): Long2ObjectAVLTreeMap$Entry<V>;
    right(arg0: Long2ObjectAVLTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Long2ObjectAVLTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}