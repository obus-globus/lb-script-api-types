import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Annotated } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/Annotated.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { TypeProjection } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeProjection.d.ts'
import type { UnwrappedType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/UnwrappedType.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { KotlinTypeMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/KotlinTypeMarker.d.ts'
export abstract class KotlinType extends Object implements Annotated, KotlinTypeMarker {
    private constructor()
    // private cachedHashCode: number;
    // private computeHashCode(): number;
    equals(arg0: Object | null): boolean;
    getAnnotations(): AnnotationDescriptor[];
    getArguments(): TypeProjection[];
    getAttributes(): TypeAttribute<Object>[];
    getConstructor(): TypeConstructor;
    getMemberScope(): MemberScope;
    hashCode(): number;
    isMarkedNullable(): boolean;
    refine(arg0: KotlinTypeRefiner): KotlinType;
    unwrap(): UnwrappedType;
}