import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { HasPropertyCacheNode$LinkedHasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode$LinkedHasPropertyCacheNode.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HasPropertyCacheNode$ForeignHasPropertyCacheNode extends HasPropertyCacheNode$LinkedHasPropertyCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private interop: InteropLibrary;
    hasProperty(thisObj: Object, root: HasPropertyCacheNode): boolean;
}