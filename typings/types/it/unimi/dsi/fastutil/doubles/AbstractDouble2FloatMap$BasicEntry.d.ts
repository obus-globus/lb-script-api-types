import type { Double2FloatMap$Entry } from '../../../../../it/unimi/dsi/fastutil/doubles/Double2FloatMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractDouble2FloatMap$BasicEntry extends Object implements Double2FloatMap$Entry {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number)
    key: number;
    value: number;
    equals(arg0: Object | null): boolean;
    getDoubleKey(): number;
    getFloatValue(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    toString(): string;
}