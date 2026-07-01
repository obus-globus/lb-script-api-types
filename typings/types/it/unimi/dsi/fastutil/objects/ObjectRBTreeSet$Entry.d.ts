import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class ObjectRBTreeSet$Entry<K extends unknown> extends Object implements Cloneable {
    constructor()
    constructor(arg0: K)
    // private info: number;
    // private key: K;
    // private left: ObjectRBTreeSet$Entry<K>;
    // private right: ObjectRBTreeSet$Entry<K>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): ObjectRBTreeSet$Entry<K>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): ObjectRBTreeSet$Entry<K>;
    left(arg0: ObjectRBTreeSet$Entry<K>): void;
    next(): ObjectRBTreeSet$Entry<K>;
    pred(): boolean;
    pred(arg0: ObjectRBTreeSet$Entry<K>): void;
    pred(arg0: boolean): void;
    prev(): ObjectRBTreeSet$Entry<K>;
    right(): ObjectRBTreeSet$Entry<K>;
    right(arg0: ObjectRBTreeSet$Entry<K>): void;
    succ(): boolean;
    succ(arg0: ObjectRBTreeSet$Entry<K>): void;
    succ(arg0: boolean): void;
    toString(): string;
}