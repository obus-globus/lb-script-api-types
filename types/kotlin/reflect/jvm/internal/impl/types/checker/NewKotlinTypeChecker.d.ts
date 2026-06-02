import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { OverridingUtil } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/OverridingUtil.d.ts'
import type { KotlinTypeChecker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeChecker.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export interface NewKotlinTypeChecker extends Object, KotlinTypeChecker{
    getKotlinTypeRefiner(): KotlinTypeRefiner;
    getOverridingUtil(): OverridingUtil;
}