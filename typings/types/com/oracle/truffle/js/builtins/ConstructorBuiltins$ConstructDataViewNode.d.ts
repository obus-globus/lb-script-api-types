import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ConstructorBuiltins$ConstructWithNewTargetNode } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$ConstructWithNewTargetNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToIndexNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIndexNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSArrayBufferObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject.d.ts'
import type { JSArrayBufferObject$Direct } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Direct.d.ts'
import type { JSArrayBufferObject$Heap } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Heap.d.ts'
import type { JSArrayBufferObject$Interop } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Interop.d.ts'
import type { JSArrayBufferObject$Shared } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayBufferObject$Shared.d.ts'
import type { JSDataViewObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSDataViewObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ConstructorBuiltins$ConstructDataViewNode extends ConstructorBuiltins$ConstructWithNewTargetNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin, isNewTargetCase: boolean)
    // private checkDetachedBuffer(arrayBuffer: JSArrayBufferObject, errorBranch: InlinedBranchProfile): void;
    constructDataView(newTarget: JSDynamicObject, arrayBuffer: JSArrayBufferObject, byteOffset: Object, byteLength: Object, isInteropBuffer: boolean, errorBranch: InlinedBranchProfile, byteLengthCondition: InlinedConditionProfile, offsetToIndexNode: JSToIndexNode, lengthToIndexNode: JSToIndexNode, bufferInterop: InteropLibrary): JSDataViewObject;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    ofDirectArrayBuffer(newTarget: JSDynamicObject, buffer: JSArrayBufferObject$Direct, byteOffset: Object, byteLength: Object, errorBranch: InlinedBranchProfile, byteLengthCondition: InlinedConditionProfile, offsetToIndexNode: JSToIndexNode, lengthToIndexNode: JSToIndexNode): JSDataViewObject;
    ofHeapArrayBuffer(newTarget: JSDynamicObject, buffer: JSArrayBufferObject$Heap, byteOffset: Object, byteLength: Object, errorBranch: InlinedBranchProfile, byteLengthCondition: InlinedConditionProfile, offsetToIndexNode: JSToIndexNode, lengthToIndexNode: JSToIndexNode): JSDataViewObject;
    ofInteropArrayBuffer(newTarget: JSDynamicObject, buffer: JSArrayBufferObject$Interop, byteOffset: Object, byteLength: Object, errorBranch: InlinedBranchProfile, byteLengthCondition: InlinedConditionProfile, offsetToIndexNode: JSToIndexNode, lengthToIndexNode: JSToIndexNode, bufferInterop: InteropLibrary): JSDataViewObject;
    ofInteropBuffer(newTarget: JSDynamicObject, buffer: Object, byteOffset: Object, byteLength: Object, errorBranch: InlinedBranchProfile, byteLengthCondition: InlinedConditionProfile, offsetToIndexNode: JSToIndexNode, lengthToIndexNode: JSToIndexNode, bufferInterop: InteropLibrary): JSDataViewObject;
    ofSharedArrayBuffer(newTarget: JSDynamicObject, buffer: JSArrayBufferObject$Shared, byteOffset: Object, byteLength: Object, errorBranch: InlinedBranchProfile, byteLengthCondition: InlinedConditionProfile, offsetToIndexNode: JSToIndexNode, lengthToIndexNode: JSToIndexNode): JSDataViewObject;
}