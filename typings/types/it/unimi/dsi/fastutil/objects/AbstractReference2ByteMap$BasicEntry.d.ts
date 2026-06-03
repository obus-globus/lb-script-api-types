import type { Reference2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Reference2ByteMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractReference2ByteMap$BasicEntry<K extends Object | number | string | boolean> extends Object implements Reference2ByteMap$Entry<K> {
    constructor()
    constructor(arg0: K, arg1: number)
    constructor(arg0: K, arg1: number)
    key: K;
    readonly key: K;
    value: number;
    equals(arg0: Object | null): boolean;
    getByteValue(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    setValue(arg0: number): number;
    toString(): string;
}