import type { CodePointBuffer$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { CodePointBuffer$Builder } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CodePointBuffer$Builder.d.ts'
import type { CodePointBuffer$Type } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CodePointBuffer$Type.d.ts'
import type { ByteBuffer } from '../../../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CodePointBuffer extends Object {
    static builder(paramarg0: number): CodePointBuffer$Builder;
    private constructor(arg0: CodePointBuffer$Type, arg1: ByteBuffer, arg2: CharBuffer, arg3: IntBuffer)
    constructor(arg0: CodePointBuffer$Type, arg1: ByteBuffer, arg2: CharBuffer, arg3: IntBuffer, arg4: CodePointBuffer$1)
    // private byteBuffer: ByteBuffer;
    // private charBuffer: CharBuffer;
    // private intBuffer: IntBuffer;
    // private type: CodePointBuffer$Type;
    arrayOffset(): number;
    byteArray(): number[];
    charArray(): string[];
    getType(): CodePointBuffer$Type;
    intArray(): number[];
    position(): number;
    remaining(): number;
}