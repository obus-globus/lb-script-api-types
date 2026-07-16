import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { FT_SpanFunc } from '../../../../org/lwjgl/util/freetype/FT_SpanFunc.d.ts'
import type { FT_SpanFuncI } from '../../../../org/lwjgl/util/freetype/FT_SpanFuncI.d.ts'
export class FT_SpanFunc$Container extends FT_SpanFunc {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_SpanFunc;
    static create(paramarg0: (param0: number, param1: number, param2: number, param3: number) => void): FT_SpanFunc;
    static createSafe(paramarg0: number): FT_SpanFunc;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor(arg0: number, arg1: (param0: number, param1: number, param2: number, param3: number) => void)
    // private delegate: (param0: number, param1: number, param2: number, param3: number) => void;
    invoke(arg0: number, arg1: number, arg2: number, arg3: number): void;
}