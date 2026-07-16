import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ToTemporalTimeZoneIdentifierNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalTimeZoneIdentifierNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToTemporalTimeZoneIdentifierNodeGen$Uncached extends ToTemporalTimeZoneIdentifierNode implements UnadoptableNode {
    static getUncached(): ToTemporalTimeZoneIdentifierNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: Object): TruffleString;
}