import type { Reference2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2CharMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractReference2CharMap$BasicEntry<K extends Object | number | string | boolean> extends Object implements Reference2CharMap$Entry<K> {
    constructor()
    constructor(arg0: K, arg1: string)
    constructor(arg0: K, arg1: string)
    key: K;
    readonly key: K;
    value: string;
    equals(arg0: Object | null): boolean;
    getCharValue(): string;
    hashCode(): number;
    setValue(arg0: string): string;
    setValue(arg0: string): string;
    toString(): string;
}