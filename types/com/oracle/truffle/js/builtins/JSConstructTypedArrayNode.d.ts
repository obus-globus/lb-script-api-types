import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSConstructTypedArrayNode$IntegerIndexedObjectCreateNode } from '../../../../../com/oracle/truffle/js/builtins/JSConstructTypedArrayNode$IntegerIndexedObjectCreateNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetIteratorFromMethodNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetIteratorFromMethodNode.d.ts'
import type { GetMethodNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { GetPrototypeFromConstructorNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetPrototypeFromConstructorNode.d.ts'
import type { IterableToListNode } from '../../../../../com/oracle/truffle/js/nodes/access/IterableToListNode.d.ts'
import type { ReadElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { WriteElementNode } from '../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { JSGetLengthNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSGetLengthNode.d.ts'
import type { JSToIndexNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIndexNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { ImportValueNode } from '../../../../../com/oracle/truffle/js/nodes/interop/ImportValueNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { TypedArray } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArray.d.ts'
import type { TypedArrayFactory } from '../../../../../com/oracle/truffle/js/runtime/array/TypedArrayFactory.d.ts'
import type { JSArrayBufferObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSArrayBufferObject$Direct } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Direct.d.ts'
import type { JSArrayBufferObject$Heap } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Heap.d.ts'
import type { JSArrayBufferObject$Interop } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Interop.d.ts'
import type { JSArrayBufferObject$Shared } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Shared.d.ts'
import type { JSTypedArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSTypedArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class JSConstructTypedArrayNode extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin, factory: TypedArrayFactory)
    // private factory: TypedArrayFactory;
    // private getPrototypeFromConstructorViewNode: GetPrototypeFromConstructorNode;
    // private integerIndexObjectCreateNode: JSConstructTypedArrayNode$IntegerIndexedObjectCreateNode;
    // private toIndexNode: JSToIndexNode;
    // private checkDetachedBuffer(buffer: JSArrayBufferObject, errorBranch: InlinedBranchProfile): void;
    // private checkLengthLimit(length: number, elementSize: number, errorBranch: InlinedBranchProfile): number;
    createGetIteratorMethod(): GetMethodNode;
    createGetLength(): JSGetLengthNode;
    // private createTypedArray(arrayBuffer: JSArrayBufferObject, typedArray: TypedArray, offset: number, length: number, proto: JSDynamicObject): JSDynamicObject;
    // private createTypedArrayBuffer(length: number, errorBranch: InlinedBranchProfile): JSArrayBufferObject;
    // private createTypedArrayWithLength(length: number, newTarget: JSDynamicObject, errorBranch: InlinedBranchProfile): JSDynamicObject;
    createWriteOwn(): WriteElementNode;
    doArrayBuffer(newTarget: JSDynamicObject, arrayBuffer: JSArrayBufferObject$Heap, byteOffset0: Object, length0: Object, errorBranch: InlinedBranchProfile, lengthIsUndefined: InlinedConditionProfile): JSDynamicObject;
    // private doArrayBufferImpl(arrayBuffer: JSArrayBufferObject, byteOffset0: Object, length0: Object, newTarget: JSDynamicObject, bufferType: number, node: Node, errorBranch: InlinedBranchProfile, lengthIsUndefinedProfile: InlinedConditionProfile, interop: InteropLibrary): JSDynamicObject;
    doDirectArrayBuffer(newTarget: JSDynamicObject, arrayBuffer: JSArrayBufferObject$Direct, byteOffset0: Object, length0: Object, errorBranch: InlinedBranchProfile, lengthIsUndefined: InlinedConditionProfile): JSDynamicObject;
    doEmpty(newTarget: JSDynamicObject, arg0: JSDynamicObject, byteOffset0: Object, length0: Object, errorBranch: InlinedBranchProfile): JSDynamicObject;
    doForeignObject(newTarget: JSDynamicObject, object: Object, byteOffset0: Object, length0: Object, node: Node, interop: InteropLibrary, writeOwnNode: WriteElementNode, importValue: ImportValueNode, errorBranch: InlinedBranchProfile, lengthIsUndefined: InlinedConditionProfile): JSDynamicObject;
    doIntLength(newTarget: JSDynamicObject, length: number, byteOffset0: Object, length0: Object, errorBranch: InlinedBranchProfile): JSDynamicObject;
    doInteropArrayBuffer(newTarget: JSDynamicObject, arrayBuffer: JSArrayBufferObject$Interop, byteOffset0: Object, length0: Object, errorBranch: InlinedBranchProfile, lengthIsUndefined: InlinedConditionProfile, bufferInterop: InteropLibrary): JSDynamicObject;
    doLength(newTarget: JSDynamicObject, arg0: Object, byteOffset0: Object, length0: Object, errorBranch: InlinedBranchProfile): JSDynamicObject;
    doObject(newTarget: JSDynamicObject, object: JSObject, byteOffset0: Object, length0: Object, node: Node, getIteratorMethodNode: GetMethodNode, isIterableProfile: InlinedConditionProfile, writeOwnNode: WriteElementNode, getIteratorFromMethodNode: GetIteratorFromMethodNode, iterableToListNode: IterableToListNode, errorBranch: InlinedBranchProfile, getLengthNode: JSGetLengthNode, readNode: ReadElementNode): JSDynamicObject;
    doSharedArrayBuffer(newTarget: JSDynamicObject, arrayBuffer: JSArrayBufferObject$Shared, byteOffset0: Object, length0: Object, errorBranch: InlinedBranchProfile, lengthIsUndefined: InlinedConditionProfile): JSDynamicObject;
    doTypedArray(newTarget: JSDynamicObject, arrayBufferView: JSTypedArrayObject, byteOffset0: Object, length0: Object, errorBranch: InlinedBranchProfile, bulkCopyProfile: InlinedConditionProfile): JSDynamicObject;
    doUndefinedNewTarget(newTarget: Object, arg0: Object, byteOffset0: Object, length0: Object): JSDynamicObject;
    // private getPrototypeFromConstructorView(newTarget: JSDynamicObject): JSDynamicObject;
    // private integerIndexedObjectCreate(arrayBuffer: JSArrayBufferObject, typedArray: TypedArray, offset: number, length: number, proto: JSDynamicObject): JSDynamicObject;
    // private rangeCheck(condition: boolean, message: string, errorBranch: InlinedBranchProfile): boolean;
    // private rangeCheckIsMultipleOfElementSize(condition: boolean, what: string, name: TruffleString, bytesPerElement: number, errorBranch: InlinedBranchProfile): boolean;
    // private throwInappropriateLengthError(length: number): RuntimeException;
    // private toIndex(target: Object): number;
}