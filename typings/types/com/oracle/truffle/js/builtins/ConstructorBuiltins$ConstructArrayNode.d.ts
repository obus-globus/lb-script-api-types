import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ConstructorBuiltins$ConstructArrayNode$ConstructArrayAllocationSite } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$ConstructArrayNode$ConstructArrayAllocationSite.d.ts'
import type { ConstructorBuiltins$ConstructWithNewTargetNode } from '../../../../../com/oracle/truffle/js/builtins/ConstructorBuiltins$ConstructWithNewTargetNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { ArrayCreateNode } from '../../../../../com/oracle/truffle/js/nodes/array/ArrayCreateNode.d.ts'
import type { ToArrayLengthNode } from '../../../../../com/oracle/truffle/js/nodes/cast/ToArrayLengthNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ConstructorBuiltins$ConstructArrayNode extends ConstructorBuiltins$ConstructWithNewTargetNode {
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
    // private arrayAllocationSite: ConstructorBuiltins$ConstructArrayNode$ConstructArrayAllocationSite;
    constructArray0(newTarget: JSDynamicObject, args: Object[]): JSObject;
    constructArrayVarargs(newTarget: JSDynamicObject, args: Object[], isIntegerCase: InlinedBranchProfile, isDoubleCase: InlinedBranchProfile, isObjectCase: InlinedBranchProfile, isLengthZero: InlinedConditionProfile): JSObject;
    constructArrayWithIntLength(newTarget: JSDynamicObject, args: Object[]): JSObject;
    constructWithForeignArg(newTarget: JSDynamicObject, args: Object[], node: Node, interop: InteropLibrary, arrayCreateNode: ArrayCreateNode, isNumber: InlinedConditionProfile, rangeErrorProfile: InlinedBranchProfile): JSObject;
    constructWithLength(newTarget: JSDynamicObject, args: Object[], toArrayLengthNode: ToArrayLengthNode, arrayCreateNode: ArrayCreateNode, len: number): JSObject;
    copy(): JavaScriptNode;
    getIntrinsicDefaultProto(realm: JSRealm): JSDynamicObject;
    getPrototype(realm: JSRealm, newTarget: JSDynamicObject): JSDynamicObject;
}