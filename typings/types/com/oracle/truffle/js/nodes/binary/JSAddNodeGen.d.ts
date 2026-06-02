import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString$FromLongNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromLongNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSAddNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSAddNode.d.ts'
import type { JSAddNodeGen$PrimitiveConversionData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSAddNodeGen$PrimitiveConversionData.d.ts'
import type { JSConcatStringsNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSConcatStringsNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSDoubleToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSDoubleToStringNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSAddNodeGen extends JSAddNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode, paramtruncate: boolean): JavaScriptNode;
    static create(paramtruncate: boolean, paramleft: JavaScriptNode, paramright: JavaScriptNode): JSAddNode;
    static createUnoptimized(paramleft: JavaScriptNode, paramright: JavaScriptNode, paramtruncate: boolean): JavaScriptNode;
    static createUnoptimized(): JSAddNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(truncate: boolean, left: JavaScriptNode, right: JavaScriptNode)
    // private concatStringsNode: JSConcatStringsNode;
    // private doubleToStringNode: JSDoubleToStringNode;
    // private overloaded_overloadedOperatorNode_: JSOverloadedBinaryNode;
    // private primitiveConversion_cache: JSAddNodeGen$PrimitiveConversionData;
    // private state_0_: number;
    // private stringFromLongNode: TruffleString$FromLongNode;
    execute(frameValue: VirtualFrame): Object;
    execute(leftNodeValue: Object, rightNodeValue: Object): Object;
    // private executeAndSpecialize(leftNodeValue: Object, rightNodeValue: Object): Object;
    executeDouble(frameValue: VirtualFrame): number;
    executeInt(frameValue: VirtualFrame): number;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_double_double1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic4(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int3(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int_int0(state_0__: number, frameValue: VirtualFrame): Object;
}