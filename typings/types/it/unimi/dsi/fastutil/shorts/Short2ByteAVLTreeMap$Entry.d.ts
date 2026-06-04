import type { AbstractShort2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2ByteAVLTreeMap$Entry extends AbstractShort2ByteMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Short2ByteAVLTreeMap$Entry;
    // private right: Short2ByteAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Short2ByteAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Short2ByteAVLTreeMap$Entry;
    left(arg0: Short2ByteAVLTreeMap$Entry): void;
    next(): Short2ByteAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2ByteAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2ByteAVLTreeMap$Entry;
    right(): Short2ByteAVLTreeMap$Entry;
    right(arg0: Short2ByteAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Short2ByteAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}