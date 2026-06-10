import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { IntFunction } from '../../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { IrisTextVertexSink } from '../../../../net/irisshaders/iris/api/v0/IrisTextVertexSink.d.ts'
import type { IrisTextVertexSinkImpl$TextQuadView } from '../../../../net/irisshaders/iris/vertices/IrisTextVertexSinkImpl$TextQuadView.d.ts'
import type { Vector3f } from '../../../../org/joml/Vector3f.d.ts'
export class IrisTextVertexSinkImpl extends Object implements IrisTextVertexSink {
    constructor(arg0: number, arg1: (param0: number) => ByteBuffer)
    // private buffer: ByteBuffer;
    // private elementOffset: number;
    // private quad: IrisTextVertexSinkImpl$TextQuadView;
    // private saveNormal: Vector3f;
    // private uSum: number;
    // private vSum: number;
    // private vertexCount: number;
    getUnderlyingByteBuffer(): ByteBuffer;
    getUnderlyingVertexFormat(): VertexFormat;
    quad(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number): void;
    // private vertex(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
}