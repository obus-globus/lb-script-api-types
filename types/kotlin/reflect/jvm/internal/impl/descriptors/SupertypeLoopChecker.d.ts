import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
export interface SupertypeLoopChecker extends Object{
    findLoopsInSupertypesAndDisconnect(arg0: TypeConstructor, arg1: E[], arg2: Function1<TypeConstructor, KotlinType[]>, arg3: Function1<KotlinType, void>): E[];
}