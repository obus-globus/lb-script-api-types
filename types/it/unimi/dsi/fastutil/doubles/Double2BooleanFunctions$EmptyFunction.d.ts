import type { AbstractDouble2BooleanFunction } from '../../../../../it/unimi/dsi/fastutil/doubles/AbstractDouble2BooleanFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Double2BooleanFunctions$EmptyFunction extends AbstractDouble2BooleanFunction implements Serializable, Cloneable {
    constructor()
    clear(): void;
    clone(): Object;
    protected clone(): Object;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): boolean;
    defaultReturnValue(arg0: boolean): void;
    equals(arg0: Object | null): boolean;
    get(arg0: number): boolean;
    getOrDefault(arg0: number, arg1: boolean): boolean;
    hashCode(): number;
    // private readResolve(): Object;
    size(): number;
    toString(): string;
}