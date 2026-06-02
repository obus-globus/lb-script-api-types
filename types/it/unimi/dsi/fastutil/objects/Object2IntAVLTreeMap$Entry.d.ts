import type { AbstractObject2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2IntAVLTreeMap$Entry<K extends Object | number | string | boolean> extends AbstractObject2IntMap$BasicEntry<K> implements Cloneable {
    constructor()
    constructor(arg0: K, arg1: number)
    // private info: number;
    // private left: Object2IntAVLTreeMap$Entry<K>;
    // private right: Object2IntAVLTreeMap$Entry<K>;
    balance(): number;
    balance(arg0: number): void;
    clone(): Object2IntAVLTreeMap$Entry<K>;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Object2IntAVLTreeMap$Entry<K>;
    left(arg0: Object2IntAVLTreeMap$Entry<K>): void;
    next(): Object2IntAVLTreeMap$Entry<K>;
    pred(): boolean;
    pred(arg0: Object2IntAVLTreeMap$Entry<K>): void;
    pred(arg0: boolean): void;
    prev(): Object2IntAVLTreeMap$Entry<K>;
    right(): Object2IntAVLTreeMap$Entry<K>;
    right(arg0: Object2IntAVLTreeMap$Entry<K>): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Object2IntAVLTreeMap$Entry<K>): void;
    succ(arg0: boolean): void;
    toString(): string;
}