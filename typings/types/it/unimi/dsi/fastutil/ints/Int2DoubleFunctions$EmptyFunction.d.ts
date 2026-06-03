import type { AbstractInt2DoubleFunction } from '../../../../../it/unimi/dsi/fastutil/ints/AbstractInt2DoubleFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Int2DoubleFunctions$EmptyFunction extends AbstractInt2DoubleFunction implements Serializable, Cloneable {
    constructor()
    clear(): void;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): number;
    get(arg0: number): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: number, arg1: number): number;
    hashCode(): number;
    // private readResolve(): Object;
    size(): number;
    toString(): string;
}