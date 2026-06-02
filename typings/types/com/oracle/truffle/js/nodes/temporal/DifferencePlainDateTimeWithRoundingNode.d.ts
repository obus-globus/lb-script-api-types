import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { JSTemporalPlainDateObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateObject.d.ts'
import type { TemporalDurationWithTotalRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/TemporalDurationWithTotalRecord.d.ts'
import type { TemporalUtil$RoundingMode } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$RoundingMode.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export abstract class DifferencePlainDateTimeWithRoundingNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(plainDate1: JSTemporalPlainDateObject, h1: number, min1: number, s1: number, ms1: number, mus1: number, ns1: number, y2: number, mon2: number, d2: number, h2: number, min2: number, s2: number, ms2: number, mus2: number, ns2: number, calendar: TruffleString, largestUnit: TemporalUtil$Unit, roundingIncrement: number, smallestUnit: TemporalUtil$Unit, roundingMode: TemporalUtil$RoundingMode): TemporalDurationWithTotalRecord;
}