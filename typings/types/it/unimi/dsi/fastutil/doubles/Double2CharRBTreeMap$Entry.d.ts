import type { AbstractDouble2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2CharRBTreeMap$Entry extends AbstractDouble2CharMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: string)
    // private info: number;
    // private left: Double2CharRBTreeMap$Entry;
    // private right: Double2CharRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Double2CharRBTreeMap$Entry;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Double2CharRBTreeMap$Entry;
    left(arg0: Double2CharRBTreeMap$Entry): void;
    next(): Double2CharRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Double2CharRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Double2CharRBTreeMap$Entry;
    right(): Double2CharRBTreeMap$Entry;
    right(arg0: Double2CharRBTreeMap$Entry): void;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Double2CharRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}