import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSToInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { JSToNumericNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumericNode.d.ts'
import type { JSUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSUnaryNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { JSOverloadedOperatorsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSOverloadedOperatorsObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSRightShiftConstantNode extends JSUnaryNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(operand: JavaScriptNode, shiftValue: number)
    // private shiftValue: number;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doBigInt(a: BigInt): void;
    doDouble(a: number, leftInt32Node: JSToInt32Node): number;
    doGeneric(a: Object, leftToNumeric: JSToNumericNode, innerShiftNode: JSRightShiftConstantNode): number;
    doInteger(a: number): number;
    doOverloaded(a: JSOverloadedOperatorsObject, overloadedOperatorNode: JSOverloadedBinaryNode): Object;
    doSafeInteger(a: SafeInteger): number;
    executeInt(frame: VirtualFrame): number;
    executeInt(a: Object): number;
    expressionToString(): string;
    getOverloadedOperatorName(): TruffleString;
    hasTag(tag: Class<Tag>): boolean;
    makeCopy(): JSRightShiftConstantNode;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
}