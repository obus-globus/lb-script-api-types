import type { Library } from '../../../../../com/oracle/truffle/api/library/Library.d.ts'
import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DynamicObjectLibrary extends Library {
    static getFactory(): LibraryFactory<DynamicObjectLibrary>;
    static getUncached(): DynamicObjectLibrary;
    constructor()
    containsKey(object: DynamicObject, key: Object): boolean;
    getDoubleOrDefault(object: DynamicObject, key: Object, defaultValue: Object): number;
    getDynamicType(object: DynamicObject): Object;
    getIntOrDefault(object: DynamicObject, key: Object, defaultValue: Object): number;
    getKeyArray(object: DynamicObject): Object[];
    getLongOrDefault(object: DynamicObject, key: Object, defaultValue: Object): number;
    getOrDefault(object: DynamicObject, key: Object, defaultValue: Object): Object;
    getProperty(object: DynamicObject, key: Object): Property;
    getPropertyArray(object: DynamicObject): Property[];
    getPropertyFlagsOrDefault(object: DynamicObject, key: Object, defaultValue: number): number;
    getShape(object: DynamicObject): Shape;
    getShapeFlags(object: DynamicObject): number;
    isShared(object: DynamicObject): boolean;
    markShared(object: DynamicObject): void;
    put(object: DynamicObject, key: Object, value: Object): void;
    putConstant(object: DynamicObject, key: Object, value: Object, flags: number): void;
    putDouble(object: DynamicObject, key: Object, value: number): void;
    putIfPresent(object: DynamicObject, key: Object, value: Object): boolean;
    putInt(object: DynamicObject, key: Object, value: number): void;
    putLong(object: DynamicObject, key: Object, value: number): void;
    putWithFlags(object: DynamicObject, key: Object, value: Object, flags: number): void;
    removeKey(object: DynamicObject, key: Object): boolean;
    resetShape(object: DynamicObject, otherShape: Shape): boolean;
    setDynamicType(object: DynamicObject, type: Object): boolean;
    setPropertyFlags(object: DynamicObject, key: Object, propertyFlags: number): boolean;
    setShapeFlags(object: DynamicObject, flags: number): boolean;
    updateShape(object: DynamicObject): boolean;
}