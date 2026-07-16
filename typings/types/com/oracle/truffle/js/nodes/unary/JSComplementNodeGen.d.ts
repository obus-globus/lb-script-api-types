import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSToInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { JSComplementNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSComplementNode.d.ts'
import type { JSComplementNodeGen$GenericData } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSComplementNodeGen$GenericData.d.ts'
import type { JSOverloadedUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSOverloadedUnaryNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSComplementNodeGen extends JSComplementNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramoperand: JavaScriptNode): JSComplementNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(operand: JavaScriptNode)
    // private double_toInt32Node_: JSToInt32Node;
    // private generic_cache: JSComplementNodeGen$GenericData;
    // private overloaded_overloadedOperatorNode_: JSOverloadedUnaryNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    execute(operandNodeValue: Object): Object;
    // private executeAndSpecialize(operandNodeValue: Object): Object;
    executeInt(frameValue: VirtualFrame): number;
    // private executeInt_double4(state_0__: number, frameValue: VirtualFrame): number;
    // private executeInt_generic5(state_0__: number, frameValue: VirtualFrame): number;
    // private executeInt_int3(state_0__: number, frameValue: VirtualFrame): number;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_double1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int0(state_0__: number, frameValue: VirtualFrame): Object;
}