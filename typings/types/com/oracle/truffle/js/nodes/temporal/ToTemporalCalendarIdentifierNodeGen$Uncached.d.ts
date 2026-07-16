import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { ToTemporalCalendarIdentifierNode } from '../../../../../../com/oracle/truffle/js/nodes/temporal/ToTemporalCalendarIdentifierNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ToTemporalCalendarIdentifierNodeGen$Uncached extends ToTemporalCalendarIdentifierNode implements UnadoptableNode {
    static create(): ToTemporalCalendarIdentifierNode;
    static getUncached(): ToTemporalCalendarIdentifierNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    executeString(arg0Value: Object): TruffleString;
}