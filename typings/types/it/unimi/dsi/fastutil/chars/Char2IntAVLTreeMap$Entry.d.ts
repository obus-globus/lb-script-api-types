import type { AbstractChar2IntMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2IntMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2IntAVLTreeMap$Entry extends AbstractChar2IntMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: number)
    // private info: number;
    // private left: Char2IntAVLTreeMap$Entry;
    // private right: Char2IntAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Char2IntAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Char2IntAVLTreeMap$Entry;
    left(arg0: Char2IntAVLTreeMap$Entry): void;
    next(): Char2IntAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2IntAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2IntAVLTreeMap$Entry;
    right(): Char2IntAVLTreeMap$Entry;
    right(arg0: Char2IntAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Char2IntAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}