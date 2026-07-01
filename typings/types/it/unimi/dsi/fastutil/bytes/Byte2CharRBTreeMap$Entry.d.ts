import type { AbstractByte2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2CharRBTreeMap$Entry extends AbstractByte2CharMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: string)
    // private info: number;
    // private left: Byte2CharRBTreeMap$Entry;
    // private right: Byte2CharRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Byte2CharRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Byte2CharRBTreeMap$Entry;
    left(arg0: Byte2CharRBTreeMap$Entry): void;
    next(): Byte2CharRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2CharRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2CharRBTreeMap$Entry;
    right(): Byte2CharRBTreeMap$Entry;
    right(arg0: Byte2CharRBTreeMap$Entry): void;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Byte2CharRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}