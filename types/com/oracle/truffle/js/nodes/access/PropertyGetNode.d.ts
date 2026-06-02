import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { PropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode.d.ts'
import type { PropertyCacheNode$AbstractShapeCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$AbstractShapeCheckNode.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { PropertyGetNode$GetCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyGetNode$GetCacheNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertyGetNode extends PropertyCacheNode<PropertyGetNode$GetCacheNode> {
    static create(paramkey: Object, paramisGlobal: boolean, paramcontext: JSContext): PropertyGetNode;
    static create(paramkey: Object, paramisGlobal: boolean, paramcontext: JSContext, paramgetOwnProperty: boolean, paramisMethod: boolean): PropertyGetNode;
    static create(paramkey: Object, paramcontext: JSContext): PropertyGetNode;
    static createGetHidden(paramkey: HiddenKey, paramcontext: JSContext): PropertyGetNode;
    static createGetMethod(paramkey: Object, paramcontext: JSContext): PropertyGetNode;
    static createGetOwn(paramkey: Object, paramcontext: JSContext): PropertyGetNode;
    static getNullNode(): PropertyGetNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(key: Object, context: JSContext, isGlobal: boolean, getOwnProperty: boolean, isMethod: boolean)
    // private cacheNode: PropertyGetNode$GetCacheNode;
    // private getOwnProperty: boolean;
    // private isGlobal: boolean;
    // private isMethod: boolean;
    // private propertyAssumptionCheckEnabled: boolean;
    canCombineShapeCheck(parentShape: Shape, cacheShape: Shape, thisObj: Object, depth: number, value: Object, property: Property): boolean;
    createCachedPropertyNode(property: Property, thisObj: Object, proto: JSDynamicObject, depth: number, value: Object, currentHead: PropertyGetNode$GetCacheNode): PropertyGetNode$GetCacheNode;
    // private createCachedPropertyNodeNotJSObject(property: Property, thisObj: Object, proto: JSDynamicObject, depth: number): PropertyGetNode$GetCacheNode;
    createCombinedIcPropertyNode(parentShape: Shape, cacheShape: Shape, thisObj: Object, depth: number, value: Object, property: Property): PropertyGetNode$GetCacheNode;
    // private createFinalAccessorSpecialization(property: Property, cacheShape: Shape, thisObj: JSDynamicObject, proto: JSDynamicObject, depth: number, isConstantObjectFinal: boolean): PropertyGetNode$GetCacheNode;
    // private createFinalDataPropertySpecialization(property: Property, cacheShape: Shape, thisObj: JSDynamicObject, proto: JSDynamicObject, depth: number, isConstantObjectFinal: boolean): PropertyGetNode$GetCacheNode;
    createGenericPropertyNode(): PropertyGetNode$GetCacheNode;
    createJSProxyCache(receiverCheck: PropertyCacheNode$ReceiverCheckNode): PropertyGetNode$GetCacheNode;
    createJavaPropertyNodeMaybe(thisObj: Object, proto: JSDynamicObject, depth: number): PropertyGetNode$GetCacheNode;
    // private createSpecializationFromDataProperty(property: Property, receiverCheck: PropertyCacheNode$ReceiverCheckNode, store: JSDynamicObject): PropertyGetNode$GetCacheNode;
    createTruffleObjectPropertyNode(): PropertyGetNode$GetCacheNode;
    // private createUndefinedJSObjectPropertyNode(jsobject: JSDynamicObject, shapeCheck: PropertyCacheNode$AbstractShapeCheckNode): PropertyGetNode$GetCacheNode;
    createUndefinedOrErrorPropertyNode(receiverCheck: PropertyCacheNode$ReceiverCheckNode): PropertyGetNode$GetCacheNode;
    createUndefinedPropertyNode(thisObj: Object, store: Object, proto: JSDynamicObject, depth: number, value: Object): PropertyGetNode$GetCacheNode;
    getCacheNode(): PropertyGetNode$GetCacheNode;
    getValue(obj: Object): Object;
    // private getValueAndSpecialize(thisObj: Object, receiver: Object, defaultValue: Object): Object;
    getValueBoolean(obj: Object): boolean;
    getValueBoolean(thisObj: Object, receiver: Object): boolean;
    // private getValueBooleanAndSpecialize(thisObj: Object, receiver: Object): boolean;
    getValueDouble(obj: Object): number;
    getValueDouble(thisObj: Object, receiver: Object): number;
    // private getValueDoubleAndSpecialize(thisObj: Object, receiver: Object): number;
    getValueInt(obj: Object): number;
    getValueInt(thisObj: Object, receiver: Object): number;
    // private getValueIntAndSpecialize(thisObj: Object, receiver: Object): number;
    getValueOrDefault(obj: Object, defaultValue: Object): Object;
    getValueOrDefault(thisObj: Object, receiver: Object, defaultValue: Object): Object;
    getValueOrUndefined(thisObj: Object, receiver: Object): Object;
    // private isEligibleForFinalSpecialization(cacheShape: Shape, thisObj: JSDynamicObject, depth: number, isConstantObjectFinal: boolean): boolean;
    isGlobal(): boolean;
    isMethod(): boolean;
    isOwnProperty(): boolean;
    isPropertyAssumptionCheckEnabled(): boolean;
    // private isProxyHandlerGetNode(): boolean;
    isRequired(): boolean;
    setCacheNode(cache: PropertyGetNode$GetCacheNode): void;
    setMethod(): void;
    setPropertyAssumptionCheckEnabled(value: boolean): void;
}