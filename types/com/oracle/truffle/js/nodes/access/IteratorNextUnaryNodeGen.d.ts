import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IteratorNextUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorNextUnaryNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IteratorNextUnaryNodeGen extends IteratorNextUnaryNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramiteratorNode: JavaScriptNode): JavaScriptNode;
    static create(paramiteratorNode: JavaScriptNode): IteratorNextUnaryNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(iteratorNode: JavaScriptNode)
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    executeVoid(frameValue: VirtualFrame): void;
}