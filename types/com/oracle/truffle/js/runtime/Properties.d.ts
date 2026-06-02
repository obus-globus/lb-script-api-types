import type { DynamicObject } from '../../../../../com/oracle/truffle/api/object/DynamicObject.d.ts'
import type { DynamicObjectLibrary } from '../../../../../com/oracle/truffle/api/object/DynamicObjectLibrary.d.ts'
import type { Property } from '../../../../../com/oracle/truffle/api/object/Property.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Properties extends Object {
    static containsKey(paramlib: DynamicObjectLibrary, paramobj: DynamicObject, paramkey: Object): boolean;
    static containsKeyUncached(paramobj: DynamicObject, paramkey: Object): boolean;
    static getOrDefault(paramlib: DynamicObjectLibrary, paramobj: DynamicObject, paramkey: Object, paramdefaultValue: Object): Object;
    static getOrDefaultUncached(paramobj: DynamicObject, paramkey: Object, paramdefaultValue: Object): Object;
    static getProperty(paramlib: DynamicObjectLibrary, paramobj: DynamicObject, paramkey: Object): Property;
    static getPropertyUncached(paramobj: DynamicObject, paramkey: Object): Property;
    static put(paramlib: DynamicObjectLibrary, paramobj: DynamicObject, paramkey: Object, paramvalue: Object): void;
    static putConstant(paramlib: DynamicObjectLibrary, paramobj: DynamicObject, paramkey: Object, paramvalue: Object, paramflags: number): void;
    static putConstantUncached(paramobj: DynamicObject, paramkey: Object, paramvalue: Object, paramflags: number): void;
    static putIfPresent(paramlib: DynamicObjectLibrary, paramobj: DynamicObject, paramkey: Object, paramvalue: Object): boolean;
    static putIfPresentUncached(paramobj: DynamicObject, paramkey: Object, paramvalue: Object): boolean;
    static putUncached(paramobj: DynamicObject, paramkey: Object, paramvalue: Object): void;
    static putWithFlags(paramlib: DynamicObjectLibrary, paramobj: DynamicObject, paramkey: Object, paramvalue: Object, paramflags: number): void;
    static putWithFlagsUncached(paramobj: DynamicObject, paramkey: Object, paramvalue: Object, paramflags: number): void;
    static removeKey(paramlib: DynamicObjectLibrary, paramobj: DynamicObject, paramkey: Object): boolean;
    static removeKeyUncached(paramobj: DynamicObject, paramkey: Object): boolean;
    static setPropertyFlags(paramlib: DynamicObjectLibrary, paramobj: DynamicObject, paramkey: Object, paramflags: number): void;
    static setPropertyFlagsUncached(paramobj: DynamicObject, paramkey: Object, paramflags: number): void;
    private constructor()
}