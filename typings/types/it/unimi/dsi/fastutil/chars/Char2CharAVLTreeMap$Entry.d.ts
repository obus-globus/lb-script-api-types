import type { AbstractChar2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2CharAVLTreeMap$Entry extends AbstractChar2CharMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: string)
    // private info: number;
    // private left: Char2CharAVLTreeMap$Entry;
    // private right: Char2CharAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Char2CharAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Char2CharAVLTreeMap$Entry;
    left(arg0: Char2CharAVLTreeMap$Entry): void;
    next(): Char2CharAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2CharAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2CharAVLTreeMap$Entry;
    right(): Char2CharAVLTreeMap$Entry;
    right(arg0: Char2CharAVLTreeMap$Entry): void;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Char2CharAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}