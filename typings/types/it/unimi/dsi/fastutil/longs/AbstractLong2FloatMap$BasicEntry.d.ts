import type { Long2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/longs/Long2FloatMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractLong2FloatMap$BasicEntry extends Object implements Long2FloatMap$Entry {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number)
    key: number;
    value: number;
    equals(arg0: Object | null): boolean;
    getFloatValue(): number;
    getLongKey(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
}