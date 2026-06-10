import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { InlinedConditionProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsNumberNode } from '../../../../../com/oracle/truffle/js/nodes/cast/IsNumberNode.d.ts'
import type { JSDoubleToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSDoubleToStringNode.d.ts'
import type { JSToIntegerAsIntNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerAsIntNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSNumberObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSNumberObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class NumberPrototypeBuiltins$JSNumberToFixedNode extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    toFixed(thisNumber: JSNumberObject, fractionDigits: Object, toIntegerNode: JSToIntegerAsIntNode, doubleToString: JSDoubleToStringNode, digitsErrorBranch: InlinedBranchProfile, nanBranch: InlinedBranchProfile, dtoaOrString: InlinedConditionProfile): Object;
    toFixedForeignObject(thisNumber: Object, fractionDigits: Object, node: Node, toIntegerNode: JSToIntegerAsIntNode, doubleToString: JSDoubleToStringNode, digitsErrorBranch: InlinedBranchProfile, nanBranch: InlinedBranchProfile, dtoaOrString: InlinedConditionProfile, interop: InteropLibrary): Object;
    toFixedGeneric(thisNumber: Object, fractionDigits: Object): Object;
    // private toFixedIntl(value: number, digits: number, node: Node, doubleToString: JSDoubleToStringNode, digitsErrorBranch: InlinedBranchProfile, nanBranch: InlinedBranchProfile, dtoaOrString: InlinedConditionProfile): Object;
    toFixedJava(thisNumber: Object, fractionDigits: Object, isNumber: IsNumberNode, toIntegerNode: JSToIntegerAsIntNode, doubleToString: JSDoubleToStringNode, digitsErrorBranch: InlinedBranchProfile, nanBranch: InlinedBranchProfile, dtoaOrString: InlinedConditionProfile): Object;
}