import type { ByteBuffer } from '../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
export interface APIUtil$Encoder extends Object{
    encode(arg0: CharSequence, arg1: boolean): ByteBuffer;
}