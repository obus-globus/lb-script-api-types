import type { Short2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2CharMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractShort2CharMap$BasicEntry extends Object implements Short2CharMap$Entry {
    constructor()
    constructor(arg0: number, arg1: string)
    constructor(arg0: number, arg1: string)
    key: number;
    value: string;
    equals(arg0: Object | null): boolean;
    getCharValue(): string;
    getShortKey(): number;
    hashCode(): number;
    setValue(arg0: string): string;
    toString(): string;
}