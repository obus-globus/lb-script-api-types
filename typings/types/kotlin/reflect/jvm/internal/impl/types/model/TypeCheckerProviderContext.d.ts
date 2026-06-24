import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TypeCheckerState } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState.d.ts'
import type { TypeSystemContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeSystemContext.d.ts'
export interface TypeCheckerProviderContext extends Object{
    newTypeCheckerState(arg0: boolean, arg1: boolean, arg2: boolean): TypeCheckerState;
    newTypeCheckerState(arg0: TypeSystemContext, arg1: boolean, arg2: boolean, arg3: boolean): TypeCheckerState;
}