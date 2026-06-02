import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { TypeConstructorMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeConstructorMarker.d.ts'
export interface TypeConstructor extends Object, TypeConstructorMarker{
    getBuiltIns(): KotlinBuiltIns;
    getDeclarationDescriptor(): ClassifierDescriptor;
    getParameters(): TypeParameterDescriptor[];
    getSupertypes(): E[];
    isDenotable(): boolean;
    refine(arg0: KotlinTypeRefiner): TypeConstructor;
}