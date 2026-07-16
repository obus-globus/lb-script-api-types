import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSConstantNode$JSConstantStringNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSConstantNode$JSConstantStringNode.d.ts'
import type { JSTypeofIdenticalNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSTypeofIdenticalNode.d.ts'
import type { JSTypeofIdenticalNode$Type } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSTypeofIdenticalNode$Type.d.ts'
import type { JSTypeofIdenticalNodeGen$ForeignObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSTypeofIdenticalNodeGen$ForeignObject0Data.d.ts'
import type { IsCallableNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/IsCallableNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSTypeofIdenticalNodeGen extends JSTypeofIdenticalNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramchildNode: JavaScriptNode, paramstring: TruffleString): JSTypeofIdenticalNode;
    static create(paramchildNode: JavaScriptNode, paramconstStringNode: JSConstantNode$JSConstantStringNode): JSTypeofIdenticalNode;
    static create(paramchildNode: JavaScriptNode, paramtype: JSTypeofIdenticalNode$Type): JSTypeofIdenticalNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(childNode: JavaScriptNode, type: JSTypeofIdenticalNode$Type)
    // private foreignObject0_cache: JSTypeofIdenticalNodeGen$ForeignObject0Data;
    // private state_0_: number;
    // private typeObjectOrFunctionJSProxy_isCallableNode_: IsCallableNode;
    // private executeAndSpecialize(operandNodeValue: Object): boolean;
    executeBoolean(frameValue: VirtualFrame): boolean;
    // private executeBoolean_boolean0(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_double2(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_generic3(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_int1(state_0__: number, frameValue: VirtualFrame): boolean;
    executeVoid(frameValue: VirtualFrame): void;
    // private foreignObject1Boundary(state_0: number, operandNodeValue_: Object): boolean;
}