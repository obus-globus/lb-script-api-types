import type { Reference2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2BooleanMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractReference2BooleanMap$BasicEntry<K extends unknown> extends Object implements Reference2BooleanMap$Entry<K> {
    constructor()
    constructor(arg0: K, arg1: boolean)
    constructor(arg0: K, arg1: boolean)
    key: K;
    readonly key: K;
    value: boolean;
    equals(arg0: Object | null): boolean;
    getBooleanValue(): boolean;
    hashCode(): number;
    setValue(arg0: boolean): boolean;
    toString(): string;
}