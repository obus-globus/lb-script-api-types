import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { JavaScriptBaseNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptBaseNode.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToIntegerWithoutRoundingNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerWithoutRoundingNode.d.ts'
import type { JSTemporalDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDurationRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ToTemporalPartialDurationRecordNode extends JavaScriptBaseNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    execute(temporalDurationLike: Object, defaults: JSTemporalDurationRecord): JSTemporalDurationRecord;
    toTemporalPartialDurationRecord(temporalDurationLike: Object, defaults: JSTemporalDurationRecord, isObjectNode: IsObjectNode, errorBranch: InlinedBranchProfile, toIntegerIfIntegral: JSToIntegerWithoutRoundingNode, getDays: PropertyGetNode, getHours: PropertyGetNode, getMicroseconds: PropertyGetNode, getMilliseconds: PropertyGetNode, getMinutes: PropertyGetNode, getMonths: PropertyGetNode, getNanoseconds: PropertyGetNode, getSeconds: PropertyGetNode, getWeeks: PropertyGetNode, getYears: PropertyGetNode): JSTemporalDurationRecord;
}