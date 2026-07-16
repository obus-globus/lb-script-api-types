import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { InlinedConditionProfile } from '../../../../../../com/oracle/truffle/api/profiles/InlinedConditionProfile.d.ts'
import type { WriteElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode.d.ts'
import type { WriteElementNode$ArrayWriteElementCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$ArrayWriteElementCacheNode.d.ts'
import type { AbstractWritableArray } from '../../../../../../com/oracle/truffle/js/runtime/array/dyn/AbstractWritableArray.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class WriteElementNode$WritableArrayWriteElementCacheNode extends WriteElementNode$ArrayWriteElementCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    doWritableArray(target: JSDynamicObject, writableArray: AbstractWritableArray, index: number, value: Object, root: WriteElementNode, inBoundsIf: InlinedConditionProfile): boolean;
}