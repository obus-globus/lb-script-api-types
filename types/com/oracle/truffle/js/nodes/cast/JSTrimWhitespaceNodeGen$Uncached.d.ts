import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSTrimWhitespaceNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSTrimWhitespaceNode.d.ts'
export class JSTrimWhitespaceNodeGen$Uncached extends JSTrimWhitespaceNode implements UnadoptableNode {
    static create(): JSTrimWhitespaceNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    executeString(arg0Value: TruffleString): TruffleString;
}