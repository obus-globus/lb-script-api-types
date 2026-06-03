import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SupertypeLoopChecker } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SupertypeLoopChecker.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
export class SupertypeLoopChecker$EMPTY extends Object implements SupertypeLoopChecker {
    static INSTANCE: SupertypeLoopChecker$EMPTY;
    private constructor()
    findLoopsInSupertypesAndDisconnect(arg0: TypeConstructor, arg1: E[], arg2: (param0: TypeConstructor) => KotlinType[], arg3: (param0: KotlinType) => void): E[];
}