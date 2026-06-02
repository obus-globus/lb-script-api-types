import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { ToTemporalDurationRecordNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalDurationRecordNode.d.ts'
import type { ToTemporalPartialDurationRecordNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalPartialDurationRecordNode.d.ts'
import type { JSTemporalDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDurationRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToTemporalDurationRecordNodeGen extends ToTemporalDurationRecordNode {
    static create(): ToTemporalDurationRecordNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private isObjectNode_: IsObjectNode;
    // private state_0_: number;
    // private toTemporalPartialDurationRecord_: ToTemporalPartialDurationRecordNode;
    execute(arg0Value: Object): JSTemporalDurationRecord;
    // private executeAndSpecialize(arg0Value: Object): JSTemporalDurationRecord;
}