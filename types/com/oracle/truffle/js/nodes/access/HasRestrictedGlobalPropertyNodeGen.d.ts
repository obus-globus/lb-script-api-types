import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HasRestrictedGlobalPropertyNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasRestrictedGlobalPropertyNode.d.ts'
import type { HasRestrictedGlobalPropertyNodeGen$GlobalObjectCachedData } from '../../../../../../com/oracle/truffle/js/nodes/access/HasRestrictedGlobalPropertyNodeGen$GlobalObjectCachedData.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HasRestrictedGlobalPropertyNodeGen extends HasRestrictedGlobalPropertyNode {
    static create(): HasRestrictedGlobalPropertyNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private globalObjectCached_cache: HasRestrictedGlobalPropertyNodeGen$GlobalObjectCachedData;
    // private state_0_: number;
    execute(arg0Value: JSDynamicObject, arg1Value: Object): boolean;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: Object): boolean;
    removeGlobalObjectCached_(s0_: HasRestrictedGlobalPropertyNodeGen$GlobalObjectCachedData): void;
}