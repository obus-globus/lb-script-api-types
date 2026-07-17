import type { Tag } from '../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString$FromLongNode } from '../../../../../com/oracle/truffle/api/strings/TruffleString$FromLongNode.d.ts'
import type { NumberPrototypeBuiltins$ForeignGetDoubleValueNode } from '../../../../../com/oracle/truffle/js/builtins/NumberPrototypeBuiltins$ForeignGetDoubleValueNode.d.ts'
import type { JavaScriptNode } from '../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsNumberNode } from '../../../../../com/oracle/truffle/js/nodes/cast/IsNumberNode.d.ts'
import type { JSDoubleToStringNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSDoubleToStringNode.d.ts'
import type { JSToDoubleNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { JSToIntegerAsIntNode } from '../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerAsIntNode.d.ts'
import type { JSBuiltin } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltin.d.ts'
import type { JSBuiltinNode } from '../../../../../com/oracle/truffle/js/nodes/function/JSBuiltinNode.d.ts'
import type { JSContext } from '../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSNumberObject } from '../../../../../com/oracle/truffle/js/runtime/builtins/JSNumberObject.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class NumberPrototypeBuiltins$JSNumberToStringNode extends JSBuiltinNode {
    static ARGUMENTS: string;
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static createBuiltin(paramctx: JSContext, parambuiltin: JSBuiltin, paramconstruct: boolean, paramnewTarget: boolean): JSBuiltinNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(context: JSContext, builtin: JSBuiltin)
    toString(): string;
    toString(thisObj: JSNumberObject, radix: Object, toIntegerNode: JSToIntegerAsIntNode, doubleToString: JSDoubleToStringNode, radixOtherBranch: InlinedBranchProfile, radixErrorBranch: InlinedBranchProfile): Object;
    toStringForeignObject(thisObj: Object, radix: Object, node: Node, toIntegerNode: JSToIntegerAsIntNode, doubleToString: JSDoubleToStringNode, fromLong: TruffleString$FromLongNode, radixOtherBranch: InlinedBranchProfile, radixErrorBranch: InlinedBranchProfile, getDoubleValue: NumberPrototypeBuiltins$ForeignGetDoubleValueNode): Object;
    toStringIntRadix10(thisObj: JSNumberObject, radix: Object, fromLong: TruffleString$FromLongNode): Object;
    toStringNoNumber(thisObj: Object, radix: Object): string;
    toStringPrimitive(thisNumber: Object, radix: Object, isNumber: IsNumberNode, toDouble: JSToDoubleNode, toIntegerNode: JSToIntegerAsIntNode, doubleToString: JSDoubleToStringNode, radixOtherBranch: InlinedBranchProfile, radixErrorBranch: InlinedBranchProfile): Object;
    toStringPrimitiveIntRadix10(thisInteger: number, radix: Object, fromLong: TruffleString$FromLongNode): Object;
    toStringPrimitiveRadix10(thisNumber: Object, radix: Object, isNumber: IsNumberNode, doubleToString: JSDoubleToStringNode): Object;
    toStringPrimitiveRadixInt(thisNumber: Object, radix: number, isNumber: IsNumberNode, toDouble: JSToDoubleNode, doubleToString: JSDoubleToStringNode, radixOtherBranch: InlinedBranchProfile, radixErrorBranch: InlinedBranchProfile): Object;
    toStringRadix10(thisObj: JSNumberObject, radix: Object, doubleToString: JSDoubleToStringNode): Object;
}