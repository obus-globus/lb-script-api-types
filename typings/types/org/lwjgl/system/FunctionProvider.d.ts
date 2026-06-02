import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export interface FunctionProvider extends Object{
    getFunctionAddress(arg0: ByteBuffer): number;
    getFunctionAddress(arg0: CharSequence): number;
}