import type { InstrumentableNode } from '../../../../../../com/oracle/truffle/api/instrumentation/InstrumentableNode.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { Truncatable } from '../../../../../../com/oracle/truffle/js/nodes/Truncatable.d.ts'
import type { JSConcatStringsNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSConcatStringsNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToNumberNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { JSUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSUnaryNode.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { JSOverloadedOperatorsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSOverloadedOperatorsObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
export abstract class JSAddConstantLeftNumberNode extends JSUnaryNode implements Truncatable {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: Class<Tag>[]): Object | null;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static truncate(paramnode: Node): void;
    constructor(leftValue: Number, right: JavaScriptNode, truncate: boolean)
    // private isInt: boolean;
    // private isSafeLong: boolean;
    // private leftDouble: number;
    // private leftInt: number;
    // private truncate: boolean;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doDouble(right: number): number;
    doInt(right: number): number;
    doIntOverflow(right: number): Object;
    doIntTruncate(right: number): number;
    doNumberString(right: TruffleString, leftString: TruffleString, createLazyString: JSConcatStringsNode): Object;
    doOverloaded(right: JSOverloadedOperatorsObject, overloadedOperatorNode: JSOverloadedBinaryNode): Object;
    doPrimitiveConversion(right: Object, node: Node, toPrimitiveB: JSToPrimitiveNode, toNumberB: JSToNumberNode, leftString: TruffleString, createLazyString: JSConcatStringsNode, profileB: InlinedConditionProfile): Object;
    doSafeInteger(right: SafeInteger): SafeInteger;
    expressionToString(): string;
    getLeftValue(): Number;
    getOverloadedOperatorName(): TruffleString;
    hasTag(tag: Class<Tag>): boolean;
    leftValueToString(): TruffleString;
    materializeInstrumentableNodes(materializedTags: Class<Tag>[]): InstrumentableNode;
    setTruncate(): void;
}