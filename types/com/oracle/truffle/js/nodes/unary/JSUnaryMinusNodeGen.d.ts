import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSOverloadedUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSOverloadedUnaryNode.d.ts'
import type { JSUnaryMinusNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSUnaryMinusNode.d.ts'
import type { JSUnaryMinusNodeGen$GenericData } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSUnaryMinusNodeGen$GenericData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSUnaryMinusNodeGen extends JSUnaryMinusNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramoperand: JavaScriptNode): JavaScriptNode;
    static create(paramoperand: JavaScriptNode): JSUnaryMinusNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(operand: JavaScriptNode)
    // private generic_cache: JSUnaryMinusNodeGen$GenericData;
    // private overloaded_overloadedOperatorNode_: JSOverloadedUnaryNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    execute(operandNodeValue: Object): Object;
    // private executeAndSpecialize(operandNodeValue: Object): Object;
    executeDouble(frameValue: VirtualFrame): number;
    executeInt(frameValue: VirtualFrame): number;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_double1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int0(state_0__: number, frameValue: VirtualFrame): Object;
}