import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { BranchProfile } from '../../../../../com/oracle/truffle/api/profiles/BranchProfile.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ArrayPrototypeBuiltins$JSArrayOperationWithToInt } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$JSArrayOperationWithToInt.d.ts'
import type { ArrayPrototypeBuiltins$JSArraySpliceNode$SpliceJSArrayNode } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$JSArraySpliceNode$SpliceJSArrayNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { GetPrototypeNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetPrototypeNode.d.ts'
import type { DeletePropertyNode } from '../../../../../com/oracle/truffle/js/nodes/control/DeletePropertyNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { ScriptArray } from '../../../../../com/oracle/truffle/js/runtime/array/ScriptArray.d.ts'
import type { JSArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { JSDynamicObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayPrototypeBuiltins$JSArraySpliceNode extends ArrayPrototypeBuiltins$JSArrayOperationWithToInt {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    // private arrayInterop: InteropLibrary;
    // private branchA: BranchProfile;
    // private branchB: BranchProfile;
    // private deletePropertyNode: DeletePropertyNode;
    // private needMoveDeleteBranch: BranchProfile;
    mustUseElementwise(obj: JSDynamicObject, expectedLength: number, array: ScriptArray, getPrototypeNode: GetPrototypeNode): boolean;
    splice(thisArg: Object, args: Object[], spliceJSArray: ArrayPrototypeBuiltins$JSArraySpliceNode$SpliceJSArrayNode, branchDelete: InlinedBranchProfile, objectBranch: InlinedBranchProfile, argsLength0Profile: InlinedConditionProfile, argsLength1Profile: InlinedConditionProfile, offsetProfile: InlinedConditionProfile, needInsertBranch: InlinedBranchProfile): Object;
    // private spliceForeignArray(thisObj: Object, len: number, actualStart: number, actualDeleteCount: number, itemCount: number): void;
    // private spliceInsert(thisObj: Object, actualStart: number, args: Object[]): void;
    spliceJSArrayBlockwise(thisObj: JSArrayObject, actualStart: number, actualDeleteCount: number, itemCount: number, array: ScriptArray): void;
    spliceJSArrayElementwise(thisObj: JSArrayObject, len: number, actualStart: number, actualDeleteCount: number, itemCount: number): void;
    // private spliceJSArrayElementwiseWalkDown(thisObj: JSArrayObject, len: number, actualStart: number, actualDeleteCount: number, itemCount: number): void;
    // private spliceJSArrayElementwiseWalkUp(thisObj: JSArrayObject, len: number, actualStart: number, actualDeleteCount: number, itemCount: number): void;
    // private spliceJSObject(thisObj: JSObject, len: number, actualStart: number, actualDeleteCount: number, itemCount: number): void;
    // private spliceJSObjectMove(thisObj: JSObject, len: number, actualStart: number, actualDeleteCount: number, itemCount: number): void;
    // private spliceJSObjectShrink(thisObj: JSObject, len: number, actualStart: number, actualDeleteCount: number, itemCount: number): void;
    // private spliceMoveValue(thisObj: JSObject, fromIndex: number, toIndex: number): void;
    // private spliceRead(thisObj: Object, actualStart: number, actualDeleteCount: number, aObj: Object): void;
}