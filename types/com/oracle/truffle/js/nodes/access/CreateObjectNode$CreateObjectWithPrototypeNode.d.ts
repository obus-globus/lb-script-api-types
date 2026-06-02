import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObjectLibrary } from '../../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { CreateObjectNode } from '../../../../../../com/oracle/truffle/js/nodes/access/CreateObjectNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSRealm } from '../../../../../../com/oracle/truffle/js/runtime/JSRealm.d.ts'
import type { JSClass } from '../../../../../../com/oracle/truffle/js/runtime/builtins/JSClass.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { JSObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class CreateObjectNode$CreateObjectWithPrototypeNode extends CreateObjectNode {
    static create(paramcontext: JSContext): CreateObjectNode;
    static createOrdinaryWithPrototype(paramcontext: JSContext): CreateObjectNode$CreateObjectWithPrototypeNode;
    static createWithPrototype(paramcontext: JSContext, paramjsclass: JSClass): CreateObjectNode$CreateObjectWithPrototypeNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(context: JSContext, jsclass: JSClass)
    // private jsclass: JSClass;
    // private protoFlagsNode: DynamicObjectLibrary;
    // private seenArrayPrototype: boolean;
    doCachedPrototype(prototype: JSDynamicObject, cachedPrototype: JSDynamicObject, protoChildShape: Shape): JSObject;
    doNotJSObjectOrNull(prototype: Object): JSObject;
    doOrdinaryInstancePrototype(prototype: JSDynamicObject, setProtoNode: DynamicObjectLibrary): JSObject;
    doPromiseInstancePrototype(prototype: JSDynamicObject, setProtoNode: DynamicObjectLibrary): JSObject;
    execute(prototype: Object): JSObject;
    executeWithPrototype(realm: JSRealm, proto: Object): JSObject;
    getProtoChildShape(prototype: JSDynamicObject): Shape;
    // private handleArrayPrototype(object: JSObject, proto: JSDynamicObject): void;
    isOrdinaryObject(): boolean;
    isPromiseObject(): boolean;
    // private markAsArrayPrototype(object: JSObject): void;
    seenArrayPrototype(): boolean;
}