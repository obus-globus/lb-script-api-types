import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ArrayPrototypeBuiltins$JSArrayOperation } from '../../../../../com/oracle/truffle/js/builtins/ArrayPrototypeBuiltins$JSArrayOperation.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { TestArrayNode } from '../../../../../com/oracle/truffle/js/nodes/array/TestArrayNode.d.ts'
import type { DeletePropertyNode } from '../../../../../com/oracle/truffle/js/nodes/control/DeletePropertyNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSArrayObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSArrayObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ArrayPrototypeBuiltins$JSArrayReverseNode extends ArrayPrototypeBuiltins$JSArrayOperation {
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
    // private deletePropertyNode: DeletePropertyNode;
    // private deleteProperty(array: Object, index: number): boolean;
    // private reverse(array: Object, isArray: boolean, hasHolesNode: TestArrayNode, bothExistProfile: InlinedConditionProfile, onlyUpperExistsProfile: InlinedConditionProfile, onlyLowerExistsProfile: InlinedConditionProfile): Object;
    reverseGeneric(thisObj: Object, hasHolesNode: TestArrayNode, bothExistProfile: InlinedConditionProfile, onlyUpperExistsProfile: InlinedConditionProfile, onlyLowerExistsProfile: InlinedConditionProfile): Object;
    reverseJSArray(thisObj: JSArrayObject, hasHolesNode: TestArrayNode, bothExistProfile: InlinedConditionProfile, onlyUpperExistsProfile: InlinedConditionProfile, onlyLowerExistsProfile: InlinedConditionProfile): Object;
}