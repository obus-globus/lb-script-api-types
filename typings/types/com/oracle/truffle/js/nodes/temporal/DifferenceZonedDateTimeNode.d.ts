import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { TemporalDifferenceDateNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalDifferenceDateNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { JSTemporalPlainDateTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainDateTimeObject.d.ts'
import type { NormalizedDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/NormalizedDurationRecord.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export abstract class DifferenceZonedDateTimeNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    differenceZonedDateTime(ns1: BigInt, ns2: BigInt, timeZone: TruffleString, calendar: TruffleString, largestUnit: TemporalUtil$Unit, startDateTime: JSTemporalPlainDateTimeObject, differenceDateNode: TemporalDifferenceDateNode): NormalizedDurationRecord;
    execute(ns1: BigInt, ns2: BigInt, timeZone: TruffleString, calendar: TruffleString, largestUnit: TemporalUtil$Unit, startDateTime: JSTemporalPlainDateTimeObject): NormalizedDurationRecord;
}