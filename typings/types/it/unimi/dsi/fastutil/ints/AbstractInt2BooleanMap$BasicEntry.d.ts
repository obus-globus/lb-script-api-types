import type { Int2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/ints/Int2BooleanMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractInt2BooleanMap$BasicEntry extends Object implements Int2BooleanMap$Entry {
    constructor()
    constructor(arg0: number, arg1: boolean)
    constructor(arg0: number, arg1: boolean)
    key: number;
    value: boolean;
    equals(arg0: Object | null): boolean;
    getBooleanValue(): boolean;
    getIntKey(): number;
    hashCode(): number;
    setValue(arg0: boolean): boolean;
    toString(): string;
}