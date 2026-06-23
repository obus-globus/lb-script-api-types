import type { AbstractObject2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2ByteAVLTreeMap$Entry<K extends unknown> extends AbstractObject2ByteMap$BasicEntry<K> implements Cloneable {
    constructor()
    constructor(arg0: K, arg1: number)
    // private info: number;
    // private left: Object2ByteAVLTreeMap$Entry<K>;
    // private right: Object2ByteAVLTreeMap$Entry<K>;
    balance(): number;
    balance(arg0: number): void;
    clone(): Object2ByteAVLTreeMap$Entry<K>;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Object2ByteAVLTreeMap$Entry<K>;
    left(arg0: Object2ByteAVLTreeMap$Entry<K>): void;
    next(): Object2ByteAVLTreeMap$Entry<K>;
    pred(): boolean;
    pred(arg0: Object2ByteAVLTreeMap$Entry<K>): void;
    pred(arg0: boolean): void;
    prev(): Object2ByteAVLTreeMap$Entry<K>;
    right(): Object2ByteAVLTreeMap$Entry<K>;
    right(arg0: Object2ByteAVLTreeMap$Entry<K>): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Object2ByteAVLTreeMap$Entry<K>): void;
    succ(arg0: boolean): void;
    toString(): string;
}