import type { VirtualFrame } from '../../../../../../com/oracle/truffle/api/frame/VirtualFrame.d.ts'
import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { TruffleString } from '../../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSConstantNode } from '../../../../../../com/oracle/truffle/js/nodes/access/JSConstantNode.d.ts'
import type { BigInt } from '../../../../../../com/oracle/truffle/js/runtime/BigInt.d.ts'
import type { SafeInteger } from '../../../../../../com/oracle/truffle/js/runtime/SafeInteger.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class GlobalConstantNode$FileNameNode extends JSConstantNode {
    static cloneUninitialized(paramnode: JavaScriptNode | null, parammaterializedTags: Class<Tag>[]): JavaScriptNode | null;
    static cloneUninitialized(paramnodeArray: (JavaScriptNode | null)[], parammaterializedTags: Class<Tag>[]): (JavaScriptNode | null)[];
    static create(paramvalue: Object): JSConstantNode;
    static createBigInt(paramvalue: BigInt): JSConstantNode;
    static createBoolean(paramvalue: boolean): JSConstantNode;
    static createDouble(paramvalue: number): JSConstantNode;
    static createInt(paramvalue: number): JSConstantNode;
    static createNull(): JSConstantNode;
    static createSafeInteger(paramvalue: SafeInteger): JSConstantNode;
    static createString(paramvalue: TruffleString): JSConstantNode;
    static createUndefined(): JSConstantNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor()
    // private filename: TruffleString;
    execute(frame: VirtualFrame): TruffleString;
    // private getFileName(): TruffleString;
    getValue(): TruffleString;
}