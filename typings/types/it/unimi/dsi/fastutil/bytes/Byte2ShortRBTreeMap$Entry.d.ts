import type { AbstractByte2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2ShortRBTreeMap$Entry extends AbstractByte2ShortMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: number)
    // private info: number;
    // private left: Byte2ShortRBTreeMap$Entry;
    // private right: Byte2ShortRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Byte2ShortRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Byte2ShortRBTreeMap$Entry;
    left(arg0: Byte2ShortRBTreeMap$Entry): void;
    next(): Byte2ShortRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2ShortRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2ShortRBTreeMap$Entry;
    right(): Byte2ShortRBTreeMap$Entry;
    right(arg0: Byte2ShortRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Byte2ShortRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}