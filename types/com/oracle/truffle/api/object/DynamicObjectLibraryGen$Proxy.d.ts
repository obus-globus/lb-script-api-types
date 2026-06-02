import type { LibraryFactory } from '../../../../../com/oracle/truffle/api/library/LibraryFactory.d.ts'
import type { ReflectionLibrary } from '../../../../../com/oracle/truffle/api/library/ReflectionLibrary.d.ts'
import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObjectLibrary } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Shape } from '../../../../../com/oracle/truffle/api/object/Shape.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DynamicObjectLibraryGen$Proxy extends DynamicObjectLibrary {
    static getFactory(): LibraryFactory<DynamicObjectLibrary>;
    static getUncached(): DynamicObjectLibrary;
    constructor(lib: ReflectionLibrary)
    // private lib: ReflectionLibrary;
    accepts(receiver_: Object): boolean;
    containsKey(receiver_: DynamicObject, key: Object): boolean;
    getDoubleOrDefault(receiver_: DynamicObject, key: Object, defaultValue: Object): number;
    getDynamicType(receiver_: DynamicObject): Object;
    getIntOrDefault(receiver_: DynamicObject, key: Object, defaultValue: Object): number;
    getKeyArray(receiver_: DynamicObject): Object[];
    getLongOrDefault(receiver_: DynamicObject, key: Object, defaultValue: Object): number;
    getOrDefault(receiver_: DynamicObject, key: Object, defaultValue: Object): Object;
    getProperty(receiver_: DynamicObject, key: Object): Property;
    getPropertyArray(receiver_: DynamicObject): Property[];
    getShape(receiver_: DynamicObject): Shape;
    getShapeFlags(receiver_: DynamicObject): number;
    isShared(receiver_: DynamicObject): boolean;
    markShared(receiver_: DynamicObject): void;
    put(receiver_: DynamicObject, key: Object, value: Object): void;
    putConstant(receiver_: DynamicObject, key: Object, value: Object, flags: number): void;
    putDouble(receiver_: DynamicObject, key: Object, value: number): void;
    putIfPresent(receiver_: DynamicObject, key: Object, value: Object): boolean;
    putInt(receiver_: DynamicObject, key: Object, value: number): void;
    putLong(receiver_: DynamicObject, key: Object, value: number): void;
    putWithFlags(receiver_: DynamicObject, key: Object, value: Object, flags: number): void;
    removeKey(receiver_: DynamicObject, key: Object): boolean;
    resetShape(receiver_: DynamicObject, otherShape: Shape): boolean;
    setDynamicType(receiver_: DynamicObject, type: Object): boolean;
    setPropertyFlags(receiver_: DynamicObject, key: Object, propertyFlags: number): boolean;
    setShapeFlags(receiver_: DynamicObject, flags: number): boolean;
    updateShape(receiver_: DynamicObject): boolean;
}