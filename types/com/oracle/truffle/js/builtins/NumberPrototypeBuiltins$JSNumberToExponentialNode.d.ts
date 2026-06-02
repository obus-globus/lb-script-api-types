import type { InteropLibrary } from '../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsNumberNode } from '../../../../../com/oracle/truffle/js/nodes/cast/IsNumberNode.d.ts'
import type { JSToDoubleNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { JSToIntegerAsIntNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerAsIntNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSNumberObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSNumberObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class NumberPrototypeBuiltins$JSNumberToExponentialNode extends JSBuiltinNode {
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
    // private checkDigits(digits: number, node: Node, digitsErrorBranch: InlinedBranchProfile): void;
    toExponential(thisNumber: JSNumberObject, fractionDigits: Object, digitsErrorBranch: InlinedBranchProfile, toIntegerNode: JSToIntegerAsIntNode): Object;
    // private toExponential(value: number, digits: number, node: Node, digitsErrorBranch: InlinedBranchProfile): Object;
    toExponentialForeignObject(thisNumber: Object, fractionDigits: Object, node: Node, digitsErrorBranch: InlinedBranchProfile, toIntegerNode: JSToIntegerAsIntNode, interop: InteropLibrary): Object;
    toExponentialForeignObjectUndefined(thisNumber: Object, fractionDigits: Object, interop: InteropLibrary): Object;
    toExponentialOther(thisNumber: Object, fractionDigits: Object): Object;
    toExponentialPrimitive(thisNumber: Object, fractionDigits: Object, node: Node, isNumber: IsNumberNode, toDouble: JSToDoubleNode, digitsErrorBranch: InlinedBranchProfile, toIntegerNode: JSToIntegerAsIntNode): Object;
    toExponentialUndefined(thisNumber: JSNumberObject, fractionDigits: Object): Object;
}