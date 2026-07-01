import type { AbstractObject2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2LongRBTreeMap$Entry<K extends unknown> extends AbstractObject2LongMap$BasicEntry<K> implements Cloneable {
    constructor()
    constructor(arg0: K, arg1: number)
    // private info: number;
    // private left: Object2LongRBTreeMap$Entry<K>;
    // private right: Object2LongRBTreeMap$Entry<K>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Object2LongRBTreeMap$Entry<K>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Object2LongRBTreeMap$Entry<K>;
    left(arg0: Object2LongRBTreeMap$Entry<K>): void;
    next(): Object2LongRBTreeMap$Entry<K>;
    pred(): boolean;
    pred(arg0: Object2LongRBTreeMap$Entry<K>): void;
    pred(arg0: boolean): void;
    prev(): Object2LongRBTreeMap$Entry<K>;
    right(): Object2LongRBTreeMap$Entry<K>;
    right(arg0: Object2LongRBTreeMap$Entry<K>): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Object2LongRBTreeMap$Entry<K>): void;
    succ(arg0: boolean): void;
    toString(): string;
}