import type { ReflectionAccessFilter } from '../../../../com/google/gson/ReflectionAccessFilter.d.ts'
import type { ReflectionAccessFilter$FilterResult } from '../../../../com/google/gson/ReflectionAccessFilter$FilterResult.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { AccessibleObject } from '../../../../java/lang/reflect/AccessibleObject.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ReflectionAccessFilterHelper extends Object {
    static canAccess(paramarg0: AccessibleObject, paramarg1: Object): boolean;
    static getFilterResult(paramarg0: ReflectionAccessFilter[], paramarg1: Class<Object>): ReflectionAccessFilter$FilterResult;
    static isAndroidType(paramarg0: Class<Object>): boolean;
    static isAnyPlatformType(paramarg0: Class<Object>): boolean;
    static isJavaType(paramarg0: Class<Object>): boolean;
    private constructor()
}