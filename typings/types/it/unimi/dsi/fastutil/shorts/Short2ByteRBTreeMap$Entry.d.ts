import type { AbstractShort2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2ByteRBTreeMap$Entry extends AbstractShort2ByteMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Short2ByteRBTreeMap$Entry;
    // private right: Short2ByteRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Short2ByteRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Short2ByteRBTreeMap$Entry;
    left(arg0: Short2ByteRBTreeMap$Entry): void;
    next(): Short2ByteRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2ByteRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2ByteRBTreeMap$Entry;
    right(): Short2ByteRBTreeMap$Entry;
    right(arg0: Short2ByteRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Short2ByteRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}