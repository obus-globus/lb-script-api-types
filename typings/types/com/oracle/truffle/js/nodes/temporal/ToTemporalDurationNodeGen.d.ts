import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { ToTemporalDurationNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalDurationNode.d.ts'
import type { ToTemporalDurationRecordNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalDurationRecordNode.d.ts'
import type { JSTemporalDurationObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDurationObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToTemporalDurationNodeGen extends ToTemporalDurationNode {
    static create(): ToTemporalDurationNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    // private toTemporalDurationRecord_: ToTemporalDurationRecordNode;
    execute(arg0Value: Object): JSTemporalDurationObject;
    // private executeAndSpecialize(arg0Value: Object): JSTemporalDurationObject;
}