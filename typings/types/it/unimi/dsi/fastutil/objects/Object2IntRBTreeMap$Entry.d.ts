import type { AbstractObject2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2IntRBTreeMap$Entry<K extends unknown> extends AbstractObject2IntMap$BasicEntry<K> implements Cloneable {
    constructor()
    constructor(arg0: K, arg1: number)
    // private info: number;
    // private left: Object2IntRBTreeMap$Entry<K>;
    // private right: Object2IntRBTreeMap$Entry<K>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Object2IntRBTreeMap$Entry<K>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Object2IntRBTreeMap$Entry<K>;
    left(arg0: Object2IntRBTreeMap$Entry<K>): void;
    next(): Object2IntRBTreeMap$Entry<K>;
    pred(): boolean;
    pred(arg0: Object2IntRBTreeMap$Entry<K>): void;
    pred(arg0: boolean): void;
    prev(): Object2IntRBTreeMap$Entry<K>;
    right(): Object2IntRBTreeMap$Entry<K>;
    right(arg0: Object2IntRBTreeMap$Entry<K>): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Object2IntRBTreeMap$Entry<K>): void;
    succ(arg0: boolean): void;
    toString(): string;
}