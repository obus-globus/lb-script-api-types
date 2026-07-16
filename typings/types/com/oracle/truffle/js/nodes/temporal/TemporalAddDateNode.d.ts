import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSTemporalDurationObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDurationObject.d.ts'
import type { JSTemporalPlainDateObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateObject.d.ts'
import type { TemporalUtil$Overflow } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Overflow.d.ts'
export abstract class TemporalAddDateNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    addDate(calendar: TruffleString, plainDate: JSTemporalPlainDateObject, duration: JSTemporalDurationObject, overflow: TemporalUtil$Overflow, errorBranch: InlinedBranchProfile): JSTemporalPlainDateObject;
    execute(calendar: TruffleString, plainDate: JSTemporalPlainDateObject, duration: JSTemporalDurationObject, overflow: TemporalUtil$Overflow): JSTemporalPlainDateObject;
}