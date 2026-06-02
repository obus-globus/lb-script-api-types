import type { VertexFormat } from '../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IrisTextVertexSink extends Object{
    getUnderlyingByteBuffer(): ByteBuffer;
    getUnderlyingVertexFormat(): VertexFormat;
    quad(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
}