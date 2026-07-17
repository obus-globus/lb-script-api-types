import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject$GetShapeFlagsNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$GetShapeFlagsNode.d.ts'
import type { DynamicObject$PutNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$PutNode.d.ts'
import type { DynamicObject$SetShapeFlagsNode } from '../../../../../../com/oracle/truffle/api/object/DynamicObject$SetShapeFlagsNode.d.ts'
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
    constructor(context: JSContext, jsclass: JSClass)
    // private getShapeFlagsNode: DynamicObject$GetShapeFlagsNode;
    // private jsclass: JSClass;
    // private seenArrayPrototype: boolean;
    // private setShapeFlagsNode: DynamicObject$SetShapeFlagsNode;
    doCachedPrototype(prototype: JSDynamicObject, cachedPrototype: JSDynamicObject, protoChildShape: Shape): JSObject;
    doNotJSObjectOrNull(prototype: Object): JSObject;
    doOrdinaryInstancePrototype(prototype: JSDynamicObject, setProtoNode: DynamicObject$PutNode): JSObject;
    doPromiseInstancePrototype(prototype: JSDynamicObject, setProtoNode: DynamicObject$PutNode): JSObject;
    execute(realm: JSRealm): JSObject;
    execute(prototype: Object): JSObject;
    executeWithPrototype(realm: JSRealm, proto: Object): JSObject;
    getProtoChildShape(prototype: JSDynamicObject): Shape;
    // private handleArrayPrototype(object: JSObject, proto: JSDynamicObject): void;
    isOrdinaryObject(): boolean;
    isPromiseObject(): boolean;
    // private markAsArrayPrototype(object: JSObject): void;
    seenArrayPrototype(): boolean;
}