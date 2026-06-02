import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToInt32NodeGen$Uncached extends JSToInt32Node implements UnadoptableNode {
    static create(paramchild: JavaScriptNode): JavaScriptNode;
    static create(paramchild: JavaScriptNode, parambitwiseOr: boolean): JavaScriptNode;
    static create(): JSToInt32Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    executeInt(arg0Value: Object): number;
}