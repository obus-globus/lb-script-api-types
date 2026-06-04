import type { AbstractChar2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2ByteRBTreeMap$Entry extends AbstractChar2ByteMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: number)
    // private info: number;
    // private left: Char2ByteRBTreeMap$Entry;
    // private right: Char2ByteRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Char2ByteRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Char2ByteRBTreeMap$Entry;
    left(arg0: Char2ByteRBTreeMap$Entry): void;
    next(): Char2ByteRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2ByteRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2ByteRBTreeMap$Entry;
    right(): Char2ByteRBTreeMap$Entry;
    right(arg0: Char2ByteRBTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Char2ByteRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}