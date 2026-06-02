import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { GetOptionsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/intl/GetOptionsObjectNode.d.ts'
import type { TemporalGetOptionNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/TemporalGetOptionNode.d.ts'
import type { ToTemporalTimeNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalTimeNode.d.ts'
import type { JSTemporalPlainTimeObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/temporal/JSTemporalPlainTimeObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToTemporalTimeNodeGen extends ToTemporalTimeNode {
    static create(): ToTemporalTimeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private getOptionNode_: TemporalGetOptionNode;
    // private getOptionsObjectNode_: GetOptionsObjectNode;
    // private isObjectNode_: IsObjectNode;
    // private state_0_: number;
    execute(arg0Value: Object, arg1Value: Object): JSTemporalPlainTimeObject;
    // private executeAndSpecialize(arg0Value: Object, arg1Value: Object): JSTemporalPlainTimeObject;
}