import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HasOnlyShapePropertiesNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasOnlyShapePropertiesNode.d.ts'
import type { HasOnlyShapePropertiesNodeGen$CachedData } from '../../../../../../com/oracle/truffle/js/nodes/access/HasOnlyShapePropertiesNodeGen$CachedData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
export class HasOnlyShapePropertiesNodeGen extends HasOnlyShapePropertiesNode {
    static create(): HasOnlyShapePropertiesNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor()
    // private cached_cache: HasOnlyShapePropertiesNodeGen$CachedData;
    // private objectPrototype_context_: JSContext;
    // private state_0_: number;
    execute(arg0Value: JSDynamicObject, arg1Value: JSClass): boolean;
    // private executeAndSpecialize(arg0Value: JSDynamicObject, arg1Value: JSClass): boolean;
}