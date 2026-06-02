import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeCheckingProcedureCallbacks } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/TypeCheckingProcedureCallbacks.d.ts'
export class TypeCheckerProcedureCallbacksImpl extends Object implements TypeCheckingProcedureCallbacks {
    constructor()
    assertEqualTypeConstructors(arg0: TypeConstructor, arg1: TypeConstructor): boolean;
}