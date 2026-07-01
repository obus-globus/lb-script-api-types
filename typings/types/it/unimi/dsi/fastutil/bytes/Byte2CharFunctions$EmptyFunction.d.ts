import type { AbstractByte2CharFunction } from '../../../../../it/unimi/dsi/fastutil/bytes/AbstractByte2CharFunction.d.ts'
import type { Serializable } from '../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../java/lang/Cloneable.d.ts'
export class Byte2CharFunctions$EmptyFunction extends AbstractByte2CharFunction implements Serializable, Cloneable {
    constructor()
    clear(): void;
    clone(): Object;
    containsKey(arg0: Object): boolean;
    containsKey(arg0: number): boolean;
    defaultReturnValue(): string;
    defaultReturnValue(arg0: string): void;
    equals(arg0: Object | null): boolean;
    get(arg0: Object): string;
    get(arg0: number): string;
    getOrDefault(arg0: Object, arg1: string): string;
    getOrDefault(arg0: number, arg1: string): string;
    hashCode(): number;
    // private readResolve(): Object;
    size(): number;
    toString(): string;
}