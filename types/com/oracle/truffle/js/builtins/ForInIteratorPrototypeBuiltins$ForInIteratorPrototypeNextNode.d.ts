import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { ListGetNode } from '../../../../../com/oracle/truffle/js/builtins/helper/ListGetNode.d.ts'
import type { ListSizeNode } from '../../../../../com/oracle/truffle/js/builtins/helper/ListSizeNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { CreateIterResultObjectNode } from '../../../../../com/oracle/truffle/js/nodes/access/CreateIterResultObjectNode.d.ts'
import type { GetPrototypeNode } from '../../../../../com/oracle/truffle/js/nodes/access/GetPrototypeNode.d.ts'
import type { HasOnlyShapePropertiesNode } from '../../../../../com/oracle/truffle/js/nodes/access/HasOnlyShapePropertiesNode.d.ts'
import type { JSGetOwnPropertyNode } from '../../../../../com/oracle/truffle/js/nodes/access/JSGetOwnPropertyNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSForInIteratorObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSForInIteratorObject.d.ts'
import type { JSObject } from '../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class ForInIteratorPrototypeBuiltins$ForInIteratorPrototypeNextNode extends JSBuiltinNode {
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
    // private createIterResultObjectNode: CreateIterResultObjectNode;
    // private getOwnPropertyNode: JSGetOwnPropertyNode;
    // private getPrototypeNode: GetPrototypeNode;
    // private findNext(state: JSForInIteratorObject, errorBranch: InlinedBranchProfile, growProfile: InlinedBranchProfile, fastOwnKeysProfile: InlinedConditionProfile, sameShapeProfile: InlinedConditionProfile, listGet: ListGetNode, listSize: ListSizeNode, hasOnlyShapePropertiesNode: HasOnlyShapePropertiesNode): Object;
    invalidReceiver(thisObj: Object): JSObject;
    next(state: JSForInIteratorObject, valuesProfile: InlinedConditionProfile, errorBranch: InlinedBranchProfile, growProfile: InlinedBranchProfile, fastOwnKeysProfile: InlinedConditionProfile, sameShapeProfile: InlinedConditionProfile, listGet: ListGetNode, listSize: ListSizeNode, hasOnlyShapePropertiesNode: HasOnlyShapePropertiesNode): JSObject;
}