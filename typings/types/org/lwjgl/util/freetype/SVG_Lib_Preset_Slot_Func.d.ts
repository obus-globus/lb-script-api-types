import type { Callback } from '../../../../org/lwjgl/system/Callback.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
import type { SVG_Lib_Preset_Slot_FuncI } from '../../../../org/lwjgl/util/freetype/SVG_Lib_Preset_Slot_FuncI.d.ts'
export abstract class SVG_Lib_Preset_Slot_Func extends Callback implements SVG_Lib_Preset_Slot_FuncI {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static DESCRIPTOR: Callback$Descriptor;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    static create(paramarg0: number): SVG_Lib_Preset_Slot_Func;
    static create(paramarg0: (param0: number, param1: boolean, param2: number) => number): SVG_Lib_Preset_Slot_Func;
    static createSafe(paramarg0: number): SVG_Lib_Preset_Slot_Func;
    static free(paramarg0: number): void;
    static get<T extends CallbackI>(paramarg0: number): T;
    static getSafe<T extends CallbackI>(paramarg0: number): T;
    constructor()
    constructor(arg0: number)
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
    invoke(arg0: number, arg1: boolean, arg2: number): number;
}