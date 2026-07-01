import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { CharBuffer } from '../../../../java/nio/CharBuffer.d.ts'
import type { IntBuffer } from '../../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CodePointBuffer$Builder } from '../../../../org/antlr/v4/runtime/CodePointBuffer$Builder.d.ts'
import type { CodePointBuffer$Type } from '../../../../org/antlr/v4/runtime/CodePointBuffer$Type.d.ts'
export class CodePointBuffer extends Object {
    static builder(paramarg0: number): CodePointBuffer$Builder;
    static withBytes(paramarg0: ByteBuffer): CodePointBuffer;
    static withChars(paramarg0: CharBuffer): CodePointBuffer;
    static withInts(paramarg0: IntBuffer): CodePointBuffer;
    constructor(arg0: CodePointBuffer$Type, arg1: ByteBuffer, arg2: CharBuffer, arg3: IntBuffer, arg4: any)
    // private byteBuffer: ByteBuffer;
    // private charBuffer: CharBuffer;
    // private intBuffer: IntBuffer;
    // private type: CodePointBuffer$Type;
    arrayOffset(): number;
    byteArray(): number[];
    charArray(): string[];
    get(arg0: number): number;
    getType(): CodePointBuffer$Type;
    intArray(): number[];
    position(): number;
    position(arg0: number): void;
    remaining(): number;
}