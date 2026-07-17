import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSTemporalPlainDateTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateTimeObject.d.ts'
import type { TemporalUtil$Overflow } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Overflow.d.ts'
export abstract class TemporalAddZonedDateTimeNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    addZonedDateTime(epochNanoseconds: BigInt, timeZone: TruffleString, calendar: TruffleString, years: number, months: number, weeks: number, days: number, norm: BigInt, precalculatedPlainDateTime: JSTemporalPlainDateTimeObject, overflow: TemporalUtil$Overflow, errorBranch: InlinedBranchProfile): BigInt;
    execute(epochNanoseconds: BigInt, timeZone: TruffleString, calendar: TruffleString, years: number, months: number, weeks: number, days: number, norm: BigInt, precalculatedPlainDateTime: JSTemporalPlainDateTimeObject, overflow: TemporalUtil$Overflow): BigInt;
}