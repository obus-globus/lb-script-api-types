import type { AbstractInt2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2ByteRBTreeMap$Entry extends AbstractInt2ByteMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Int2ByteRBTreeMap$Entry;
    // private right: Int2ByteRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Int2ByteRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Int2ByteRBTreeMap$Entry;
    left(arg0: Int2ByteRBTreeMap$Entry): void;
    next(): Int2ByteRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2ByteRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2ByteRBTreeMap$Entry;
    right(): Int2ByteRBTreeMap$Entry;
    right(arg0: Int2ByteRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Int2ByteRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}