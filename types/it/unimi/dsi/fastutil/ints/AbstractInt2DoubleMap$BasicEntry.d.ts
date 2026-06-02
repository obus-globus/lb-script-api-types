import type { Int2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2DoubleMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractInt2DoubleMap$BasicEntry extends Object implements Int2DoubleMap$Entry {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number)
    key: number;
    value: number;
    equals(arg0: Object | null): boolean;
    getDoubleValue(): number;
    getIntKey(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
}