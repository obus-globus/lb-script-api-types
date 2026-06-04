import type { Short2DoubleMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2DoubleMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractShort2DoubleMap$BasicEntry extends Object implements Short2DoubleMap$Entry {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number)
    key: number;
    value: number;
    equals(arg0: Object | null): boolean;
    getDoubleValue(): number;
    getShortKey(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    toString(): string;
}