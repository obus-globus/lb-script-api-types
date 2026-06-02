import type { Tag } from '../../../../../../com/oracle/truffle/api/instrumentation/Tag.d.ts'
import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { JavaScriptNode } from '../../../../../../com/oracle/truffle/js/nodes/JavaScriptNode.d.ts'
import type { JSCompareNode } from '../../../../../../com/oracle/truffle/js/nodes/binary/JSCompareNode.d.ts'
import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class JSIdenticalNode extends JSCompareNode {
    static cloneUninitialized(paramnode: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static cloneUninitialized(paramnodeArray: Object | null, parammaterializedTags: (Object | null)[]): Object | null;
    static create(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static createSameValue(): JSIdenticalNode;
    static createSameValue(paramleft: JavaScriptNode, paramright: JavaScriptNode): JSIdenticalNode;
    static createSameValueZero(): JSIdenticalNode;
    static createStrictEqualityComparison(): JSIdenticalNode;
    static createUnoptimized(paramleft: JavaScriptNode, paramright: JavaScriptNode): JavaScriptNode;
    static findBlockScopeNode(paramnode: Node): Node;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static transferSourceSection(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAddExpressionTag(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    static transferSourceSectionAndTags(paramfromNode: JavaScriptNode, paramtoNode: JavaScriptNode): void;
    constructor(left: JavaScriptNode, right: JavaScriptNode, type: number)
    // private type: number;
    copyUninitialized(materializedTags: Class<Tag>[]): JavaScriptNode;
    doDouble(a: number, b: number): boolean;
    // private doForeignNumber(a: Object, b: Object, aInterop: InteropLibrary, bInterop: InteropLibrary, isAForeign: boolean, isBForeign: boolean): boolean;
    doForeignObject(a: Object, b: Object, isAForeign: boolean, isBForeign: boolean, aInterop: InteropLibrary, bInterop: InteropLibrary): boolean;
    executeBoolean(left: Object, right: Object): boolean;
}