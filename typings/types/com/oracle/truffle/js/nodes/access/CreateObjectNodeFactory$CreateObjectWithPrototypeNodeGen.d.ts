import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { CreateObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNode.d.ts'
import type { CreateObjectNode$CreateObjectWithPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNode$CreateObjectWithPrototypeNode.d.ts'
import type { CreateObjectNodeFactory$CreateObjectWithPrototypeNodeGen$CachedPrototypeData } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNodeFactory$CreateObjectWithPrototypeNodeGen$CachedPrototypeData.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CreateObjectNodeFactory$CreateObjectWithPrototypeNodeGen extends CreateObjectNode$CreateObjectWithPrototypeNode {
    static create(paramcontext: JSContext): CreateObjectNode;
    static create(paramcontext: JSContext, paramjsclass: JSClass): CreateObjectNode$CreateObjectWithPrototypeNode;
    static createOrdinaryWithPrototype(paramcontext: JSContext): CreateObjectNode$CreateObjectWithPrototypeNode;
    static createWithPrototype(paramcontext: JSContext, paramjsclass: JSClass): CreateObjectNode$CreateObjectWithPrototypeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    private constructor(context: JSContext, jsclass: JSClass)
    // private cachedPrototype_cache: CreateObjectNodeFactory$CreateObjectWithPrototypeNodeGen$CachedPrototypeData;
    // private setProtoNode: DynamicObject$PutNode;
    // private state_0_: number;
    execute(realm: JSRealm): JSObject;
    execute(arg0Value: Object): JSObject;
    // private executeAndSpecialize(arg0Value: Object): JSObject;
}