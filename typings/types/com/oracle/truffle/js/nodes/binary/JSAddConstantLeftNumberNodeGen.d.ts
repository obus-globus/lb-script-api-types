import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSAddConstantLeftNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSAddConstantLeftNumberNode.d.ts'
import type { JSAddConstantLeftNumberNodeGen$PrimitiveConversionData } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSAddConstantLeftNumberNodeGen$PrimitiveConversionData.d.ts'
import type { JSConcatStringsNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSConcatStringsNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export class JSAddConstantLeftNumberNodeGen extends JSAddConstantLeftNumberNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramleftValue: Number, paramright: JavaScriptNode, paramtruncate: boolean): JSAddConstantLeftNumberNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    private constructor(leftValue: Number, right: JavaScriptNode, truncate: boolean)
    // private createLazyString: JSConcatStringsNode;
    // private leftString: TruffleString;
    // private overloaded_overloadedOperatorNode_: JSOverloadedBinaryNode;
    // private primitiveConversion_cache: JSAddConstantLeftNumberNodeGen$PrimitiveConversionData;
    // private state_0_: number;
    execute(frameValue: VirtualFrame): Object;
    // private executeAndSpecialize(operandNodeValue: Object): Object;
    executeDouble(frameValue: VirtualFrame): number;
    executeInt(frameValue: VirtualFrame): number;
    executeVoid(frameValue: VirtualFrame): void;
    // private execute_double1(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_generic2(state_0__: number, frameValue: VirtualFrame): Object;
    // private execute_int0(state_0__: number, frameValue: VirtualFrame): Object;
}