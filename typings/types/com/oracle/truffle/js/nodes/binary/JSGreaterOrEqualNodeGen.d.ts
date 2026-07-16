import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$CompareCharsUTF16Node } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$CompareCharsUTF16Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSGreaterOrEqualNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSGreaterOrEqualNode.d.ts'
import type { JSGreaterOrEqualNodeGen$GenericData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSGreaterOrEqualNodeGen$GenericData.d.ts'
import type { JSGreaterOrEqualNodeGen$OverloadedData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSGreaterOrEqualNodeGen$OverloadedData.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSGreaterOrEqualNodeGen extends JSGreaterOrEqualNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(): JSGreaterOrEqualNode;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JSGreaterOrEqualNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(left: JavaScriptNode, right: JavaScriptNode)
    // private generic_cache: JSGreaterOrEqualNodeGen$GenericData;
    // private overloaded_cache: JSGreaterOrEqualNodeGen$OverloadedData;
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