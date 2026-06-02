import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IteratorSetDoneNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IteratorSetDoneNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IteratorSetDoneNodeGen extends IteratorSetDoneNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramiteratorNode: JavaScriptNode, paramisDoneNode: JavaScriptNode): IteratorSetDoneNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(iteratorNode: JavaScriptNode, isDoneNode: JavaScriptNode)
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(iteratorNodeValue: Object, isDoneNodeValue: Object): boolean;
    executeBoolean(frameValue: VirtualFrame): boolean;
    executeVoid(frameValue: VirtualFrame): void;
}