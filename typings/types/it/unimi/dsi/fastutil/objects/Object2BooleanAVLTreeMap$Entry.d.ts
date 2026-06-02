import type { AbstractObject2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2BooleanAVLTreeMap$Entry<K extends Object | number | string | boolean> extends AbstractObject2BooleanMap$BasicEntry<K> implements Cloneable {
    constructor()
    constructor(arg0: K, arg1: boolean)
    // private info: number;
    // private left: Object2BooleanAVLTreeMap$Entry<K>;
    // private right: Object2BooleanAVLTreeMap$Entry<K>;
    balance(): number;
    balance(arg0: number): void;
    clone(): Object2BooleanAVLTreeMap$Entry<K>;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Object2BooleanAVLTreeMap$Entry<K>;
    left(arg0: Object2BooleanAVLTreeMap$Entry<K>): void;
    next(): Object2BooleanAVLTreeMap$Entry<K>;
    pred(): boolean;
    pred(arg0: Object2BooleanAVLTreeMap$Entry<K>): void;
    pred(arg0: boolean): void;
    prev(): Object2BooleanAVLTreeMap$Entry<K>;
    right(): Object2BooleanAVLTreeMap$Entry<K>;
    right(arg0: Object2BooleanAVLTreeMap$Entry<K>): void;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Object2BooleanAVLTreeMap$Entry<K>): void;
    succ(arg0: boolean): void;
    toString(): string;
}