import type { AbstractShort2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2CharRBTreeMap$Entry extends AbstractShort2CharMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: string)
    // private info: number;
    // private left: Short2CharRBTreeMap$Entry;
    // private right: Short2CharRBTreeMap$Entry;
    black(): boolean;
    black(arg0: boolean): void;
    clone(): Short2CharRBTreeMap$Entry;
    protected clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    left(): Short2CharRBTreeMap$Entry;
    left(arg0: Short2CharRBTreeMap$Entry): void;
    next(): Short2CharRBTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2CharRBTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2CharRBTreeMap$Entry;
    right(): Short2CharRBTreeMap$Entry;
    right(arg0: Short2CharRBTreeMap$Entry): void;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Short2CharRBTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}