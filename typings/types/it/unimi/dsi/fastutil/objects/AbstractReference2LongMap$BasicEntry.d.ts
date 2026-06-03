import type { Reference2LongMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2LongMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractReference2LongMap$BasicEntry<K extends Object | number | string | boolean> extends Object implements Reference2LongMap$Entry<K> {
    constructor()
    constructor(arg0: K, arg1: number)
    constructor(arg0: K, arg1: number)
    key: K;
    readonly key: K;
    value: number;
    equals(arg0: Object | null): boolean;
    getLongValue(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
}