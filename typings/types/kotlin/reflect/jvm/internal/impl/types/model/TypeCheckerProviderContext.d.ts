import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TypeCheckerState } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState.d.ts'
export interface TypeCheckerProviderContext extends Object{
    newTypeCheckerState(arg0: boolean, arg1: boolean, arg2: boolean): TypeCheckerState;
}