import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { Truncatable } from '../../../../../../com/oracle/truffle/js/nodes/Truncatable.d.ts'
import type { JSBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSBinaryNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSSubtractNode extends JSBinaryNode implements Truncatable {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode, paramtruncate: boolean): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static truncate(paramnode: Node): void;
    constructor(truncate: boolean, left: JavaScriptNode, right: JavaScriptNode)
    // private truncate: boolean;
    copyRecursive(): JavaScriptNode;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doBigInt(a: BigInt, b: BigInt): BigInt;
    doDouble(a: number, b: number): number;
    doInt(a: number, b: number): number;
    doOverloaded(a: Object, b: Object, overloadedOperatorNode: JSOverloadedBinaryNode): Object;
    execute(a: Object, b: Object): Object;
    getOverloadedOperatorName(): TruffleString;
    setTruncate(): void;
}