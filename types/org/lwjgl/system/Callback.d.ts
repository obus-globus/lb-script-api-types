import type { Object } from '../../../java/lang/Object.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { NativeResource } from '../../../org/lwjgl/system/NativeResource.d.ts'
import type { Pointer } from '../../../org/lwjgl/system/Pointer.d.ts'
export abstract class Callback extends Object implements NativeResource, Pointer {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number)
    constructor(arg0: Callback$Descriptor)
    // private address: number;
    address(): number;
    close(): void;
    equals(arg0: Object | null): boolean;
    free(): void;
    hashCode(): number;
    toString(): string;
}