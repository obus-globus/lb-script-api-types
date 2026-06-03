import type { AbstractObject2DoubleMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2DoubleMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2DoubleAVLTreeMap$Entry<K extends Object | number | string | boolean> extends AbstractObject2DoubleMap$BasicEntry<K> implements Cloneable {
    constructor()
    constructor(arg0: K, arg1: number)
    // private info: number;
    // private left: Object2DoubleAVLTreeMap$Entry<K>;
    // private right: Object2DoubleAVLTreeMap$Entry<K>;
    balance(): number;
    balance(arg0: number): void;
    clone(): Object2DoubleAVLTreeMap$Entry<K>;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Object2DoubleAVLTreeMap$Entry<K>;
    left(arg0: Object2DoubleAVLTreeMap$Entry<K>): void;
    next(): Object2DoubleAVLTreeMap$Entry<K>;
    pred(): boolean;
    pred(arg0: Object2DoubleAVLTreeMap$Entry<K>): void;
    pred(arg0: boolean): void;
    prev(): Object2DoubleAVLTreeMap$Entry<K>;
    right(): Object2DoubleAVLTreeMap$Entry<K>;
    right(arg0: Object2DoubleAVLTreeMap$Entry<K>): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Object2DoubleAVLTreeMap$Entry<K>): void;
    succ(arg0: boolean): void;
    toString(): string;
}