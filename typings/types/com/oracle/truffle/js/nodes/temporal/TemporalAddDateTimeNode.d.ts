import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { TemporalAddDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalAddDateNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSTemporalDateTimeRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDateTimeRecord.d.ts'
import type { TemporalUtil$Overflow } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Overflow.d.ts'
export abstract class TemporalAddDateTimeNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    addDateTime(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, microsecond: number, nanosecond: number, calendar: TruffleString, years: number, months: number, weeks: number, days: number, normalizedTimeDuration: BigInt, overflow: TemporalUtil$Overflow, addDateNode: TemporalAddDateNode, errorBranch: InlinedBranchProfile): JSTemporalDateTimeRecord;
    execute(year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number, microsecond: number, nanosecond: number, calendar: TruffleString, years: number, months: number, weeks: number, days: number, normalizedTimeDuration: BigInt, overflow: TemporalUtil$Overflow): JSTemporalDateTimeRecord;
}