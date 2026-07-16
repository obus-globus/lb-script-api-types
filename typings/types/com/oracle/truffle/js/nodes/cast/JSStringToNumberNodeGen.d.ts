import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSStringToNumberNoTrimNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNoTrimNode.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSTrimWhitespaceNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSTrimWhitespaceNode.d.ts'
export class JSStringToNumberNodeGen extends JSStringToNumberNode {
    static create(): JSStringToNumberNode;
    static getUncached(): JSStringToNumberNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private state_0_: number;
    // private stringToNumberNode_: JSStringToNumberNoTrimNode;
    // private trimWhitespaceNode_: JSTrimWhitespaceNode;
    execute(arg0Value: TruffleString): number;
    // private executeAndSpecialize(arg0Value: TruffleString): number;
}