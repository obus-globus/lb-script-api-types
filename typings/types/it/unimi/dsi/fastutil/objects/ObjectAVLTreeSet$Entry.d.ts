import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class ObjectAVLTreeSet$Entry<K extends unknown> extends Object implements Cloneable {
    constructor()
    constructor(arg0: K)
    // private info: number;
    // private key: K;
    // private left: ObjectAVLTreeSet$Entry<K>;
    // private right: ObjectAVLTreeSet$Entry<K>;
    balance(): number;
    balance(arg0: number): void;
    clone(): ObjectAVLTreeSet$Entry<K>;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): ObjectAVLTreeSet$Entry<K>;
    left(arg0: ObjectAVLTreeSet$Entry<K>): void;
    next(): ObjectAVLTreeSet$Entry<K>;
    pred(): boolean;
    pred(arg0: ObjectAVLTreeSet$Entry<K>): void;
    pred(arg0: boolean): void;
    prev(): ObjectAVLTreeSet$Entry<K>;
    right(): ObjectAVLTreeSet$Entry<K>;
    right(arg0: ObjectAVLTreeSet$Entry<K>): void;
    succ(): boolean;
    succ(arg0: ObjectAVLTreeSet$Entry<K>): void;
    succ(arg0: boolean): void;
    toString(): string;
}