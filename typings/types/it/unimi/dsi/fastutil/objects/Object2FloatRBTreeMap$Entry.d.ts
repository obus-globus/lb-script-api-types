import type { AbstractObject2FloatMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2FloatMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2FloatRBTreeMap$Entry<K extends Object | number | string | boolean> extends AbstractObject2FloatMap$BasicEntry<K> implements Cloneable {
    constructor()
    constructor(arg0: K, arg1: number)
    // private info: number;
    // private left: Object2FloatRBTreeMap$Entry<K>;
    // private right: Object2FloatRBTreeMap$Entry<K>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Object2FloatRBTreeMap$Entry<K>;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Object2FloatRBTreeMap$Entry<K>;
    left(arg0: Object2FloatRBTreeMap$Entry<K>): void;
    next(): Object2FloatRBTreeMap$Entry<K>;
    pred(): boolean;
    pred(arg0: Object2FloatRBTreeMap$Entry<K>): void;
    pred(arg0: boolean): void;
    prev(): Object2FloatRBTreeMap$Entry<K>;
    right(): Object2FloatRBTreeMap$Entry<K>;
    right(arg0: Object2FloatRBTreeMap$Entry<K>): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Object2FloatRBTreeMap$Entry<K>): void;
    succ(arg0: boolean): void;
    toString(): string;
}