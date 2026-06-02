import type { Object } from '../../../java/lang/Object.d.ts'
import type { Callback$Descriptor } from '../../../org/lwjgl/system/Callback$Descriptor.d.ts'
import type { Pointer } from '../../../org/lwjgl/system/Pointer.d.ts'
export interface CallbackI extends Object, Pointer{
    address(): number;
    callback(arg0: number, arg1: number): void;
    getDescriptor(): Callback$Descriptor;
}