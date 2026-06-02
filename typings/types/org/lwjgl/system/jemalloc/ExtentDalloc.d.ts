import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Callback } from '../../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { ExtentDallocI } from '../../../../org/lwjgl/system/jemalloc/ExtentDallocI.d.ts'
export abstract class ExtentDalloc extends Callback implements ExtentDallocI {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): ExtentDalloc;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: boolean, param4: number) => kotlin.Boolean): ExtentDalloc;
    static createSafe(paramarg0: number): ExtentDalloc;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
}