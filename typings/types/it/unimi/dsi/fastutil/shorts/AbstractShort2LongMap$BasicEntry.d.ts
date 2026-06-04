import type { Short2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2LongMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractShort2LongMap$BasicEntry extends Object implements Short2LongMap$Entry {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number)
    key: number;
    value: number;
    equals(arg0: Object | null): boolean;
    getLongValue(): number;
    getShortKey(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    toString(): string;
}