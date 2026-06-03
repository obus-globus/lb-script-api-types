import type { AbstractFloat2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2ByteAVLTreeMap$Entry extends AbstractFloat2ByteMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Float2ByteAVLTreeMap$Entry;
    // private right: Float2ByteAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Float2ByteAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Float2ByteAVLTreeMap$Entry;
    left(arg0: Float2ByteAVLTreeMap$Entry): void;
    next(): Float2ByteAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Float2ByteAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Float2ByteAVLTreeMap$Entry;
    right(): Float2ByteAVLTreeMap$Entry;
    right(arg0: Float2ByteAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Float2ByteAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}