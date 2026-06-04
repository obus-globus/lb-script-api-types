import type { Long2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2ShortMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractLong2ShortMap$BasicEntry extends Object implements Long2ShortMap$Entry {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number)
    key: number;
    value: number;
    equals(arg0: Object | null): boolean;
    getLongKey(): number;
    getShortValue(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    toString(): string;
}