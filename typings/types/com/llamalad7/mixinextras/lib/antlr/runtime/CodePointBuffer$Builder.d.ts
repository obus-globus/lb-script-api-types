import type { CodePointBuffer$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CodePointBuffer } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CodePointBuffer.d.ts'
import type { CodePointBuffer$Type } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CodePointBuffer$Type.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CodePointBuffer$Builder extends Object {
    private constructor(arg0: number)
    constructor(arg0: number, arg1: CodePointBuffer$1)
    // private byteBuffer: ByteBuffer;
    // private charBuffer: CharBuffer;
    // private intBuffer: IntBuffer;
    // private prevHighSurrogate: number;
    // private type: CodePointBuffer$Type;
    append(arg0: CharBuffer): void;
    // private appendArray(arg0: CharBuffer): void;
    // private appendArrayByte(arg0: CharBuffer): void;
    // private appendArrayChar(arg0: CharBuffer): void;
    // private appendArrayInt(arg0: CharBuffer): void;
    build(): CodePointBuffer;
    // private byteToCharBuffer(arg0: number): void;
    // private byteToIntBuffer(arg0: number): void;
    // private charToIntBuffer(arg0: number): void;
    ensureRemaining(arg0: number): void;
}