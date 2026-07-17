import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { ISODateTimeRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/ISODateTimeRecord.d.ts'
import type { NormalizedDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/NormalizedDurationRecord.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export abstract class TotalRelativeDurationNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(duration: NormalizedDurationRecord, originEpochNs: BigInt, destEpochNs: BigInt, isoDateTime: ISODateTimeRecord, timeZone: TruffleString, calendar: TruffleString, unit: TemporalUtil$Unit): number;
}