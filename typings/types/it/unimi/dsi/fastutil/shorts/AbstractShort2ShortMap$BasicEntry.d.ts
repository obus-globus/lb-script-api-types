import type { Short2ShortMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ShortMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractShort2ShortMap$BasicEntry extends Object implements Short2ShortMap$Entry {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number)
    key: number;
    value: number;
    equals(arg0: Object | null): boolean;
    getShortKey(): number;
    getShortValue(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    toString(): string;
}