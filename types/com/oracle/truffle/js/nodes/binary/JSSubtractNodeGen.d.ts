import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSSubtractNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSSubtractNode.d.ts'
import type { JSSubtractNodeGen$GenericData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSSubtractNodeGen$GenericData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSSubtractNodeGen extends JSSubtractNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode, paramtruncate: boolean): JavaScriptNode;
    static create(paramtruncate: boolean, paramleft: JavaScriptNode, paramright: JavaScriptNode): JSSubtractNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(truncate: boolean, left: JavaScriptNode, right: JavaScriptNode)
    // private generic_cache: JSSubtractNodeGen$GenericData;
    // private overloaded_overloadedOperatorNode_: JSOverloadedBinaryNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    execute(leftNodeValue: Object, rightNodeValue: Object): Object;
    // private executeAndSpecialize(leftNodeValue: Object, rightNodeValue: Object): Object;
    executeDouble(frameValue: VirtualFrame): number;
    executeInt(frameValue: VirtualFrame): number;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_double_double1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int_int0(state_0__: number, frameValue: VirtualFrame): Object;
}