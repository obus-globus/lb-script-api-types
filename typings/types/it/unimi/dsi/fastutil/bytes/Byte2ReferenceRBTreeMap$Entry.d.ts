import type { AbstractByte2ReferenceMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2ReferenceMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2ReferenceRBTreeMap$Entry<V extends unknown> extends AbstractByte2ReferenceMap$BasicEntry<V> implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: V)
    // private info: number;
    // private left: Byte2ReferenceRBTreeMap$Entry<V>;
    // private right: Byte2ReferenceRBTreeMap$Entry<V>;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Byte2ReferenceRBTreeMap$Entry<V>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Byte2ReferenceRBTreeMap$Entry<V>;
    left(arg0: Byte2ReferenceRBTreeMap$Entry<V>): void;
    next(): Byte2ReferenceRBTreeMap$Entry<V>;
    pred(): boolean;
    pred(arg0: Byte2ReferenceRBTreeMap$Entry<V>): void;
    pred(arg0: boolean): void;
    prev(): Byte2ReferenceRBTreeMap$Entry<V>;
    right(): Byte2ReferenceRBTreeMap$Entry<V>;
    right(arg0: Byte2ReferenceRBTreeMap$Entry<V>): void;
    setValue(arg0: V): V;
    succ(): boolean;
    succ(arg0: Byte2ReferenceRBTreeMap$Entry<V>): void;
    succ(arg0: boolean): void;
    toString(): string;
}