import type { Double2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2LongMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractDouble2LongMap$BasicEntry extends Object implements Double2LongMap$Entry {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number)
    key: number;
    value: number;
    equals(arg0: Object | null): boolean;
    getDoubleKey(): number;
    getLongValue(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
}