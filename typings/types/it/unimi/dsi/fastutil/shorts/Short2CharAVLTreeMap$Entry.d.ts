import type { AbstractShort2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/shorts/AbstractShort2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Short2CharAVLTreeMap$Entry extends AbstractShort2CharMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: string)
    // private info: number;
    // private left: Short2CharAVLTreeMap$Entry;
    // private right: Short2CharAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Short2CharAVLTreeMap$Entry;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Short2CharAVLTreeMap$Entry;
    left(arg0: Short2CharAVLTreeMap$Entry): void;
    next(): Short2CharAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Short2CharAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Short2CharAVLTreeMap$Entry;
    right(): Short2CharAVLTreeMap$Entry;
    right(arg0: Short2CharAVLTreeMap$Entry): void;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Short2CharAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}