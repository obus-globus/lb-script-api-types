import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSToNumericNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumericNode.d.ts'
import type { JSToUInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToUInt32Node.d.ts'
import type { JSUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSUnaryNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { JSOverloadedOperatorsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSOverloadedOperatorsObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSUnsignedRightShiftConstantNode extends JSUnaryNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(operand: JavaScriptNode, shiftValue: number, rightValue: number)
    // private rightValue: number;
    // private shiftValue: number;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    createInner(): JSUnsignedRightShiftConstantNode;
    doBigInt(a: BigInt): number;
    doDouble(a: number, toUInt32Node: JSToUInt32Node): number;
    doGeneric(lval: Object, leftToNumeric: JSToNumericNode, innerShiftNode: JSUnsignedRightShiftConstantNode): number;
    doInteger(a: number): number;
    doOverloaded(a: JSOverloadedOperatorsObject, overloadedOperatorNode: JSOverloadedBinaryNode): Object;
    doSafeInteger(a: SafeInteger): number;
    executeInt(a: Object): number;
    expressionToString(): string;
    getOverloadedOperatorName(): TruffleString;
    hasTag(tag: Class<Tag>): boolean;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
}