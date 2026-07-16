import type { Object } from '../../../java/lang/Object.d.ts'
import type { KCallable } from '../../../kotlin/reflect/KCallable.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KFunction } from '../../../kotlin/reflect/KFunction.d.ts'
import type { KProperty0 } from '../../../kotlin/reflect/KProperty0.d.ts'
import type { KProperty1 } from '../../../kotlin/reflect/KProperty1.d.ts'
import type { KProperty2 } from '../../../kotlin/reflect/KProperty2.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
export class KClasses extends Object {
    static cast<T extends unknown>(self: KClass<T>, value: Object | null): T;
    static createDefaultType(self: KClass<Object>): KType;
    static createInstance<T extends unknown>(self: KClass<T>): T;
    static getAllSuperclasses(paramarg0: KClass<Object>): KClass<Object>[];
    static getAllSupertypes(paramarg0: KClass<Object>): KType[];
    static getCompanionObject(paramarg0: KClass<Object>): KClass<Object>;
    static getCompanionObjectInstance(paramarg0: KClass<Object>): Object;
    static getDeclaredFunctions(paramarg0: KClass<Object>): KFunction<Object>[];
    static getDeclaredMemberExtensionFunctions(paramarg0: KClass<Object>): KFunction<Object>[];
    static getDeclaredMemberExtensionProperties<T extends unknown>(paramarg0: KClass<T>): KProperty2<T, Object, Object>[];
    static getDeclaredMemberFunctions(paramarg0: KClass<Object>): KFunction<Object>[];
    static getDeclaredMemberProperties<T extends unknown>(paramarg0: KClass<T>): KProperty1<T, Object>[];
    static getDeclaredMembers(paramarg0: KClass<Object>): KCallable<Object>[];
    static getDefaultType(paramarg0: KClass<Object>): KType;
    static getFunctions(paramarg0: KClass<Object>): KFunction<Object>[];
    static getMemberExtensionFunctions(paramarg0: KClass<Object>): KFunction<Object>[];
    static getMemberExtensionProperties<T extends unknown>(paramarg0: KClass<T>): KProperty2<T, Object, Object>[];
    static getMemberFunctions(paramarg0: KClass<Object>): KFunction<Object>[];
    static getMemberProperties<T extends unknown>(paramarg0: KClass<T>): KProperty1<T, Object>[];
    static getPrimaryConstructor<T extends unknown>(paramarg0: KClass<T>): KFunction<T>;
    static getStaticFunctions(paramarg0: KClass<Object>): KFunction<Object>[];
    static getStaticProperties(paramarg0: KClass<Object>): KProperty0<Object>[];
    static getSuperclasses(paramarg0: KClass<Object>): KClass<Object>[];
    static isSubclassOf(self: KClass<Object>, base: KClass<Object>): boolean;
    static isSuperclassOf(self: KClass<Object>, derived: KClass<Object>): boolean;
    static safeCast<T extends unknown>(self: KClass<T>, value: Object | null): T | null;
}