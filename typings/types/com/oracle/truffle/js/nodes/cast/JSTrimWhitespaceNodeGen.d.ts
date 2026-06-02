import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$ReadCharUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$ReadCharUTF16Node.d.ts'
import type { TruffleString$SubstringByteIndexNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$SubstringByteIndexNode.d.ts'
import type { JSTrimWhitespaceNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSTrimWhitespaceNode.d.ts'
export class JSTrimWhitespaceNodeGen extends JSTrimWhitespaceNode {
    static create(): JSTrimWhitespaceNode;
    static getUncached(): JSTrimWhitespaceNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private readRawNode: TruffleString$ReadCharUTF16Node;
    // private state_0_: number;
    // private state_1_: number;
    // private string_substringNode_: TruffleString$SubstringByteIndexNode;
    // private executeAndSpecialize(arg0Value: TruffleString): TruffleString;
    executeString(arg0Value: TruffleString): TruffleString;
}