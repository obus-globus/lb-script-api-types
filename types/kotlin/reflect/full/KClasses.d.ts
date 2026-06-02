import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KFunction } from '../../../kotlin/reflect/KFunction.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
export class KClasses extends Object {
    static cast(paramarg0: KClass<Object>, paramarg1: Object): Object | null;
    static createInstance(paramarg0: KClass<Object>): Object | null;
    static getAllSuperclasses(paramarg0: KClass<Object>): E[];
    static getAllSupertypes(paramarg0: KClass<Object>): E[];
    static getCompanionObject(paramarg0: KClass<Object>): KClass<Object>;
    static getCompanionObjectInstance(paramarg0: KClass<Object>): Object;
    static getDeclaredFunctions(paramarg0: KClass<Object>): E[];
    static getDeclaredMemberExtensionFunctions(paramarg0: KClass<Object>): E[];
    static getDeclaredMemberExtensionProperties(paramarg0: KClass<Object>): E[];
    static getDeclaredMemberFunctions(paramarg0: KClass<Object>): E[];
    static getDeclaredMemberProperties(paramarg0: KClass<Object>): E[];
    static getDeclaredMembers(paramarg0: KClass<Object>): E[];
    static getDefaultType(paramarg0: KClass<Object>): KType;
    static getFunctions(paramarg0: KClass<Object>): E[];
    static getMemberExtensionFunctions(paramarg0: KClass<Object>): E[];
    static getMemberExtensionProperties(paramarg0: KClass<Object>): E[];
    static getMemberFunctions(paramarg0: KClass<Object>): E[];
    static getMemberProperties(paramarg0: KClass<Object>): E[];
    static getPrimaryConstructor(paramarg0: KClass<Object>): KFunction<Object>;
    static getStaticFunctions(paramarg0: KClass<Object>): E[];
    static getStaticProperties(paramarg0: KClass<Object>): E[];
    static getSuperclasses(paramarg0: KClass<Object>): (Object | null)[];
    static isSubclassOf(paramarg0: KClass<Object>, paramarg1: KClass<Object>): boolean;
    static isSuperclassOf(paramarg0: KClass<Object>, paramarg1: KClass<Object>): boolean;
    static safeCast(paramarg0: KClass<Object>, paramarg1: Object): Object | null;
}