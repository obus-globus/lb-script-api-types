import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { TruffleString$FromLongNode } from '../../../../../../com/oracle/truffle/api/strings/TruffleString$FromLongNode.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { Truncatable } from '../../../../../../com/oracle/truffle/js/nodes/Truncatable.d.ts'
import type { JSBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSBinaryNode.d.ts'
import type { JSConcatStringsNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSConcatStringsNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { JSDoubleToStringNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSDoubleToStringNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSAddNode extends JSBinaryNode implements Truncatable {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode, paramtruncate: boolean): JavaScriptNode;
    static createUnoptimized(paramleft: JavaScriptNode, paramright: JavaScriptNode, paramtruncate: boolean): JavaScriptNode;
    static createUnoptimized(): JSAddNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(truncate: boolean, left: JavaScriptNode, right: JavaScriptNode)
    // private truncate: boolean;
    copyRecursive(): JSAddNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doBigInt(left: BigInt, right: BigInt): BigInt;
    doIntString(a: number, b: TruffleString, concatStringsNode: JSConcatStringsNode, stringFromLongNode: TruffleString$FromLongNode): TruffleString;
    doNumberString(a: Object, b: TruffleString, concatStringsNode: JSConcatStringsNode, doubleToStringNode: JSDoubleToStringNode): Object;
    doOverloaded(a: Object, b: Object, overloadedOperatorNode: JSOverloadedBinaryNode): Object;
    doString(a: TruffleString, b: TruffleString, concatStringsNode: JSConcatStringsNode): TruffleString;
    doStringInt(a: TruffleString, b: number, concatStringsNode: JSConcatStringsNode, stringFromLongNode: TruffleString$FromLongNode): TruffleString;
    doStringNumber(a: TruffleString, b: Object, concatStringsNode: JSConcatStringsNode, doubleToStringNode: JSDoubleToStringNode): Object;
    execute(a: Object, b: Object): Object;
    getOverloadedOperatorName(): TruffleString;
    setTruncate(): void;
}