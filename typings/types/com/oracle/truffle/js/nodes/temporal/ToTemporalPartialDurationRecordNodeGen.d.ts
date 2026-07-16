import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { JSToIntegerWithoutRoundingNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToIntegerWithoutRoundingNode.d.ts'
import type { ToTemporalPartialDurationRecordNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalPartialDurationRecordNode.d.ts'
import type { JSTemporalDurationRecord } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalDurationRecord.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToTemporalPartialDurationRecordNodeGen extends ToTemporalPartialDurationRecordNode {
    static create(): ToTemporalPartialDurationRecordNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private getDays_: PropertyGetNode;
    // private getHours_: PropertyGetNode;
    // private getMicroseconds_: PropertyGetNode;
    // private getMilliseconds_: PropertyGetNode;
    // private getMinutes_: PropertyGetNode;
    // private getMonths_: PropertyGetNode;
    // private getNanoseconds_: PropertyGetNode;
    // private getSeconds_: PropertyGetNode;
    // private getWeeks_: PropertyGetNode;
    // private getYears_: PropertyGetNode;
    // private isObjectNode_: IsObjectNode;
    // private state_0_: number;
    // private toIntegerIfIntegral_: JSToIntegerWithoutRoundingNode;
    execute(arg0Value: Object, arg1Value: JSTemporalDurationRecord): JSTemporalDurationRecord;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: JSTemporalDurationRecord): JSTemporalDurationRecord;
}