import type { Callback } from '../../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
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
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: boolean, param4: number) => boolean): ExtentDalloc;
    static createSafe(paramarg0: number): ExtentDalloc;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
    invoke(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number): boolean;
}