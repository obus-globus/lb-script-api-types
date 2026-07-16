import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { CreateObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNode.d.ts'
import type { CreateObjectNode$CreateObjectWithPrototypeNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNode$CreateObjectWithPrototypeNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class CreateObjectNode$CreateDictionaryObjectNode extends CreateObjectNode {
    static create(paramcontext: JSContext): CreateObjectNode;
    static createOrdinaryWithPrototype(paramcontext: JSContext): CreateObjectNode$CreateObjectWithPrototypeNode;
    static createWithPrototype(paramcontext: JSContext, paramjsclass: JSClass): CreateObjectNode$CreateObjectWithPrototypeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext)
    executeWithPrototype(realm: JSRealm, proto: Object): JSObject;
}