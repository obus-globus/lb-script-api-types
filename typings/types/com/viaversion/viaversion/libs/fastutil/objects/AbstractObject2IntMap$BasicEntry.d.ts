import type { Object2IntMap$Entry } from '../../../../../../com/viaversion/viaversion/libs/fastutil/objects/Object2IntMap$Entry.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractObject2IntMap$BasicEntry<K extends Object | number | string | boolean> extends Object implements Object2IntMap$Entry<K> {
    constructor()
    constructor(arg0: K, arg1: number)
    constructor(arg0: K, arg1: number)
    key: K;
    readonly key: K;
    value: number;
    equals(arg0: Object | null): boolean;
    getIntValue(): number;
    hashCode(): number;
    setValue(arg0: number): number;
    toString(): string;
}