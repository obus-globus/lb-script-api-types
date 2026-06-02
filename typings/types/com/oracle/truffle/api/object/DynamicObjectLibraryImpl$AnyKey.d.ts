import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObjectLibraryImpl$KeyCacheEntry } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$KeyCacheEntry.d.ts'
import type { DynamicObjectLibraryImpl$KeyCacheNode } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibraryImpl$KeyCacheNode.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DynamicObjectLibraryImpl$AnyKey extends DynamicObjectLibraryImpl$KeyCacheNode {
    static create(): DynamicObjectLibraryImpl$KeyCacheNode;
    static create(paramkey: Object, paramcachedShape: Shape): DynamicObjectLibraryImpl$KeyCacheNode;
    constructor(keyCache: DynamicObjectLibraryImpl$KeyCacheEntry)
    // private keyCache: DynamicObjectLibraryImpl$KeyCacheEntry;
    containsKey(object: DynamicObject, cachedShape: Shape, key: Object): boolean;
    getDoubleOrDefault(object: DynamicObject, cachedShape: Shape, key: Object, defaultValue: Object): number;
    getIntOrDefault(object: DynamicObject, cachedShape: Shape, key: Object, defaultValue: Object): number;
    getLongOrDefault(object: DynamicObject, cachedShape: Shape, key: Object, defaultValue: Object): number;
    getOrDefault(object: DynamicObject, cachedShape: Shape, key: Object, defaultValue: Object): Object;
    getProperty(object: DynamicObject, cachedShape: Shape, key: Object): Property;
    // private insertIntoKeyCache(key: Object, cachedShape: Shape): DynamicObjectLibraryImpl$KeyCacheNode;
    put(object: DynamicObject, cachedShape: Shape, key: Object, value: Object, propertyFlags: number, putFlags: number): boolean;
    removeKey(object: DynamicObject, cachedShape: Shape, key: Object): boolean;
    setPropertyFlags(object: DynamicObject, cachedShape: Shape, key: Object, propertyFlags: number): boolean;
}