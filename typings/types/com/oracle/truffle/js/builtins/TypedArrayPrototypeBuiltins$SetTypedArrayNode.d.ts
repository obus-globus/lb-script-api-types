import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TypedArrayPrototypeBuiltins$CopyTypedArrayElementsNode } from '../../../../../com/oracle/truffle/js/builtins/TypedArrayPrototypeBuiltins$CopyTypedArrayElementsNode.d.ts'
import type { TypedArrayPrototypeBuiltins$SetBufferElementTypeDispatchNode } from '../../../../../com/oracle/truffle/js/builtins/TypedArrayPrototypeBuiltins$SetBufferElementTypeDispatchNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { ReadElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { JSGetLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSGetLengthNode.d.ts'
import type { TypedArrayLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/TypedArrayLengthNode.d.ts'
import type { JSToBigIntNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToBigIntNode.d.ts'
import type { JSToNumberNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSToObjectNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToObjectNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { JSArrayBufferObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class TypedArrayPrototypeBuiltins$SetTypedArrayNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private getByteBufferInterop: InteropLibrary;
    // private interopLibrary: InteropLibrary;
    // private toBigIntNode: JSToBigIntNode;
    // private toNumberNode: JSToNumberNode;
    // private cloneArrayBuffer(sourceBuffer: JSArrayBufferObject, sourceArray: TypedArray, srcByteLength: number, srcByteOffset: number, context: JSContext, isDirectProfile: InlinedConditionProfile, node: Node): JSArrayBufferObject;
    // private cloneInteropArrayBuffer(sourceBuffer: JSArrayBufferObject, srcByteLength: number, srcByteOffset: number, context: JSContext, interop: InteropLibrary): JSArrayBufferObject;
    // private copyTypedArrayElementsDistinctBuffers(targetBuffer: JSArrayBufferObject, sourceBuffer: JSArrayBufferObject, targetType: TypedArray, sourceType: TypedArray, targetOffset: number, targetByteOffset: number, sourceLength: number, sourceByteIndex: number, copyTypedArrayElementsNode: TypedArrayPrototypeBuiltins$CopyTypedArrayElementsNode, node: Node): void;
    execute(targetObj: JSTypedArrayObject, array: Object, targetOffset: number, context: JSContext): void;
    // private getByteBufferFromInteropBuffer(interopBuffer: JSArrayBufferObject): ByteBuffer;
    // private getInterop(): InteropLibrary;
    setTypedArrayFromArrayLike(targetObj: JSTypedArrayObject, array: Object, targetOffset: number, context: JSContext, typedArrayLengthNode: TypedArrayLengthNode, readElementNode: ReadElementNode, setBufferElementNode: TypedArrayPrototypeBuiltins$SetBufferElementTypeDispatchNode, errorBranch: InlinedBranchProfile, toObjectNode: JSToObjectNode, getLengthNode: JSGetLengthNode): void;
    setTypedArrayFromFastArray(targetObj: JSTypedArrayObject, array: JSArrayObject, targetOffset: number, context: JSContext, typedArrayLengthNode: TypedArrayLengthNode, readElementNode: ReadElementNode, setBufferElementNode: TypedArrayPrototypeBuiltins$SetBufferElementTypeDispatchNode, errorBranch: InlinedBranchProfile): void;
    setTypedArrayFromTypedArray(targetObj: JSTypedArrayObject, array: JSTypedArrayObject, targetOffset: number, context: JSContext, copyTypedArrayElementsNode: TypedArrayPrototypeBuiltins$CopyTypedArrayElementsNode, typedArrayLengthNode: TypedArrayLengthNode, errorBranch: InlinedBranchProfile, sameBufferProf: InlinedConditionProfile, isDirectProf: InlinedConditionProfile): void;
    toBigInt(value: Object): Object;
    toNumber(value: Object): Object;
}