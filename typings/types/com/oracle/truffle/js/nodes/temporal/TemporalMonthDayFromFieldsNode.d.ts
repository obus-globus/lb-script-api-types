import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSToIntegerOrInfinityNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerOrInfinityNode.d.ts'
import type { JSTemporalPlainMonthDayObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainMonthDayObject.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TemporalUtil$Overflow } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Overflow.d.ts'
export abstract class TemporalMonthDayFromFieldsNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(calendar: TruffleString, fields: JSDynamicObject, overflow: TemporalUtil$Overflow): JSTemporalPlainMonthDayObject;
    monthDayFromFields(calendar: TruffleString, fields: JSDynamicObject, overflow: TemporalUtil$Overflow, toIntOrInfinityNode: JSToIntegerOrInfinityNode, errorBranch: InlinedBranchProfile): JSTemporalPlainMonthDayObject;
}