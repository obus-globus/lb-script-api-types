import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBitwiseAndNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSBitwiseAndNode.d.ts'
import type { JSBitwiseAndNodeGen$DoubleData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSBitwiseAndNodeGen$DoubleData.d.ts'
import type { JSBitwiseAndNodeGen$GenericData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSBitwiseAndNodeGen$GenericData.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class JSBitwiseAndNodeGen extends JSBitwiseAndNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JSBitwiseAndNode;
    static createInner(): JSBitwiseAndNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(left: JavaScriptNode, right: JavaScriptNode)
    // private double_cache: JSBitwiseAndNodeGen$DoubleData;
    // private generic_cache: JSBitwiseAndNodeGen$GenericData;
    // private overloaded_overloadedOperatorNode_: JSOverloadedBinaryNode;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(leftNodeValue: Object, rightNodeValue: Object): Object;
    executeInt(frameValue: VirtualFrame): number;
    // private executeInt_double_double6(state_0__: number, frameValue: VirtualFrame): number;
    // private executeInt_generic9(state_0__: number, frameValue: VirtualFrame): number;
    // private executeInt_int7(state_0__: number, frameValue: VirtualFrame): number;
    // private executeInt_int8(state_0__: number, frameValue: VirtualFrame): number;
    // private executeInt_int_int5(state_0__: number, frameValue: VirtualFrame): number;
    executeObject(leftNodeValue: Object, rightNodeValue: Object): Object;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_double_double1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic4(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int3(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int_int0(state_0__: number, frameValue: VirtualFrame): Object;
}