import type { MCVersion } from '../../../../com/seedfinding/mccore/version/MCVersion.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class VersionMap$Entry<V extends unknown> extends Object implements Map$Entry<MCVersion, V> {
    constructor(arg0: MCVersion, arg1: V)
    readonly key: MCVersion;
    readonly key: MCVersion;
    readonly value: V;
    readonly value: V;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    setValue(arg0: V): V;
}