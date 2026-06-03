import type { Int2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2CharMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractInt2CharMap$BasicEntry extends Object implements Int2CharMap$Entry {
    constructor()
    constructor(arg0: number, arg1: string)
    constructor(arg0: number, arg1: string)
    key: number;
    value: string;
    equals(arg0: Object | null): boolean;
    getCharValue(): string;
    getIntKey(): number;
    hashCode(): number;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    toString(): string;
}