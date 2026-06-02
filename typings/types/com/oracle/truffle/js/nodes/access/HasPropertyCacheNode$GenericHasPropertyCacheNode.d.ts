import type { InteropLibrary } from '../../../../../../com/oracle/truffle/api/interop/InteropLibrary.d.ts'
import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HasPropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode.d.ts'
import type { HasPropertyCacheNode$HasCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode$HasCacheNode.d.ts'
import type { JSClassProfile } from '../../../../../../com/oracle/truffle/js/runtime/util/JSClassProfile.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HasPropertyCacheNode$GenericHasPropertyCacheNode extends HasPropertyCacheNode$HasCacheNode {
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor()
    // private interop: InteropLibrary;
    // private jsclassProfile: JSClassProfile;
    hasProperty(thisObj: Object, root: HasPropertyCacheNode): boolean;
}