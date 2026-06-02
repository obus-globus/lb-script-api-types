import type { ByteBuffer } from '../../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../../java/nio/IntBuffer.d.ts'
import type { CoderResult } from '../../../../../../../java/nio/charset/CoderResult.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CharsetDecoderICU } from '../../../../../../../org/graalvm/shadowed/com/ibm/icu/charset/CharsetDecoderICU.d.ts'
export interface CharsetCallback$Decoder extends Object{
    call(decoder: CharsetDecoderICU, context: Object, source: ByteBuffer, target: CharBuffer, offsets: IntBuffer, buffer: string[], length: number, cr: CoderResult): CoderResult;
}