import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSBinaryNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSToInt32Node } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToInt32Node.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSBitwiseXorNode extends JSBinaryNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static createInner(): JSBitwiseXorNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(left: JavaScriptNode, right: JavaScriptNode)
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doBigInt(a: BigInt, b: BigInt): BigInt;
    doDouble(a: number, b: number, leftInt32: JSToInt32Node, rightInt32: JSToInt32Node): number;
    doIntSafeInteger(a: number, b: SafeInteger): number;
    doInteger(a: number, b: number): number;
    doOverloaded(a: Object, b: Object, overloadedOperatorNode: JSOverloadedBinaryNode): Object;
    doSafeInteger(a: SafeInteger, b: SafeInteger): number;
    doSafeIntegerInt(a: SafeInteger, b: number): number;
    executeObject(a: Object, b: Object): Object;
    getOverloadedOperatorName(): TruffleString;
}