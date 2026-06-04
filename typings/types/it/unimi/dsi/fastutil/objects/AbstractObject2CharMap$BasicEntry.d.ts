import type { Object2CharMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2CharMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractObject2CharMap$BasicEntry<K extends Object | number | string | boolean> extends Object implements Object2CharMap$Entry<K> {
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
    toString(): string;
}