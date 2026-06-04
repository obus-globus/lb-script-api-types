import type { Object2BooleanMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2BooleanMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractObject2BooleanMap$BasicEntry<K extends Object | number | string | boolean> extends Object implements Object2BooleanMap$Entry<K> {
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