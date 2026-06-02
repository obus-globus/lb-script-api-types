import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Callback$Descriptor } from '../../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { CallbackI } from '../../../../org/lwjgl/system/CallbackI.d.ts'
export interface SVG_Lib_Free_FuncI extends Object, CallbackI{
    address(): number;
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
    invoke(arg0: number): void;
}