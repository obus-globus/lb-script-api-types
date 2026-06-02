import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharsetEncoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetEncoderICU.d.ts'
export interface CharsetCallback$Encoder extends Object{
    call(encoder: CharsetEncoderICU, context: Object, source: CharBuffer, target: ByteBuffer, offsets: IntBuffer, buffer: string[], length: number, cp: number, cr: CoderResult): CoderResult;
}