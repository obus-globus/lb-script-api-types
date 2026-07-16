import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { CachedGetPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CachedGetPropertyNode.d.ts'
import type { ReadElementNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode.d.ts'
import type { ReadElementNode$GuardedReadElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/ReadElementNode$GuardedReadElementTypeCacheNode.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ReadElementNode$ToPropertyKeyCachedReadElementTypeCacheNode extends ReadElementNode$GuardedReadElementTypeCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private getPropertyCachedNode: CachedGetPropertyNode;
    // private jsclassProfile: JSClassProfile;
    readFromWrapper(wrapper: JSDynamicObject, index: Object, receiver: Object, defaultValue: Object, root: ReadElementNode): Object;
}