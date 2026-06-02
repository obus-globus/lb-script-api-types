import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { FT_Alloc_Func } from '../../../../org/lwjgl/util/freetype/FT_Alloc_Func.d.ts'
import type { FT_Alloc_FuncI } from '../../../../org/lwjgl/util/freetype/FT_Alloc_FuncI.d.ts'
export class FT_Alloc_Func$Container extends FT_Alloc_Func {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_Alloc_Func;
    static create(paramarg0: (param0: number, param1: number) => kotlin.Long): FT_Alloc_Func;
    static createSafe(paramarg0: number): FT_Alloc_Func;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: number) => kotlin.Long)
    // private delegate: (param0: number, param1: number) => kotlin.Long;
    invoke(arg0: number, arg1: number): number;
}