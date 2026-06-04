import type { AbstractChar2LongMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2LongMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2LongAVLTreeMap$Entry extends AbstractChar2LongMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: number)
    // private info: number;
    // private left: Char2LongAVLTreeMap$Entry;
    // private right: Char2LongAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Char2LongAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Char2LongAVLTreeMap$Entry;
    left(arg0: Char2LongAVLTreeMap$Entry): void;
    next(): Char2LongAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2LongAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2LongAVLTreeMap$Entry;
    right(): Char2LongAVLTreeMap$Entry;
    right(arg0: Char2LongAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Char2LongAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}