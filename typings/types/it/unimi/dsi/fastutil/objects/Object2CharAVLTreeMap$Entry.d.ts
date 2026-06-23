import type { AbstractObject2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractObject2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Object2CharAVLTreeMap$Entry<K extends unknown> extends AbstractObject2CharMap$BasicEntry<K> implements Cloneable {
    constructor()
    constructor(arg0: K, arg1: string)
    // private info: number;
    // private left: Object2CharAVLTreeMap$Entry<K>;
    // private right: Object2CharAVLTreeMap$Entry<K>;
    balance(): number;
    balance(arg0: number): void;
    clone(): Object2CharAVLTreeMap$Entry<K>;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Object2CharAVLTreeMap$Entry<K>;
    left(arg0: Object2CharAVLTreeMap$Entry<K>): void;
    next(): Object2CharAVLTreeMap$Entry<K>;
    pred(): boolean;
    pred(arg0: Object2CharAVLTreeMap$Entry<K>): void;
    pred(arg0: boolean): void;
    prev(): Object2CharAVLTreeMap$Entry<K>;
    right(): Object2CharAVLTreeMap$Entry<K>;
    right(arg0: Object2CharAVLTreeMap$Entry<K>): void;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Object2CharAVLTreeMap$Entry<K>): void;
    succ(arg0: boolean): void;
    toString(): string;
}