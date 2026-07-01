import type { AbstractReference2ReferenceFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractReference2ReferenceFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Reference2ReferenceFunctions$EmptyFunction<K extends unknown, V extends unknown> extends AbstractReference2ReferenceFunction<K, V> implements Serializable, Cloneable {
    constructor()
    clear(): void;
    clone(): Object;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): V;
    defaultReturnValue(arg0: V): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): V;
    getOrDefault(arg0: Object, arg1: V): V;
    hashCode(): number;
    // private readResolve(): Object;
    size(): number;
    toString(): string;
}