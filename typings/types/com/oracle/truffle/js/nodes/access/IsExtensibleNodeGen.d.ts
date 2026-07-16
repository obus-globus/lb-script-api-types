import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { IsExtensibleNode } from '../../../../../../com/oracle/truffle/js/nodes/access/IsExtensibleNode.d.ts'
import type { IsExtensibleNodeGen$CachedJSNonProxyClassData } from '../../../../../../com/oracle/truffle/js/nodes/access/IsExtensibleNodeGen$CachedJSNonProxyClassData.d.ts'
import type { IsExtensibleNodeGen$CachedShapeData } from '../../../../../../com/oracle/truffle/js/nodes/access/IsExtensibleNodeGen$CachedShapeData.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class IsExtensibleNodeGen extends IsExtensibleNode {
    static create(): IsExtensibleNode;
    static getUncached(): IsExtensibleNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private cachedJSNonProxyClass_cache: IsExtensibleNodeGen$CachedJSNonProxyClassData;
    // private cachedShape_cache: IsExtensibleNodeGen$CachedShapeData;
    // private state_0_: number;
    // private executeAndSpecialize(arg0Value: JSDynamicObject): boolean;
    executeBoolean(arg0Value: JSDynamicObject): boolean;
    // private fallbackGuard_(state_0: number, arg0Value: JSDynamicObject): boolean;
}