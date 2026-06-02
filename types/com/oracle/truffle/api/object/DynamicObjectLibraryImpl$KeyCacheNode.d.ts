import type { Node } from '../../../../../com/oracle/truffle/api/nodes/Node.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObjectLibraryImpl$KeyCacheNode extends Node {
    constructor()
    containsKey(object: DynamicObject, cachedShape: Shape, key: Object): boolean;
    getDoubleOrDefault(object: DynamicObject, cachedShape: Shape, key: Object, defaultValue: Object): number;
    getIntOrDefault(object: DynamicObject, cachedShape: Shape, key: Object, defaultValue: Object): number;
    getLongOrDefault(object: DynamicObject, cachedShape: Shape, key: Object, defaultValue: Object): number;
    getOrDefault(object: DynamicObject, cachedShape: Shape, key: Object, defaultValue: Object): Object;
    getProperty(object: DynamicObject, cachedShape: Shape, key: Object): Property;
    isIdentity(): boolean;
    put(object: DynamicObject, cachedShape: Shape, key: Object, value: Object, propertyFlags: number, putFlags: number): boolean;
    putDouble(object: DynamicObject, cachedShape: Shape, key: Object, value: number, propertyFlags: number, putFlags: number): boolean;
    putInt(object: DynamicObject, cachedShape: Shape, key: Object, value: number, propertyFlags: number, putFlags: number): boolean;
    putLong(object: DynamicObject, cachedShape: Shape, key: Object, value: number, propertyFlags: number, putFlags: number): boolean;
    removeKey(object: DynamicObject, cachedShape: Shape, key: Object): boolean;
    setPropertyFlags(object: DynamicObject, cachedShape: Shape, key: Object, propertyFlags: number): boolean;
}