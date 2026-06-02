import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { RoundRelativeDurationNode$DurationNudgeResultRecord } from '../../../../../../com/oracle/truffle/js/nodes/temporal/RoundRelativeDurationNode$DurationNudgeResultRecord.d.ts'
import type { TemporalAddDateTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalAddDateTimeNode.d.ts'
import type { TemporalDifferenceDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalDifferenceDateNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { ISODateTimeRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/ISODateTimeRecord.d.ts'
import type { NormalizedDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/NormalizedDurationRecord.d.ts'
import type { TemporalDurationWithTotalRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/TemporalDurationWithTotalRecord.d.ts'
import type { TemporalUtil$RoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$RoundingMode.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export abstract class RoundRelativeDurationNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private bubbleRelativeDuration(sign: number, duration0: NormalizedDurationRecord, nudgedEpochNs: BigInt, dateTime: ISODateTimeRecord, calendar: TruffleString, timeZone: TruffleString, largestUnit: TemporalUtil$Unit, smallestUnit: TemporalUtil$Unit, addDateTimeNode: TemporalAddDateTimeNode, errorBranch: InlinedBranchProfile): NormalizedDurationRecord;
    execute(duration: NormalizedDurationRecord, destEpochNs: BigInt, dateTime: ISODateTimeRecord, calendar: TruffleString, timeZone: TruffleString, largestUnit: TemporalUtil$Unit, increment: number, smallestUnit: TemporalUtil$Unit, roundingMode: TemporalUtil$RoundingMode): TemporalDurationWithTotalRecord;
    // private nudgeToCalendarUnit(sign: number, duration: NormalizedDurationRecord, destEpochNs: BigInt, dateTime: ISODateTimeRecord, calendar: TruffleString, timeZone: TruffleString, increment: number, unit: TemporalUtil$Unit, roundingMode: TemporalUtil$RoundingMode, addDateTimeNode: TemporalAddDateTimeNode, differenceDateNode: TemporalDifferenceDateNode, errorBranch: InlinedBranchProfile): RoundRelativeDurationNode$DurationNudgeResultRecord;
    // private nudgeToZonedTime(sign: number, duration: NormalizedDurationRecord, dateTime: ISODateTimeRecord, calendar: TruffleString, timeZone: TruffleString, increment: number, unit: TemporalUtil$Unit, roundingMode: TemporalUtil$RoundingMode, addDateTimeNode: TemporalAddDateTimeNode, errorBranch: InlinedBranchProfile): RoundRelativeDurationNode$DurationNudgeResultRecord;
    roundRelativeDuration(duration0: NormalizedDurationRecord, destEpochNs: BigInt, dateTime: ISODateTimeRecord, calendar: TruffleString, timeZone: TruffleString, largestUnit0: TemporalUtil$Unit, increment: number, smallestUnit: TemporalUtil$Unit, roundingMode: TemporalUtil$RoundingMode, addDateTimeNode: TemporalAddDateTimeNode, differenceDateNode: TemporalDifferenceDateNode, errorBranch: InlinedBranchProfile): TemporalDurationWithTotalRecord;
}