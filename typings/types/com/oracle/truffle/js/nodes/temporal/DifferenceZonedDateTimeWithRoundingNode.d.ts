import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSTemporalPlainDateTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateTimeObject.d.ts'
import type { TemporalDurationWithTotalRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/TemporalDurationWithTotalRecord.d.ts'
import type { TemporalUtil$RoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$RoundingMode.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export abstract class DifferenceZonedDateTimeWithRoundingNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(ns1: BigInt, ns2: BigInt, calendar: TruffleString, timeZone: TruffleString, precalculatedPlainDateTime: JSTemporalPlainDateTimeObject, largestUnit: TemporalUtil$Unit, roundingIncrement: number, smallestUnit: TemporalUtil$Unit, roundingMode: TemporalUtil$RoundingMode): TemporalDurationWithTotalRecord;
}