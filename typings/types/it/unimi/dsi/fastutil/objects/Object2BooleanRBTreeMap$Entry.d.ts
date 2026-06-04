import type { AbstractObject2BooleanMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2BooleanMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2BooleanRBTreeMap$Entry<K extends Object | number | string | boolean> extends AbstractObject2BooleanMap$BasicEntry<K> implements Cloneable {
    constructor()
    constructor(arg0: K, arg1: boolean)
    // private info: number;
    // private left: Object2BooleanRBTreeMap$Entry<K>;
    // private right: Object2BooleanRBTreeMap$Entry<K>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Object2BooleanRBTreeMap$Entry<K>;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Object2BooleanRBTreeMap$Entry<K>;
    left(arg0: Object2BooleanRBTreeMap$Entry<K>): void;
    next(): Object2BooleanRBTreeMap$Entry<K>;
    pred(): boolean;
    pred(arg0: Object2BooleanRBTreeMap$Entry<K>): void;
    pred(arg0: boolean): void;
    prev(): Object2BooleanRBTreeMap$Entry<K>;
    right(): Object2BooleanRBTreeMap$Entry<K>;
    right(arg0: Object2BooleanRBTreeMap$Entry<K>): void;
    setValue(arg0: boolean): boolean;
    succ(): boolean;
    succ(arg0: Object2BooleanRBTreeMap$Entry<K>): void;
    succ(arg0: boolean): void;
    toString(): string;
}