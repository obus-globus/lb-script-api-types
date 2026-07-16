import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { IsPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsPrimitiveNode.d.ts'
import type { JSCompareNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSCompareNode.d.ts'
import type { JSToPrimitiveNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPrimitiveNode.d.ts'
import type { LongToBigIntNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/LongToBigIntNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSEqualNode extends JSCompareNode {
    static cloneUninitialized<T extends JavaScriptNode>(paramnode: T, parammaterializedTags: Class<Tag>[]): T;
    static cloneUninitialized<T extends JavaScriptNode>(paramnodeArray: T[], parammaterializedTags: Class<Tag>[]): T[];
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static create(): JSEqualNode;
    static createUnoptimized(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(left: JavaScriptNode, right: JavaScriptNode)
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doForeign(a: Object, b: Object, isAForeign: boolean, isBForeign: boolean, aInterop: InteropLibrary, bInterop: InteropLibrary, toPrimitiveNode: JSToPrimitiveNode, isPrimitiveNode: IsPrimitiveNode, nestedEqualNode: JSEqualNode, longToBigIntA: LongToBigIntNode, longToBigIntB: LongToBigIntNode): boolean;
    executeBoolean(left: Object, right: Object): boolean;
}