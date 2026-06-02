import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToBooleanUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanUnaryNode.d.ts'
import type { JSToBooleanUnaryNodeGen$ForeignObjectData } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToBooleanUnaryNodeGen$ForeignObjectData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSToBooleanUnaryNodeGen extends JSToBooleanUnaryNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramchild: JavaScriptNode): JavaScriptNode;
    static create(paramoperand: JavaScriptNode): JSToBooleanUnaryNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(operand: JavaScriptNode)
    // private foreignObject_cache: JSToBooleanUnaryNodeGen$ForeignObjectData;
    // private state_0_: number;
    // private executeAndSpecialize(operandNodeValue: Object): boolean;
    executeBoolean(frameValue: VirtualFrame): boolean;
    // private executeBoolean_boolean0(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_double2(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_generic3(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_int1(state_0__: number, frameValue: VirtualFrame): boolean;
    executeVoid(frameValue: VirtualFrame): void;
}