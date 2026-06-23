import type { AbstractObject2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2ByteRBTreeMap$Entry<K extends unknown> extends AbstractObject2ByteMap$BasicEntry<K> implements Cloneable {
    constructor()
    constructor(arg0: K, arg1: number)
    // private info: number;
    // private left: Object2ByteRBTreeMap$Entry<K>;
    // private right: Object2ByteRBTreeMap$Entry<K>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Object2ByteRBTreeMap$Entry<K>;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Object2ByteRBTreeMap$Entry<K>;
    left(arg0: Object2ByteRBTreeMap$Entry<K>): void;
    next(): Object2ByteRBTreeMap$Entry<K>;
    pred(): boolean;
    pred(arg0: Object2ByteRBTreeMap$Entry<K>): void;
    pred(arg0: boolean): void;
    prev(): Object2ByteRBTreeMap$Entry<K>;
    right(): Object2ByteRBTreeMap$Entry<K>;
    right(arg0: Object2ByteRBTreeMap$Entry<K>): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Object2ByteRBTreeMap$Entry<K>): void;
    succ(arg0: boolean): void;
    toString(): string;
}