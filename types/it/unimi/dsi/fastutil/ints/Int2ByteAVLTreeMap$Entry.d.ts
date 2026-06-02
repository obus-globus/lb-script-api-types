import type { AbstractInt2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2ByteAVLTreeMap$Entry extends AbstractInt2ByteMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Int2ByteAVLTreeMap$Entry;
    // private right: Int2ByteAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Int2ByteAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Int2ByteAVLTreeMap$Entry;
    left(arg0: Int2ByteAVLTreeMap$Entry): void;
    next(): Int2ByteAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Int2ByteAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Int2ByteAVLTreeMap$Entry;
    right(): Int2ByteAVLTreeMap$Entry;
    right(arg0: Int2ByteAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Int2ByteAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}