import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { DynamicType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/DynamicType.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeAliasExpander$Companion } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAliasExpander$Companion.d.ts'
import type { TypeAliasExpansion } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAliasExpansion.d.ts'
import type { TypeAliasExpansionReportStrategy } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAliasExpansionReportStrategy.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
export class TypeAliasExpander extends Object {
    static Companion: TypeAliasExpander$Companion;
    constructor(arg0: TypeAliasExpansionReportStrategy, arg1: boolean)
    // private reportStrategy: TypeAliasExpansionReportStrategy;
    // private shouldCheckBounds: boolean;
    // private checkRepeatedAnnotations(arg0: AnnotationDescriptor[], arg1: AnnotationDescriptor[]): void;
    // private checkTypeArgumentsSubstitution(arg0: KotlinType, arg1: KotlinType): void;
    // private combineAttributes(arg0: DynamicType, arg1: TypeAttribute<any>[]): DynamicType;
    // private combineAttributes(arg0: SimpleType, arg1: TypeAttribute<any>[]): SimpleType;
    // private combineNullability(arg0: SimpleType, arg1: KotlinType): SimpleType;
    // private combineNullabilityAndAnnotations(arg0: SimpleType, arg1: KotlinType): SimpleType;
    // private createAbbreviation(arg0: TypeAliasExpansion, arg1: TypeAttribute<any>[], arg2: boolean): SimpleType;
    // private createdCombinedAttributes(arg0: KotlinType, arg1: TypeAttribute<any>[]): TypeAttribute<any>[];
    expand(arg0: TypeAliasExpansion, arg1: TypeAttribute<any>[]): SimpleType;
    // private expandNonArgumentTypeProjection(arg0: TypeProjection, arg1: TypeAliasExpansion, arg2: number): TypeProjection;
    // private expandRecursively(arg0: TypeAliasExpansion, arg1: TypeAttribute<any>[], arg2: boolean, arg3: number, arg4: boolean): SimpleType;
    // private expandTypeProjection(arg0: TypeProjection, arg1: TypeAliasExpansion, arg2: TypeParameterDescriptor, arg3: number): TypeProjection;
    // private substituteArguments(arg0: SimpleType, arg1: TypeAliasExpansion, arg2: number): SimpleType;
}