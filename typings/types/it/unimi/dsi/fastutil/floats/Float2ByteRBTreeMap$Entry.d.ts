import type { AbstractFloat2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2ByteRBTreeMap$Entry extends AbstractFloat2ByteMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Float2ByteRBTreeMap$Entry;
    // private right: Float2ByteRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Float2ByteRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Float2ByteRBTreeMap$Entry;
    left(arg0: Float2ByteRBTreeMap$Entry): void;
    next(): Float2ByteRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2ByteRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2ByteRBTreeMap$Entry;
    right(): Float2ByteRBTreeMap$Entry;
    right(arg0: Float2ByteRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Float2ByteRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}