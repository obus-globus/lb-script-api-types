import type { Short2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2BooleanMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractShort2BooleanMap$BasicEntry extends Object implements Short2BooleanMap$Entry {
    constructor()
    constructor(arg0: number, arg1: boolean)
    constructor(arg0: number, arg1: boolean)
    key: number;
    value: boolean;
    equals(arg0: Object | null): boolean;
    getBooleanValue(): boolean;
    getShortKey(): number;
    hashCode(): number;
    setValue(arg0: boolean): boolean;
    toString(): string;
}