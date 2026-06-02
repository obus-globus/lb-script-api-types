import type { Node } from '../../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { HiddenKey } from '../../../../../../com/oracle/truffle/api/object/HiddenKey.d.ts'
import type { Property } from '../../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { PropertyCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode.d.ts'
import type { PropertyCacheNode$AbstractShapeCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$AbstractShapeCheckNode.d.ts'
import type { PropertyCacheNode$ReceiverCheckNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertyCacheNode$ReceiverCheckNode.d.ts'
import type { PropertySetNode$SetCacheNode } from '../../../../../../com/oracle/truffle/js/nodes/access/PropertySetNode$SetCacheNode.d.ts'
import type { JSContext } from '../../../../../../com/oracle/truffle/js/runtime/JSContext.d.ts'
import type { JSDynamicObject } from '../../../../../../com/oracle/truffle/js/runtime/objects/JSDynamicObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PropertySetNode extends PropertyCacheNode<PropertySetNode$SetCacheNode> {
    static create(paramkey: Object, paramisGlobal: boolean, paramcontext: JSContext, paramisStrict: boolean): PropertySetNode;
    static createImpl(paramkey: Object, paramisGlobal: boolean, paramcontext: JSContext, paramisStrict: boolean, paramsetOwnProperty: boolean, paramattributeFlags: number): PropertySetNode;
    static createImpl(paramkey: Object, paramisGlobal: boolean, paramcontext: JSContext, paramisStrict: boolean, paramsetOwnProperty: boolean, paramattributeFlags: number, paramdeclaration: boolean): PropertySetNode;
    static createImpl(paramkey: Object, paramisGlobal: boolean, paramcontext: JSContext, paramisStrict: boolean, paramsetOwnProperty: boolean, paramattributeFlags: number, paramdeclaration: boolean, paramsuperProperty: boolean): PropertySetNode;
    static createSetHidden(paramkey: HiddenKey, paramcontext: JSContext): PropertySetNode;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    static reportLoopCount(paramnode: Node, paramcount: number): void;
    constructor(key: Object, context: JSContext, isGlobal: boolean, isStrict: boolean, setOwnProperty: boolean, attributeFlags: number, declaration: boolean, superProperty: boolean)
    // private attributeFlags: number;
    // private cacheNode: PropertySetNode$SetCacheNode;
    // private declaration: boolean;
    // private isGlobal: boolean;
    // private isStrict: boolean;
    // private propertyAssumptionCheckEnabled: boolean;
    // private setOwnProperty: boolean;
    // private superProperty: boolean;
    canCombineShapeCheck(parentShape: Shape, cacheShape: Shape, thisObj: Object, depth: number, value: Object, property: Property): boolean;
    // private createCachedDataPropertyNodeJSObject(thisObj: JSDynamicObject, proto: JSDynamicObject, depth: number, value: Object, shapeCheck: PropertyCacheNode$AbstractShapeCheckNode, property: Property): PropertySetNode$SetCacheNode;
    createCachedPropertyNode(property: Property, thisObj: Object, proto: JSDynamicObject, depth: number, value: Object, currentHead: PropertySetNode$SetCacheNode): PropertySetNode$SetCacheNode;
    // private createCachedPropertyNodeJSObject(property: Property, thisObj: JSDynamicObject, proto: JSDynamicObject, depth: number, value: Object): PropertySetNode$SetCacheNode;
    // private createCachedPropertyNodeNotJSObject(property: Property, thisObj: Object, proto: JSDynamicObject, depth: number): PropertySetNode$SetCacheNode;
    createCombinedIcPropertyNode(parentShape: Shape, cacheShape: Shape, thisObj: Object, depth: number, value: Object, property: Property): PropertySetNode$SetCacheNode;
    // private createDefineNewPropertyNode(shapeCheck: PropertyCacheNode$ReceiverCheckNode): PropertySetNode$SetCacheNode;
    createGenericPropertyNode(): PropertySetNode$SetCacheNode;
    createJavaPropertyNodeMaybe(thisObj: Object, proto: JSDynamicObject, depth: number): PropertySetNode$SetCacheNode;
    createTruffleObjectPropertyNode(): PropertySetNode$SetCacheNode;
    createUndefinedPropertyNode(thisObj: Object, store: Object, proto: JSDynamicObject, depth: number, value: Object): PropertySetNode$SetCacheNode;
    getAttributeFlags(): number;
    getCacheNode(): PropertySetNode$SetCacheNode;
    isDeclaration(): boolean;
    isGlobal(): boolean;
    isOwnProperty(): boolean;
    isPropertyAssumptionCheckEnabled(): boolean;
    isStrict(): boolean;
    setCacheNode(cache: PropertySetNode$SetCacheNode): void;
    setPropertyAssumptionCheckEnabled(value: boolean): void;
    setValue(obj: Object, value: Object): void;
    setValue(thisObj: Object, value: Object, receiver: Object): void;
    // private setValueAndSpecialize(thisObj: Object, value: Object, receiver: Object): boolean;
    setValueBoolean(obj: Object, value: boolean): void;
    setValueBoolean(thisObj: Object, value: boolean, receiver: Object): void;
    // private setValueBooleanAndSpecialize(thisObj: Object, value: boolean, receiver: Object): void;
    setValueDouble(thisObj: Object, value: number, receiver: Object): void;
    // private setValueDoubleAndSpecialize(thisObj: Object, value: number, receiver: Object): void;
    setValueInt(obj: Object, value: number): void;
    setValueInt(thisObj: Object, value: number, receiver: Object): void;
    // private setValueIntAndSpecialize(thisObj: Object, value: number, receiver: Object): void;
}