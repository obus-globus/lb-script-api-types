import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsIdenticalBooleanNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsIdenticalBooleanNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsIdenticalBooleanNodeGen extends IsIdenticalBooleanNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(parambool: boolean, paramoperand: JavaScriptNode, paramleftConstant: boolean): IsIdenticalBooleanNode;
    static create(paramoperand: JavaScriptNode, parambool: boolean, paramleftConstant: boolean): IsIdenticalBooleanNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(operand: JavaScriptNode, bool: boolean, leftConstant: boolean)
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(operandNodeValue: Object): boolean;
    executeBoolean(frameValue: VirtualFrame): boolean;
    // private executeBoolean_boolean2(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_generic3(state_0__: number, frameValue: VirtualFrame): boolean;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_boolean0(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic1(state_0__: number, frameValue: VirtualFrame): Object;
    // private fallbackGuard_(state_0: number, operandNodeValue: Object): boolean;
}