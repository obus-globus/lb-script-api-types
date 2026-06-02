import type { AbstractChar2ShortMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2ShortMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2ShortAVLTreeMap$Entry extends AbstractChar2ShortMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: string, arg1: number)
    // private info: number;
    // private left: Char2ShortAVLTreeMap$Entry;
    // private right: Char2ShortAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Char2ShortAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Char2ShortAVLTreeMap$Entry;
    left(arg0: Char2ShortAVLTreeMap$Entry): void;
    next(): Char2ShortAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Char2ShortAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Char2ShortAVLTreeMap$Entry;
    right(): Char2ShortAVLTreeMap$Entry;
    right(arg0: Char2ShortAVLTreeMap$Entry): void;
    setValue(arg0: number): number;
    succ(): boolean;
    succ(arg0: Char2ShortAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}