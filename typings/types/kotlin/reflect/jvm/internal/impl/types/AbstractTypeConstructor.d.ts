import type { SupertypeLoopChecker } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SupertypeLoopChecker.d.ts'
import type { NotNullLazyValue } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { AbstractTypeConstructor$Supertypes } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/AbstractTypeConstructor$Supertypes.d.ts'
import type { ClassifierBasedTypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/ClassifierBasedTypeConstructor.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export abstract class AbstractTypeConstructor extends ClassifierBasedTypeConstructor {
    constructor(arg0: StorageManager)
    // private shouldReportCyclicScopeWithCompanionWarning: boolean;
    readonly supertypes: NotNullLazyValue<AbstractTypeConstructor$Supertypes>;
    // private computeNeighbours(arg0: TypeConstructor, arg1: boolean): KotlinType[];
    computeSupertypes(): KotlinType[];
    defaultSupertypeIfEmpty(): KotlinType;
    getAdditionalNeighboursInSupertypeGraph(arg0: boolean): KotlinType[];
    getShouldReportCyclicScopeWithCompanionWarning(): boolean;
    getSupertypeLoopChecker(): SupertypeLoopChecker;
    getSupertypes(): KotlinType[];
    processSupertypesWithoutCycles(arg0: KotlinType[]): KotlinType[];
    refine(arg0: KotlinTypeRefiner): TypeConstructor;
    reportScopesLoopError(arg0: KotlinType): void;
    reportSupertypeLoopError(arg0: KotlinType): void;
}