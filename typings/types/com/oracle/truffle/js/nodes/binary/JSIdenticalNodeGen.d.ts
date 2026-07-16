import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$EqualNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$EqualNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSIdenticalNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSIdenticalNode.d.ts'
import type { JSIdenticalNodeGen$ForeignObject0Data } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSIdenticalNodeGen$ForeignObject0Data.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSIdenticalNodeGen extends JSIdenticalNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode, paramtype: number): JSIdenticalNode;
    static createSameValue(): JSIdenticalNode;
    static createSameValue(paramleft: JavaScriptNode, paramright: JavaScriptNode): JSIdenticalNode;
    static createSameValueZero(): JSIdenticalNode;
    static createStrictEqualityComparison(): JSIdenticalNode;
    static createUnoptimized(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(left: JavaScriptNode, right: JavaScriptNode, type: number)
    // private foreignObject0_cache: JSIdenticalNodeGen$ForeignObject0Data;
    // private nullInterop: InteropLibrary;
    // private state_0_: number;
    // private truffleString_equalsNode_: TruffleString$EqualNode;
    // private executeAndSpecialize(leftNodeValue: Object, rightNodeValue: Object): boolean;
    executeBoolean(frameValue: VirtualFrame): boolean;
    executeBoolean(leftNodeValue: Object, rightNodeValue: Object): boolean;
    // private executeBoolean_boolean_boolean2(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_double3(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_double4(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_double_double1(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_generic5(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_int_int0(state_0__: number, frameValue: VirtualFrame): boolean;
    executeVoid(frameValue: VirtualFrame): void;
    // private fallbackGuard_(state_0: number, leftNodeValue: Object, rightNodeValue: Object): boolean;
    // private foreignObject1Boundary(state_0: number, leftNodeValue: Object, rightNodeValue: Object): boolean;
    // private foreignObject1Boundary0(state_0: number, leftNodeValue_: Object, rightNodeValue_: Object): boolean;
}