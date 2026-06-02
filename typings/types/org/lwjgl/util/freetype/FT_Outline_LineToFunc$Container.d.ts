import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { FT_Outline_LineToFunc } from '../../../../org/lwjgl/util/freetype/FT_Outline_LineToFunc.d.ts'
import type { FT_Outline_LineToFuncI } from '../../../../org/lwjgl/util/freetype/FT_Outline_LineToFuncI.d.ts'
export class FT_Outline_LineToFunc$Container extends FT_Outline_LineToFunc {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_Outline_LineToFunc;
    static create(paramarg0: (param0: number, param1: number) => kotlin.Int): FT_Outline_LineToFunc;
    static createSafe(paramarg0: number): FT_Outline_LineToFunc;
    static free(paramarg0: number): void;
    static get(paramarg0: number): Object | null;
    static getSafe(paramarg0: number): Object | null;
    constructor(arg0: number, arg1: (param0: number, param1: number) => kotlin.Int)
    // private delegate: (param0: number, param1: number) => kotlin.Int;
    invoke(arg0: number, arg1: number): number;
}