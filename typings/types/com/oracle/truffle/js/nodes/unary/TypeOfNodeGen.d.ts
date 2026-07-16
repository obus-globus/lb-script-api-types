import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { TypeOfNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/TypeOfNode.d.ts'
import type { TypeOfNodeGen$TruffleObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/unary/TypeOfNodeGen$TruffleObject0Data.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TypeOfNodeGen extends TypeOfNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(): TypeOfNode;
    static create(paramoperand: JavaScriptNode): TypeOfNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(operand: JavaScriptNode)
    // private jSProxy_typeofNode_: TypeOfNode;
    // private state_0_: number;
    // private truffleObject0_cache: TypeOfNodeGen$TruffleObject0Data;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(operandNodeValue: Object): TruffleString;
    executeString(operandNodeValue: Object): TruffleString;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_boolean2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_double1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic3(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int0(state_0__: number, frameValue: VirtualFrame): Object;
    // private fallbackGuard_(state_0: number, operandNodeValue: Object): boolean;
    // private truffleObject1Boundary(state_0: number, operandNodeValue: Object): TruffleString;
    // private truffleObject1Boundary0(state_0: number, operandNodeValue_: Object): Object;
}