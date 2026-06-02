import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { DisjointKeysUnionTypeSubstitution$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/DisjointKeysUnionTypeSubstitution$Companion.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { TypeSubstitution } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution.d.ts'
import type { TypeSubstitution$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeSubstitution$Companion.d.ts'
import type { Variance } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
export class DisjointKeysUnionTypeSubstitution extends TypeSubstitution {
    static Companion: DisjointKeysUnionTypeSubstitution$Companion;
    static Companion: TypeSubstitution$Companion;
    static EMPTY: TypeSubstitution;
    static create(paramarg0: TypeSubstitution, paramarg1: TypeSubstitution): TypeSubstitution;
    private constructor(arg0: TypeSubstitution, arg1: TypeSubstitution)
    // private first: TypeSubstitution;
    // private second: TypeSubstitution;
    approximateCapturedTypes(): boolean;
    approximateContravariantCapturedTypes(): boolean;
    filterAnnotations(arg0: AnnotationDescriptor[]): AnnotationDescriptor[];
    get(arg0: KotlinType): TypeProjection;
    isEmpty(): boolean;
    prepareTopLevelType(arg0: KotlinType, arg1: Variance): KotlinType;
}