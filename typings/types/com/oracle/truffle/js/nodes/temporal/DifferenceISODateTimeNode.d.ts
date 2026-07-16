import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { NormalizedDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/NormalizedDurationRecord.d.ts'
import type { TemporalUtil$Unit } from '../../../../../../com/oracle/truffle/js/runtime/util/TemporalUtil$Unit.d.ts'
export abstract class DifferenceISODateTimeNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    differencePlainDateTimeWithRounding(y1: number, mon1: number, d1: number, h1: number, min1: number, s1: number, ms1: number, mus1: number, ns1: number, y2: number, mon2: number, d2: number, h2: number, min2: number, s2: number, ms2: number, mus2: number, ns2: number, calendar: TruffleString, largestUnit: TemporalUtil$Unit, errorBranch: InlinedBranchProfile): NormalizedDurationRecord;
    execute(y1: number, mon1: number, d1: number, h1: number, min1: number, s1: number, ms1: number, mus1: number, ns1: number, y2: number, mon2: number, d2: number, h2: number, min2: number, s2: number, ms2: number, mus2: number, ns2: number, calendar: TruffleString, largestUnit: TemporalUtil$Unit): NormalizedDurationRecord;
}