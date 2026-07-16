import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$FromJavaStringNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromJavaStringNode.d.ts'
import type { TruffleString$FromLongNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromLongNode.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSDoubleToStringNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doDouble(d: number, fromLongNode: TruffleString$FromLongNode, isInt: InlinedConditionProfile, isNaN: InlinedConditionProfile, isPositiveInfinity: InlinedConditionProfile, isNegativeInfinity: InlinedConditionProfile, isZero: InlinedConditionProfile, fromJavaStringNode: TruffleString$FromJavaStringNode): TruffleString;
    executeString(operand: Object): TruffleString;
    executeString(operand: number): TruffleString;
}