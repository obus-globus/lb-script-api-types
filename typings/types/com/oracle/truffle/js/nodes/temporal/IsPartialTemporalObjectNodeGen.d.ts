import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { PropertyGetNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode.d.ts'
import type { IsPartialTemporalObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/IsPartialTemporalObjectNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsPartialTemporalObjectNodeGen extends IsPartialTemporalObjectNode {
    static create(): IsPartialTemporalObjectNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private getCalendarNode_: PropertyGetNode;
    // private getTimeZoneNode_: PropertyGetNode;
    // private isObjectNode_: IsObjectNode;
    // private state_0_: number;
    execute(arg0Value: Object): boolean;
    // private executeAndSpecialize(arg0Value: Object): boolean;
}