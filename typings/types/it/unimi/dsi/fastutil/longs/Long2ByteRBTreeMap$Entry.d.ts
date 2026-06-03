import type { AbstractLong2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/longs/AbstractLong2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Long2ByteRBTreeMap$Entry extends AbstractLong2ByteMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Long2ByteRBTreeMap$Entry;
    // private right: Long2ByteRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Long2ByteRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Long2ByteRBTreeMap$Entry;
    left(arg0: Long2ByteRBTreeMap$Entry): void;
    next(): Long2ByteRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Long2ByteRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Long2ByteRBTreeMap$Entry;
    right(): Long2ByteRBTreeMap$Entry;
    right(arg0: Long2ByteRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Long2ByteRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}