import type { AbstractChar2IntFunction } from '../../../../../it/unimi/dsi/fastutil/chars/AbstractChar2IntFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Char2IntFunctions$EmptyFunction extends AbstractChar2IntFunction implements Serializable, Cloneable {
    constructor()
    clear(): void;
    clone(): Object;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: string): boolean;
    defaultReturnValue(): number;
    defaultReturnValue(arg0: number): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): number;
    get(arg0: string): number;
    getOrDefault(arg0: Object, arg1: number): number;
    getOrDefault(arg0: string, arg1: number): number;
    hashCode(): number;
    // private readResolve(): Object;
    size(): number;
    toString(): string;
}