import type { AbstractByte2CharMap$BasicEntry } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2CharMap$BasicEntry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2CharAVLTreeMap$Entry extends AbstractByte2CharMap$BasicEntry implements Cloneable {
    constructor()
    constructor(arg0: number, arg1: string)
    // private info: number;
    // private left: Byte2CharAVLTreeMap$Entry;
    // private right: Byte2CharAVLTreeMap$Entry;
    balance(): number;
    balance(arg0: number): void;
    clone(): Byte2CharAVLTreeMap$Entry;
    protected clone(): Object;
    decBalance(): void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    incBalance(): void;
    left(): Byte2CharAVLTreeMap$Entry;
    left(arg0: Byte2CharAVLTreeMap$Entry): void;
    next(): Byte2CharAVLTreeMap$Entry;
    pred(): boolean;
    pred(arg0: Byte2CharAVLTreeMap$Entry): void;
    pred(arg0: boolean): void;
    prev(): Byte2CharAVLTreeMap$Entry;
    right(): Byte2CharAVLTreeMap$Entry;
    right(arg0: Byte2CharAVLTreeMap$Entry): void;
    setValue(arg0: string): string;
    succ(): boolean;
    succ(arg0: Byte2CharAVLTreeMap$Entry): void;
    succ(arg0: boolean): void;
    toString(): string;
}