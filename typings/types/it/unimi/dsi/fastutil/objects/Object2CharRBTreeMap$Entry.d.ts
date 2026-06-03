import type { AbstractObject2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2CharRBTreeMap$Entry<K extends Object | number | string | boolean> extends AbstractObject2CharMap$BasicEntry<K> implements Cloneable {
    constructor()
    constructor(arg0: K, arg1: string)
    // private info: number;
    // private left: Object2CharRBTreeMap$Entry<K>;
    // private right: Object2CharRBTreeMap$Entry<K>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Object2CharRBTreeMap$Entry<K>;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Object2CharRBTreeMap$Entry<K>;
    left(arg0: Object2CharRBTreeMap$Entry<K>): void;
    next(): Object2CharRBTreeMap$Entry<K>;
    pred(): boolean;
    pred(arg0: Object2CharRBTreeMap$Entry<K>): void;
    pred(arg0: boolean): void;
    prev(): Object2CharRBTreeMap$Entry<K>;
    right(): Object2CharRBTreeMap$Entry<K>;
    right(arg0: Object2CharRBTreeMap$Entry<K>): void;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Object2CharRBTreeMap$Entry<K>): void;
    succ(arg0: boolean): void;
    toString(): string;
}