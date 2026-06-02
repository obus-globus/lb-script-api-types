import type { Object } from '../../../java/lang/Object.d.ts'
import type { STBIZlibCompress } from '../../../org/lwjgl/stb/STBIZlibCompress.d.ts'
import type { STBIZlibCompressI } from '../../../org/lwjgl/stb/STBIZlibCompressI.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
export class STBIZlibCompress$Container extends STBIZlibCompress {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): STBIZlibCompress;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number) => kotlin.Long): STBIZlibCompress;
    static createSafe(paramarg0: number): STBIZlibCompress;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: number) => kotlin.Long)
    // private delegate: (param0: number, param1: number, param2: number, param3: number) => kotlin.Long;
    invoke(arg0: number, arg1: number, arg2: number, arg3: number): number;
}