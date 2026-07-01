import type { AbstractDouble2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2CharAVLTreeMap$Entry extends AbstractDouble2CharMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: string)
    // private info: number;
    // private left: Double2CharAVLTreeMap$Entry;
    // private right: Double2CharAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Double2CharAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Double2CharAVLTreeMap$Entry;
    left(arg0: Double2CharAVLTreeMap$Entry): void;
    next(): Double2CharAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2CharAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2CharAVLTreeMap$Entry;
    right(): Double2CharAVLTreeMap$Entry;
    right(arg0: Double2CharAVLTreeMap$Entry): void;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Double2CharAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}