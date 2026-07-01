import type { AbstractReference2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/objects/AbstractReference2ShortFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Reference2ShortFunctions$EmptyFunction<K extends unknown> extends AbstractReference2ShortFunction<K> implements Serializable, Cloneable {
    constructor()
    clear(): void;
    clone(): Object;
    containsKey(arg0: Object): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    getOrDefault(arg0: Object, arg1: number): number;
    getShort(arg0: Object): number;
    hashCode(): number;
    // private readResolve(): Object;
    size(): number;
    toString(): string;
}