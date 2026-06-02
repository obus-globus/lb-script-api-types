import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$ToPropertyKeyCachedWriteElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$ToPropertyKeyCachedWriteElementTypeCacheNode.d.ts'
import type { JSToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/JSToPropertyKeyNode.d.ts'
import type { ToArrayIndexNoToPropertyKeyNode } from '../../../../../../com/oracle/truffle/js/nodes/cast/ToArrayIndexNoToPropertyKeyNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WriteElementNode$StringWriteElementTypeCacheNode extends WriteElementNode$ToPropertyKeyCachedWriteElementTypeCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doString(target: Object, index: Object, value: Object, receiver: Object, root: WriteElementNode, isImmutable: InlinedConditionProfile, toArrayIndexNode: ToArrayIndexNoToPropertyKeyNode, indexToPropertyKeyNode: JSToPropertyKeyNode): void;
    doStringIntegerIndex(target: Object, index: number, value: Object, receiver: Object, root: WriteElementNode, isImmutable: InlinedConditionProfile): void;
    guard(target: Object): boolean;
}