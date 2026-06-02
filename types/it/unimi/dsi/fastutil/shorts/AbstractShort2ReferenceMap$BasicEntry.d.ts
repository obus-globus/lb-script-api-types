import type { Short2ReferenceMap$Entry } from '../../../../../it/unimi/dsi/fastutil/shorts/Short2ReferenceMap$Entry.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AbstractShort2ReferenceMap$BasicEntry<V extends Object | number | string | boolean> extends Object implements Short2ReferenceMap$Entry<V> {
    constructor()
    constructor(arg0: number, arg1: V)
    constructor(arg0: number, arg1: V)
    key: number;
    value: V;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    getShortKey(): number;
    hashCode(): number;
    setValue(arg0: V): V;
    toString(): string;
}