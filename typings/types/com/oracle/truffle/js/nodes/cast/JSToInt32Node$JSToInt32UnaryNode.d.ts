import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSStringToNumberNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSStringToNumberNode.d.ts'
import type { JSToDoubleNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToDoubleNode.d.ts'
import type { JSToInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { JSUnaryNode } from '../../../../../../com/oracle/truffle/js/nodes/unary/JSUnaryNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Symbol } from '../../../../../../com/oracle/truffle/js/runtime/Symbol.d.ts'
import type { JSOverloadedOperatorsObject } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSOverloadedOperatorsObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSToInt32Node$JSToInt32UnaryNode extends JSUnaryNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(operand: JavaScriptNode, bitwiseOr: boolean)
    readonly bitwiseOr: boolean;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doBigInt(value: BigInt): number;
    doBoolean(value: boolean): number;
    doDouble(value: number): number;
    doDoubleFitsInt(value: number): number;
    doDoubleRepresentableAsLong(value: number): number;
    doDoubleRepresentableAsSafeInteger(value: number): number;
    doInteger(value: number): number;
    doJSObject(value: JSObject, toDoubleNode: JSToDoubleNode): number;
    doNull(value: Object): number;
    doOverloadedOperator(value: JSOverloadedOperatorsObject, overloadedOperatorNode: JSOverloadedBinaryNode, toInt32Node: JSToInt32Node): number;
    doSafeInteger(value: SafeInteger): number;
    doString(value: TruffleString, stringToNumberNode: JSStringToNumberNode): number;
    doSymbol(value: Symbol): number;
    doUndefined(value: Object): number;
    execute(frame: VirtualFrame): Object;
    executeInt(frame: VirtualFrame): number;
    expressionToString(): string;
    getNodeObject(): Object;
    getOverloadedOperatorName(): TruffleString;
    hasTag(tag: Class<Tag>): boolean;
    isBitwiseOr(): boolean;
    isResultAlwaysOfType(clazz: Class<Object>): boolean;
}