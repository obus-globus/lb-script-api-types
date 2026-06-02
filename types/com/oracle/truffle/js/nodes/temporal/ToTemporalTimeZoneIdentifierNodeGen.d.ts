import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { IsObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsObjectNode.d.ts'
import type { ToTemporalTimeZoneIdentifierNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalTimeZoneIdentifierNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToTemporalTimeZoneIdentifierNodeGen extends ToTemporalTimeZoneIdentifierNode {
    static create(): ToTemporalTimeZoneIdentifierNode;
    static getUncached(): ToTemporalTimeZoneIdentifierNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private isObjectNode_: IsObjectNode;
    // private state_0_: number;
    execute(arg0Value: Object): TruffleString;
    // private executeAndSpecialize(arg0Value: Object): TruffleString;
}