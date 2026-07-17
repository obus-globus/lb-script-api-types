import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { NudgeToCalendarUnitNode$Result } from '../../../../../../com/oracle/truffle/js/nodes/temporal/NudgeToCalendarUnitNode$Result.d.ts'
import type { TemporalAddDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalAddDateNode.d.ts'
import type { TemporalDifferenceDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalDifferenceDateNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { ISODateTimeRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/ISODateTimeRecord.d.ts'
import type { JSTemporalPlainDateObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateObject.d.ts'
import type { NormalizedDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/NormalizedDurationRecord.d.ts'
import type { TemporalUtil$RoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$RoundingMode.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export abstract class NudgeToCalendarUnitNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private calendarDateAdd(ctx: JSContext, realm: JSRealm, calendar: TruffleString, dateTime: ISODateTimeRecord, years: number, months: number, weeks: number, days: number, addDateNode: TemporalAddDateNode, errorBranch: InlinedBranchProfile): JSTemporalPlainDateObject;
    execute(sign: number, duration: NormalizedDurationRecord, originEpochNs: BigInt, destEpochNs: BigInt, isoDateTime: ISODateTimeRecord, timeZone: TruffleString, calendar: TruffleString, increment: number, unit: TemporalUtil$Unit, roundingMode: TemporalUtil$RoundingMode): NudgeToCalendarUnitNode$Result;
    // private getEpochNanosecondsForDateDuration(ctx: JSContext, realm: JSRealm, duration: NormalizedDurationRecord, dateTime: ISODateTimeRecord, calendar: TruffleString, timeZone: TruffleString, addDateNode: TemporalAddDateNode, errorBranch: InlinedBranchProfile): BigInt;
    nudgeToCalendarUnit(sign: number, duration: NormalizedDurationRecord, originEpochNs: BigInt, destEpochNs: BigInt, isoDateTime: ISODateTimeRecord, timeZone: TruffleString, calendar: TruffleString, increment: number, unit: TemporalUtil$Unit, roundingMode: TemporalUtil$RoundingMode, addDateNode: TemporalAddDateNode, differenceDateNode: TemporalDifferenceDateNode, errorBranch: InlinedBranchProfile): NudgeToCalendarUnitNode$Result;
}