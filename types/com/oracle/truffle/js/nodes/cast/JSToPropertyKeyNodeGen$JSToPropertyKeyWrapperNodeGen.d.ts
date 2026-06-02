import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { JSToPropertyKeyNode$JSToPropertyKeyWrapperNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode$JSToPropertyKeyWrapperNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToPropertyKeyNodeGen$JSToPropertyKeyWrapperNodeGen extends JSToPropertyKeyNode$JSToPropertyKeyWrapperNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramkey: JavaScriptNode): JavaScriptNode;
    static create(paramoperand: JavaScriptNode): JSToPropertyKeyNode$JSToPropertyKeyWrapperNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(operand: JavaScriptNode)
    // private state_0_: number;
    // private toPropertyKeyNode_: JSToPropertyKeyNode;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(operandNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
}