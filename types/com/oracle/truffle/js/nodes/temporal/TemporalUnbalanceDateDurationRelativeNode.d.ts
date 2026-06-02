import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSTemporalPlainDateObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateObject.d.ts'
export abstract class TemporalUnbalanceDateDurationRelativeNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(year: number, month: number, week: number, day: number, plainRelativeTo: JSTemporalPlainDateObject, calendar: TruffleString): number;
    unbalanceDurationRelative(years: number, months: number, weeks: number, days: number, plainRelativeTo: JSTemporalPlainDateObject, calendar: TruffleString, errorBranch: InlinedBranchProfile): number;
}