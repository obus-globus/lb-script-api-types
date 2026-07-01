import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Cloneable } from '../../java/lang/Cloneable.d.ts'
export class Insets extends Object implements Serializable, Cloneable {
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    bottom: number;
    left: number;
    right: number;
    top: number;
    clone(): Object;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    set(arg0: number, arg1: number, arg2: number, arg3: number): void;
    toString(): string;
}