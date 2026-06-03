import type { AbstractObject2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2ShortRBTreeMap$Entry<K extends Object | number | string | boolean> extends AbstractObject2ShortMap$BasicEntry<K> implements Cloneable {
    constructor()
    constructor(arg0: K, arg1: number)
    // private info: number;
    // private left: Object2ShortRBTreeMap$Entry<K>;
    // private right: Object2ShortRBTreeMap$Entry<K>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Object2ShortRBTreeMap$Entry<K>;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Object2ShortRBTreeMap$Entry<K>;
    left(arg0: Object2ShortRBTreeMap$Entry<K>): void;
    next(): Object2ShortRBTreeMap$Entry<K>;
    pred(): boolean;
    pred(arg0: Object2ShortRBTreeMap$Entry<K>): void;
    pred(arg0: boolean): void;
    prev(): Object2ShortRBTreeMap$Entry<K>;
    right(): Object2ShortRBTreeMap$Entry<K>;
    right(arg0: Object2ShortRBTreeMap$Entry<K>): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Object2ShortRBTreeMap$Entry<K>): void;
    succ(arg0: boolean): void;
    toString(): string;
}