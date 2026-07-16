import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { WriteElementNode$GuardedWriteElementTypeCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/WriteElementNode$GuardedWriteElementTypeCacheNode.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
export abstract class WriteElementNode$ToPropertyKeyCachedWriteElementTypeCacheNode extends WriteElementNode$GuardedWriteElementTypeCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private classProfile: JSClassProfile;
}