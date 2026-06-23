import type { Reference2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractReference2ReferenceMap$BasicEntry<K extends unknown, V extends unknown> extends Object implements Reference2ReferenceMap$Entry<K, V> {
    constructor()
    constructor(arg0: K, arg1: V)
    key: K;
    readonly key: K;
    value: V;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    setValue(arg0: V): V;
    toString(): string;
}