import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { UnadoptableNode } from '../../../../../../com/oracle/truffle/api/nodes/UnadoptableNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToNumberNodeGen$Uncached extends JSToNumberNode implements UnadoptableNode {
    static create(paramchild: JavaScriptNode): JavaScriptNode;
    static create(): JSToNumberNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    execute(arg0Value: Object): Object;
}