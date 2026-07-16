import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsIdenticalIntegerNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsIdenticalIntegerNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class IsIdenticalIntegerNodeGen extends IsIdenticalIntegerNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paraminteger: number, paramoperand: JavaScriptNode, paramleftConstant: boolean): IsIdenticalIntegerNode;
    static create(paramoperand: JavaScriptNode, paraminteger: number, paramleftConstant: boolean): IsIdenticalIntegerNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(operand: JavaScriptNode, integer: number, leftConstant: boolean)
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(operandNodeValue: Object): boolean;
    executeBoolean(frameValue: VirtualFrame): boolean;
    // private executeBoolean_double4(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_generic5(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_int3(state_0__: number, frameValue: VirtualFrame): boolean;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_double1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int0(state_0__: number, frameValue: VirtualFrame): Object;
    // private fallbackGuard_(state_0: number, operandNodeValue: Object): boolean;
}