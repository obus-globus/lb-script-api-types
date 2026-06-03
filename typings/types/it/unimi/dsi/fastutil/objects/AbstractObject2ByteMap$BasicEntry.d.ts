import type { Object2ByteMap$Entry } from '../../../../../it/unimi/dsi/fastutil/objects/Object2ByteMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractObject2ByteMap$BasicEntry<K extends Object | number | string | boolean> extends Object implements Object2ByteMap$Entry<K> {
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