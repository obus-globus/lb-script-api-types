import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedBranchProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedBranchProfile.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSBinaryNode.d.ts'
import type { JSOverloadedBinaryNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSOverloadedBinaryNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSModuloNode extends JSBinaryNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(): JSModuloNode;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JSModuloNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(left: JavaScriptNode, right: JavaScriptNode)
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doBigInteger(a: BigInt, b: BigInt): BigInt;
    doBigIntegerZeroDivision(a: BigInt, b: BigInt): void;
    doDouble(a: number, b: number): number;
    doInt(a: number, b: number, specialBranch: InlinedBranchProfile): number;
    doIntPow2(a: number, b: number, negativeBranch: InlinedBranchProfile, negativeZeroBranch: InlinedBranchProfile): number;
    doOverloaded(a: Object, b: Object, overloadedOperatorNode: JSOverloadedBinaryNode): Object;
    execute(a: Object, b: Object): Object;
    getOverloadedOperatorName(): TruffleString;
}