import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { IllegalAccessException } from '../../../../../java/lang/IllegalAccessException.d.ts'
import type { RuntimeException } from '../../../../../java/lang/RuntimeException.d.ts'
import type { AccessibleObject } from '../../../../../java/lang/reflect/AccessibleObject.d.ts'
import type { Constructor } from '../../../../../java/lang/reflect/Constructor.d.ts'
import type { Field } from '../../../../../java/lang/reflect/Field.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class ReflectionHelper extends Object {
    static constructorToString(paramarg0: Constructor<Object>): string;
    static createExceptionForUnexpectedIllegalAccess(paramarg0: IllegalAccessException): RuntimeException;
    static fieldToString(paramarg0: Field): string;
    static getAccessibleObjectDescription(paramarg0: AccessibleObject, paramarg1: boolean): string;
    static getAccessor(paramarg0: Class<Object>, paramarg1: Field): Method;
    static getCanonicalRecordConstructor<T extends unknown>(paramarg0: Class<T>): Constructor<T>;
    static getRecordComponentNames(paramarg0: Class<Object>): string[];
    static isAnonymousOrNonStaticLocal(paramarg0: Class<Object>): boolean;
    static isRecord(paramarg0: Class<Object>): boolean;
    static isStatic(paramarg0: Class<Object>): boolean;
    static makeAccessible(paramarg0: AccessibleObject): void;
    static tryMakeAccessible(paramarg0: Constructor<Object>): string;
    private constructor()
}