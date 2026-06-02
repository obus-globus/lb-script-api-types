import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { InlinedExactClassProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedExactClassProfile.d.ts'
import type { ArrayPrototypeBuiltins$JSArrayOperation } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$JSArrayOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSArrayFirstElementIndexNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSArrayFirstElementIndexNode.d.ts'
import type { JSArrayLastElementIndexNode } from '../../../../../com/oracle/truffle/js/nodes/array/JSArrayLastElementIndexNode.d.ts'
import type { TestArrayNode } from '../../../../../com/oracle/truffle/js/nodes/array/TestArrayNode.d.ts'
import type { DeletePropertyNode } from '../../../../../com/oracle/truffle/js/nodes/control/DeletePropertyNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayPrototypeBuiltins$JSArrayShiftNode extends ArrayPrototypeBuiltins$JSArrayOperation {
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
    constructor(context: JSContext, builtin: JSBuiltin)
    shiftForeign(thisObj: Object, arrays: InteropLibrary, lengthIsZero: InlinedConditionProfile): Object;
    shiftGeneric(thisObj: Object, deletePropertyNode: DeletePropertyNode, lengthIsZero: InlinedConditionProfile): Object;
    shiftSparse(thisObj: JSArrayObject, deletePropertyNode: DeletePropertyNode, lengthIsZero: InlinedConditionProfile, firstElementIndexNode: JSArrayFirstElementIndexNode, lastElementIndexNode: JSArrayLastElementIndexNode): Object;
    shiftWithHoles(thisObj: JSArrayObject, hasHolesNode: TestArrayNode, isSealedNode: TestArrayNode, deletePropertyNode: DeletePropertyNode, lengthIsZero: InlinedConditionProfile): Object;
    shiftWithoutHoles(thisObj: JSArrayObject, hasHolesNode: TestArrayNode, isSealedNode: TestArrayNode, arrayTypeProfile: InlinedExactClassProfile, lengthIsZero: InlinedConditionProfile, lengthLargerOne: InlinedConditionProfile): Object;
}