import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TypeCheckerState } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState.d.ts'
import type { ClassicTypeSystemContext } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/ClassicTypeSystemContext.d.ts'
import type { KotlinTypePreparator } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypePreparator.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class ClassicTypeCheckerStateKt extends Object {
    static createClassicTypeCheckerState(paramarg0: boolean, paramarg1: boolean, paramarg2: ClassicTypeSystemContext, paramarg3: KotlinTypePreparator, paramarg4: KotlinTypeRefiner): TypeCheckerState;
}