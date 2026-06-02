import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$RecursiveCachedArrayWriteElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$RecursiveCachedArrayWriteElementCacheNode.d.ts'
import type { LazyRegexResultIndicesArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/LazyRegexResultIndicesArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { TRegexUtil$InvokeGetGroupBoundariesMethodNode } from '../../../../../../com/oracle/truffle/js/runtime/util/TRegexUtil$InvokeGetGroupBoundariesMethodNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WriteElementNode$LazyRegexResultIndicesArrayWriteElementCacheNode extends WriteElementNode$RecursiveCachedArrayWriteElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private getEndNode: TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    // private getStartNode: TRegexUtil$InvokeGetGroupBoundariesMethodNode;
    doLazyRegexResultIndicesArray(target: JSDynamicObject, lazyRegexResultIndicesArray: LazyRegexResultIndicesArray, index: number, value: Object, root: WriteElementNode, inBoundsIf: InlinedConditionProfile): boolean;
}