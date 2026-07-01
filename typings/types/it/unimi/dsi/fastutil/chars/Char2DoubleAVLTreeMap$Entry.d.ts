import type { AbstractChar2DoubleMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2DoubleMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2DoubleAVLTreeMap$Entry extends AbstractChar2DoubleMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: number)
    // private info: number;
    // private left: Char2DoubleAVLTreeMap$Entry;
    // private right: Char2DoubleAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Char2DoubleAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Char2DoubleAVLTreeMap$Entry;
    left(arg0: Char2DoubleAVLTreeMap$Entry): void;
    next(): Char2DoubleAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2DoubleAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2DoubleAVLTreeMap$Entry;
    right(): Char2DoubleAVLTreeMap$Entry;
    right(arg0: Char2DoubleAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Char2DoubleAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}