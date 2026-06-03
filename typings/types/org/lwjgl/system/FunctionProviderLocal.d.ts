import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { FunctionProvider } from '../../../org/lwjgl/system/FunctionProvider.d.ts'
export interface FunctionProviderLocal extends Object, FunctionProvider{
    getFunctionAddress(arg0: CharSequence): number;
    getFunctionAddress(arg0: CharSequence): number;
    getFunctionAddress(arg0: number, arg1: ByteBuffer): number;
    getFunctionAddress(arg0: number, arg1: CharSequence): number;
}