import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetMethodNode } from '../../../../../../com/oracle/truffle/js/nodes/access/GetMethodNode.d.ts'
import type { IsJSObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsJSObjectNode.d.ts'
import type { JSBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSBinaryNode.d.ts'
import type { JSToBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanNode.d.ts'
import type { JSFunctionCallNode } from '../../../../../../com/oracle/truffle/js/nodes/function/JSFunctionCallNode.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class InstanceofNode extends JSBinaryNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramcontext: JSContext): InstanceofNode;
    static create(paramcontext: JSContext, paramleft: JavaScriptNode, paramright: JavaScriptNode): InstanceofNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, left: JavaScriptNode, right: JavaScriptNode)
    // private context: JSContext;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    createGetMethodHasInstance(): GetMethodNode;
    doBigIntTarget(obj: Object, target: BigInt): boolean;
    doBooleanTarget(obj: Object, target: boolean): boolean;
    doDoubleTarget(obj: Object, target: number): boolean;
    doForeignTargetJSType(instance: JSDynamicObject, target: Object): boolean;
    doForeignTargetOther(instance: Object, target: Object, interop: InteropLibrary): boolean;
    doJSObject(obj: Object, target: JSDynamicObject, node: Node, isObjectNode: IsJSObjectNode, getMethodHasInstanceNode: GetMethodNode, toBooleanNode: JSToBooleanNode, callHasInstanceNode: JSFunctionCallNode, isCallableNode: IsCallableNode, hasInstanceProfile: InlinedConditionProfile, errorBranch: InlinedBranchProfile): boolean;
    doLongTarget(obj: Object, target: number): boolean;
    doNullOrUndefinedTarget(obj: Object, target: Object): boolean;
    doStringTarget(obj: Object, target: TruffleString): boolean;
    doSymbolTarget(obj: Object, target: Symbol): boolean;
    executeBoolean(frame: VirtualFrame): boolean;
    executeBoolean(left: Object, right: Object): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
}