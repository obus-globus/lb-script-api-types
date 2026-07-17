import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObjectLibraryImpl$KeyCacheEntry } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$KeyCacheEntry.d.ts'
import type { DynamicObjectLibraryImpl$KeyCacheNode } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$KeyCacheNode.d.ts'
import type { DynamicObjectLibraryImpl$MutateCacheData } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$MutateCacheData.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObjectLibraryImpl$SpecificKey extends DynamicObjectLibraryImpl$KeyCacheEntry {
    constructor(key: Object, next: DynamicObjectLibraryImpl$KeyCacheEntry)
    // private cache: DynamicObjectLibraryImpl$MutateCacheData;
    // private cachedKey: Object;
    acceptsKey(key: Object): boolean;
    assertCachedKeyAndShapeForRead(object: DynamicObject, cachedShape: Shape, key: Object): boolean;
    assertCachedKeyAndShapeForWrite(object: DynamicObject, cachedShape: Shape, key: Object): boolean;
    // private getNewShape(object: DynamicObject, value: Object, newPropertyFlags: number, putFlags: number, property: Property, oldShape: Shape): Shape;
    insertIntoPutCache(object: DynamicObject, cachedShape: Shape, value: Object, propertyFlags: number, putFlags: number, property: Property): DynamicObjectLibraryImpl$KeyCacheNode;
    insertIntoRemoveKeyCache(cachedShape: Shape, cachedProperty: Property): DynamicObjectLibraryImpl$KeyCacheNode;
    insertIntoSetPropertyFlagsCache(cachedShape: Shape, propertyFlags: number, cachedProperty: Property): DynamicObjectLibraryImpl$KeyCacheNode;
    putDoubleImpl(object: DynamicObject, cachedShape: Shape, key: Object, value: number, propertyFlags: number, putFlags: number, oldProperty: Property): boolean;
    putImpl(object: DynamicObject, cachedShape: Shape, key: Object, value: Object, propertyFlags: number, putFlags: number, oldProperty: Property): boolean;
    putIntImpl(object: DynamicObject, cachedShape: Shape, key: Object, value: number, propertyFlags: number, putFlags: number, oldProperty: Property): boolean;
    putLongImpl(object: DynamicObject, cachedShape: Shape, key: Object, value: number, propertyFlags: number, putFlags: number, oldProperty: Property): boolean;
    removeKeyImpl(object: DynamicObject, cachedShape: Shape, key: Object, cachedProperty: Property): boolean;
    setPropertyFlagsImpl(object: DynamicObject, cachedShape: Shape, key: Object, propertyFlags: number, cachedProperty: Property): boolean;
}