import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { FT_Stream_CloseFunc } from '../../../../org/lwjgl/util/freetype/FT_Stream_CloseFunc.d.ts'
import type { FT_Stream_CloseFuncI } from '../../../../org/lwjgl/util/freetype/FT_Stream_CloseFuncI.d.ts'
export class FT_Stream_CloseFunc$Container extends FT_Stream_CloseFunc {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_Stream_CloseFunc;
    static create(paramarg0: (param0: number) => void): FT_Stream_CloseFunc;
    static createSafe(paramarg0: number): FT_Stream_CloseFunc;
    static free(paramarg0: number): void;
    static get(paramarg0: number): CallbackI | null;
    static getSafe(paramarg0: number): CallbackI | null;
    constructor(arg0: number, arg1: (param0: number) => void)
    // private delegate: (param0: number) => void;
    invoke(arg0: number): void;
}