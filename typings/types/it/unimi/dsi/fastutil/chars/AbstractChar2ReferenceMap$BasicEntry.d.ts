import type { Char2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/chars/Char2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractChar2ReferenceMap$BasicEntry<V extends Object | number | string | boolean> extends Object implements Char2ReferenceMap$Entry<V> {
    constructor()
    constructor(arg0: string, arg1: V)
    constructor(arg0: string, arg1: V)
    key: string;
    value: V;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    getCharKey(): string;
    hashCode(): number;
    setValue(arg0: V): V;
    toString(): string;
}