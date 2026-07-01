import type { AbstractDouble2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2ByteRBTreeMap$Entry extends AbstractDouble2ByteMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Double2ByteRBTreeMap$Entry;
    // private right: Double2ByteRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Double2ByteRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Double2ByteRBTreeMap$Entry;
    left(arg0: Double2ByteRBTreeMap$Entry): void;
    next(): Double2ByteRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2ByteRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2ByteRBTreeMap$Entry;
    right(): Double2ByteRBTreeMap$Entry;
    right(arg0: Double2ByteRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Double2ByteRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}