import type { ReflectionAccessFilterHelper$1 } from '../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AccessibleObject } from '../../../../../../java/lang/reflect/AccessibleObject.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class ReflectionAccessFilterHelper$AccessChecker extends Object {
    private constructor()
    constructor(arg0: ReflectionAccessFilterHelper$1)
    canAccess(arg0: AccessibleObject, arg1: Object): boolean;
}