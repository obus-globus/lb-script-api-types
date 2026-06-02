import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSStringToNumberNoTrimNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNoTrimNode.d.ts'
export class JSStringToNumberNoTrimNodeGen$Uncached extends JSStringToNumberNoTrimNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    executeNoTrim(arg0Value: TruffleString): number;
}