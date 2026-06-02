import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pointer } from '../../../org/lwjgl/system/Pointer.d.ts'
export abstract class Pointer$Default extends Object implements Pointer {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    constructor(arg0: number)
    // private address: number;
    address(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}