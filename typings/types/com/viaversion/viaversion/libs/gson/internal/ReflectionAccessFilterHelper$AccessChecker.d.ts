import type { AccessibleObject } from '../../../../../../java/lang/reflect/AccessibleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ReflectionAccessFilterHelper$AccessChecker extends Object {
    constructor(arg0: any)
    canAccess(arg0: AccessibleObject, arg1: Object): boolean;
}