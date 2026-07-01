import type { AbstractChar2ByteMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2ByteMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2ByteAVLTreeMap$Entry extends AbstractChar2ByteMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: number)
    // private info: number;
    // private left: Char2ByteAVLTreeMap$Entry;
    // private right: Char2ByteAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Char2ByteAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Char2ByteAVLTreeMap$Entry;
    left(arg0: Char2ByteAVLTreeMap$Entry): void;
    next(): Char2ByteAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2ByteAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2ByteAVLTreeMap$Entry;
    right(): Char2ByteAVLTreeMap$Entry;
    right(arg0: Char2ByteAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Char2ByteAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}