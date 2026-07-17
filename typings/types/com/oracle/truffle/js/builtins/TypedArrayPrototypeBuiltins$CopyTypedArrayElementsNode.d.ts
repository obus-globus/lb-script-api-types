import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { TypedArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { JSArrayBufferObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
export abstract class TypedArrayPrototypeBuiltins$CopyTypedArrayElementsNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private asByteBufferInterop: InteropLibrary;
    // private hostInterop: InteropLibrary;
    execute(targetBuffer: JSArrayBufferObject, sourceBuffer: JSArrayBufferObject, targetByteIndex: number, sourceByteIndex: number, sourceLength: number, targetElementSize: number, sourceElementSize: number, targetType: TypedArray, sourceType: TypedArray, sourceByteBuffer: ByteBuffer, targetByteBuffer: ByteBuffer, distinctBuffers: boolean): void;
    execute(targetBuffer: JSArrayBufferObject, sourceBuffer: JSArrayBufferObject, targetByteIndex: number, sourceByteIndex: number, sourceLength: number, targetElementSize: number, sourceElementSize: number, targetType: TypedArray, sourceType: TypedArray, distinctBuffers: boolean): void;
    // private getByteBufferFromInteropBuffer(interopBuffer: JSArrayBufferObject): ByteBuffer;
}