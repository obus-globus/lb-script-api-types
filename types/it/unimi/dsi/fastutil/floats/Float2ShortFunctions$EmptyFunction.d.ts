import type { AbstractFloat2ShortFunction } from '../../../../../it/unimi/dsi/fastutil/floats/AbstractFloat2ShortFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Float2ShortFunctions$EmptyFunction extends AbstractFloat2ShortFunction implements Serializable, Cloneable {
    constructor()
    clear(): void;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: number): number;
    getOrDefault(arg0: number, arg1: number): number;
    hashCode(): number;
    // private readResolve(): Object;
    size(): number;
    toString(): string;
}