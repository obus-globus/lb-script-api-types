import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { KotlinBuiltIns } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { MemberScope } from '../../../../../../kotlin/reflect/jvm/internal/impl/resolve/scopes/MemberScope.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { IntersectionTypeConstructorMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/IntersectionTypeConstructorMarker.d.ts'
export class IntersectionTypeConstructor extends Object implements TypeConstructor, IntersectionTypeConstructorMarker {
    constructor(arg0: E[])
    private constructor(arg0: E[], arg1: KotlinType)
    // private alternative: KotlinType;
    // private hashCode: number;
    // private intersectedTypes: KotlinType[];
    createScopeForKotlinType(): MemberScope;
    createType(): SimpleType;
    equals(arg0: Object | null): boolean;
    getAlternativeType(): KotlinType;
    getBuiltIns(): KotlinBuiltIns;
    getDeclarationDescriptor(): ClassifierDescriptor;
    getParameters(): TypeParameterDescriptor[];
    getSupertypes(): E[];
    hashCode(): number;
    isDenotable(): boolean;
    makeDebugNameForIntersectionType(arg0: Function1<KotlinType, Object>): string;
    refine(arg0: KotlinTypeRefiner): IntersectionTypeConstructor;
    setAlternative(arg0: KotlinType): IntersectionTypeConstructor;
    toString(): string;
}