import type { Object } from '../../../java/lang/Object.d.ts'
import type { KCallable } from '../../../kotlin/reflect/KCallable.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KFunction } from '../../../kotlin/reflect/KFunction.d.ts'
import type { KProperty0 } from '../../../kotlin/reflect/KProperty0.d.ts'
import type { KProperty1 } from '../../../kotlin/reflect/KProperty1.d.ts'
import type { KProperty2 } from '../../../kotlin/reflect/KProperty2.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
export class KClasses extends Object {
    static cast(paramarg0: KClass<Object>, paramarg1: Object): Object | null;
    static createInstance(paramarg0: KClass<Object>): Object | null;
    static getAllSuperclasses(paramarg0: KClass<Object>): KClass<Object>[];
    static getAllSupertypes(paramarg0: KClass<Object>): KType[];
    static getCompanionObject(paramarg0: KClass<Object>): KClass<Object>;
    static getCompanionObjectInstance(paramarg0: KClass<Object>): Object;
    static getDeclaredFunctions(paramarg0: KClass<Object>): KFunction<Object>[];
    static getDeclaredMemberExtensionFunctions(paramarg0: KClass<Object>): KFunction<Object>[];
    static getDeclaredMemberExtensionProperties(paramarg0: KClass<Object>): KProperty2<Object, Object, Object>[];
    static getDeclaredMemberFunctions(paramarg0: KClass<Object>): KFunction<Object>[];
    static getDeclaredMemberProperties(paramarg0: KClass<Object>): KProperty1<Object, Object>[];
    static getDeclaredMembers(paramarg0: KClass<Object>): KCallable<Object>[];
    static getDefaultType(paramarg0: KClass<Object>): KType;
    static getFunctions(paramarg0: KClass<Object>): KFunction<Object>[];
    static getMemberExtensionFunctions(paramarg0: KClass<Object>): KFunction<Object>[];
    static getMemberExtensionProperties(paramarg0: KClass<Object>): KProperty2<Object, Object, Object>[];
    static getMemberFunctions(paramarg0: KClass<Object>): KFunction<Object>[];
    static getMemberProperties(paramarg0: KClass<Object>): KProperty1<Object, Object>[];
    static getPrimaryConstructor(paramarg0: KClass<Object>): KFunction<Object>;
    static getStaticFunctions(paramarg0: KClass<Object>): KFunction<Object>[];
    static getStaticProperties(paramarg0: KClass<Object>): KProperty0<Object>[];
    static getSuperclasses(paramarg0: KClass<Object>): KClass<Object>[];
    static isSubclassOf(paramarg0: KClass<Object>, paramarg1: KClass<Object>): boolean;
    static isSuperclassOf(paramarg0: KClass<Object>, paramarg1: KClass<Object>): boolean;
    static safeCast(paramarg0: KClass<Object>, paramarg1: Object): Object | null;
}