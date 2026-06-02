import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JSDoubleToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSDoubleToStringNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSDoubleToStringNodeGen$Uncached extends JSDoubleToStringNode implements UnadoptableNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    executeString(arg0Value: Object): TruffleString;
    executeString(arg0Value: number): TruffleString;
    executeString(arg0Value: number): TruffleString;
}