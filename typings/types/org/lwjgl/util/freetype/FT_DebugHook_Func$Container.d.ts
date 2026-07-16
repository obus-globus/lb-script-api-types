import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { FT_DebugHook_Func } from '../../../../org/lwjgl/util/freetype/FT_DebugHook_Func.d.ts'
import type { FT_DebugHook_FuncI } from '../../../../org/lwjgl/util/freetype/FT_DebugHook_FuncI.d.ts'
export class FT_DebugHook_Func$Container extends FT_DebugHook_Func {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): FT_DebugHook_Func;
    static create(paramarg0: (param0: number) => number): FT_DebugHook_Func;
    static createSafe(paramarg0: number): FT_DebugHook_Func;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor(arg0: number, arg1: (param0: number) => number)
    // private delegate: (param0: number) => number;
    invoke(arg0: number): number;
}