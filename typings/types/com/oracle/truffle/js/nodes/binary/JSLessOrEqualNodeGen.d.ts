import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$CompareCharsUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$CompareCharsUTF16Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSLessOrEqualNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSLessOrEqualNode.d.ts'
import type { JSLessOrEqualNodeGen$GenericData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSLessOrEqualNodeGen$GenericData.d.ts'
import type { JSLessOrEqualNodeGen$OverloadedData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSLessOrEqualNodeGen$OverloadedData.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSLessOrEqualNodeGen extends JSLessOrEqualNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(): JSLessOrEqualNode;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JSLessOrEqualNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(left: JavaScriptNode, right: JavaScriptNode)
    // private generic_cache: JSLessOrEqualNodeGen$GenericData;
    // private overloaded_cache: JSLessOrEqualNodeGen$OverloadedData;
    // private state_0_: number;
    // private stringToDouble: JSStringToNumberNode;
    // private string_compareNode_: TruffleString$CompareCharsUTF16Node;
    // private executeAndSpecialize(leftNodeValue: Object, rightNodeValue: Object): boolean;
    executeBoolean(frameValue: VirtualFrame): boolean;
    executeBoolean(leftNodeValue: Object, rightNodeValue: Object): boolean;
    // private executeBoolean_double4(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_double5(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_double_double1(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_generic6(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_int2(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_int3(state_0__: number, frameValue: VirtualFrame): boolean;
    // private executeBoolean_int_int0(state_0__: number, frameValue: VirtualFrame): boolean;
    executeVoid(frameValue: VirtualFrame): void;
}