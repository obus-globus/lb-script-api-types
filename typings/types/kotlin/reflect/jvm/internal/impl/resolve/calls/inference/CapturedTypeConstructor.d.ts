import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { TypeConstructor } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { CapturedTypeConstructorMarker } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/types/model/CapturedTypeConstructorMarker.d.ts'
export interface CapturedTypeConstructor extends Object, TypeConstructor, CapturedTypeConstructorMarker{
    getBuiltIns(): KotlinBuiltIns;
    getDeclarationDescriptor(): ClassifierDescriptor;
    getProjection(): TypeProjection;
    isDenotable(): boolean;
    refine(arg0: KotlinTypeRefiner): TypeConstructor;
}