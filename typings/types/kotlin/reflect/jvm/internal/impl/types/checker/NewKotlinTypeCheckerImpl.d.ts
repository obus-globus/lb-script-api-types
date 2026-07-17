import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { OverridingUtil } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/OverridingUtil.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeCheckerState } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeCheckerState.d.ts'
import type { UnwrappedType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
import type { KotlinTypeChecker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeChecker.d.ts'
import type { KotlinTypePreparator } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypePreparator.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { NewKotlinTypeChecker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/NewKotlinTypeChecker.d.ts'
import type { NewKotlinTypeChecker$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/NewKotlinTypeChecker$Companion.d.ts'
export class NewKotlinTypeCheckerImpl extends Object implements NewKotlinTypeChecker {
    static Companion: NewKotlinTypeChecker$Companion;
    static DEFAULT: KotlinTypeChecker;
    constructor(arg0: KotlinTypeRefiner, arg1: KotlinTypePreparator)
    readonly kotlinTypePreparator: KotlinTypePreparator;
    readonly kotlinTypeRefiner: KotlinTypeRefiner;
    readonly overridingUtil: OverridingUtil;
    equalTypes(arg0: KotlinType, arg1: KotlinType): boolean;
    equalTypes(arg0: TypeCheckerState, arg1: UnwrappedType, arg2: UnwrappedType): boolean;
    getKotlinTypePreparator(): KotlinTypePreparator;
    getKotlinTypeRefiner(): KotlinTypeRefiner;
    getOverridingUtil(): OverridingUtil;
    isSubtypeOf(arg0: KotlinType, arg1: KotlinType): boolean;
    isSubtypeOf(arg0: TypeCheckerState, arg1: UnwrappedType, arg2: UnwrappedType): boolean;
}