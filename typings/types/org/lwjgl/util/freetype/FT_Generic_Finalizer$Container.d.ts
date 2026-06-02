import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { FT_Generic_Finalizer } from '../../../../org/lwjgl/util/freetype/FT_Generic_Finalizer.d.ts'
import type { FT_Generic_FinalizerI } from '../../../../org/lwjgl/util/freetype/FT_Generic_FinalizerI.d.ts'
export class FT_Generic_Finalizer$Container extends FT_Generic_Finalizer {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_Generic_Finalizer;
    static create(paramarg0: (param0: number) => void): FT_Generic_Finalizer;
    static createSafe(paramarg0: number): FT_Generic_Finalizer;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number) => void)
    // private delegate: (param0: number) => void;
    invoke(arg0: number): void;
}