import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TypedArrayPrototypeBuiltins$CopyTypedArrayElementsNode } from '../../../../../com/oracle/truffle/js/builtins/TypedArrayPrototypeBuiltins$CopyTypedArrayElementsNode.d.ts'
import type { TypedArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { JSArrayBufferObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
export class TypedArrayPrototypeBuiltinsFactory$CopyTypedArrayElementsNodeGen extends TypedArrayPrototypeBuiltins$CopyTypedArrayElementsNode {
    static create(): TypedArrayPrototypeBuiltins$CopyTypedArrayElementsNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private copyTypedArrayElementsFromInteropBufferNode_field1_: InteropLibrary;
    // private getBufferElementNode_field1_: Node;
    // private setBufferElementNode_field1_: Node;
    // private state_0_: number;
    execute(arg0Value: JSArrayBufferObject, arg1Value: JSArrayBufferObject, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: number, arg7Value: TypedArray, arg8Value: TypedArray, arg9Value: ByteBuffer, arg10Value: ByteBuffer, arg11Value: boolean): void;
    execute(targetBuffer: JSArrayBufferObject, sourceBuffer: JSArrayBufferObject, targetByteIndex: number, sourceByteIndex: number, sourceLength: number, targetElementSize: number, sourceElementSize: number, targetType: TypedArray, sourceType: TypedArray, distinctBuffers: boolean): void;
    // private executeAndSpecialize(arg0Value: JSArrayBufferObject, arg1Value: JSArrayBufferObject, arg2Value: number, arg3Value: number, arg4Value: number, arg5Value: number, arg6Value: number, arg7Value: TypedArray, arg8Value: TypedArray, arg9Value: ByteBuffer, arg10Value: ByteBuffer, arg11Value: boolean): void;
}