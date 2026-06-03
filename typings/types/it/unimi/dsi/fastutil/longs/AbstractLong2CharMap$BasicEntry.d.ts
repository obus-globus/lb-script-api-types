import type { Long2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2CharMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractLong2CharMap$BasicEntry extends Object implements Long2CharMap$Entry {
    constructor()
    constructor(arg0: number, arg1: string)
    constructor(arg0: number, arg1: string)
    key: number;
    value: string;
    equals(arg0: Object | null): boolean;
    getCharValue(): string;
    getLongKey(): number;
    hashCode(): number;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    toString(): string;
}