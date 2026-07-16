import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { HasPropertyCacheNode$HasCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/HasPropertyCacheNode$HasCacheNode.d.ts'
import type { PropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class HasPropertyCacheNode extends PropertyCacheNode<HasPropertyCacheNode$HasCacheNode> {
    static create(paramkey: Object, paramcontext: JSContext): HasPropertyCacheNode;
    static create(paramkey: Object, paramcontext: JSContext, paramhasOwnProperty: boolean): HasPropertyCacheNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(key: Object, context: JSContext, hasOwnProperty: boolean)
    // private cacheNode: HasPropertyCacheNode$HasCacheNode;
    // private hasOwnProperty: boolean;
    // private propertyAssumptionCheckEnabled: boolean;
    canCombineShapeCheck(parentShape: Shape, cacheShape: Shape, thisObj: Object, depth: number, value: Object, property: Property): boolean;
    createCachedPropertyNode(property: Property, thisObj: Object, proto: JSDynamicObject, depth: number, value: Object, currentHead: HasPropertyCacheNode$HasCacheNode): HasPropertyCacheNode$HasCacheNode;
    createCombinedIcPropertyNode(parentShape: Shape, cacheShape: Shape, thisObj: Object, depth: number, value: Object, property: Property): HasPropertyCacheNode$HasCacheNode;
    createGenericPropertyNode(): HasPropertyCacheNode$HasCacheNode;
    createJavaPropertyNodeMaybe(thisObj: Object, proto: JSDynamicObject, depth: number): HasPropertyCacheNode$HasCacheNode;
    createTruffleObjectPropertyNode(): HasPropertyCacheNode$HasCacheNode;
    createUndefinedPropertyNode(thisObj: Object, store: Object, proto: JSDynamicObject, depth: number, value: Object): HasPropertyCacheNode$HasCacheNode;
    getCacheNode(): HasPropertyCacheNode$HasCacheNode;
    hasProperty(thisObj: Object): boolean;
    // private hasPropertyAndSpecialize(thisObj: Object): boolean;
    isGlobal(): boolean;
    isOwnProperty(): boolean;
    isPropertyAssumptionCheckEnabled(): boolean;
    setCacheNode(cache: HasPropertyCacheNode$HasCacheNode): void;
    setPropertyAssumptionCheckEnabled(value: boolean): void;
}