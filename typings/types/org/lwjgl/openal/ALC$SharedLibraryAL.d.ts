import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { FunctionProviderLocal } from '../../../org/lwjgl/system/FunctionProviderLocal.d.ts'
import type { SharedLibrary } from '../../../org/lwjgl/system/SharedLibrary.d.ts'
import type { SharedLibrary$Delegate } from '../../../org/lwjgl/system/SharedLibrary$Delegate.d.ts'
export class ALC$SharedLibraryAL extends SharedLibrary$Delegate implements FunctionProviderLocal {
    static BITS32: boolean;
    static BITS64: boolean;
    static CLONG_SHIFT: number;
    static CLONG_SIZE: number;
    static POINTER_SHIFT: number;
    static POINTER_SIZE: number;
    constructor(arg0: SharedLibrary)
    // private alcGetProcAddress: number;
    getFunctionAddress(arg0: ByteBuffer): number;
    getFunctionAddress(arg0: CharSequence): number;
    getFunctionAddress(arg0: number, arg1: ByteBuffer): number;
    getFunctionAddress(arg0: number, arg1: CharSequence): number;
}