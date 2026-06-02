import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../../kotlin/Lazy.d.ts'
import type { KotlinBuiltIns } from '../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class AbstractTypeConstructor$ModuleViewTypeConstructor extends Object implements TypeConstructor {
    constructor(null_: AbstractTypeConstructor$ModuleViewTypeConstructor)
    // private kotlinTypeRefiner: KotlinTypeRefiner;
    // private refinedSupertypes$delegate: Lazy<Object>;
    equals(arg0: Object | null): boolean;
    getBuiltIns(): KotlinBuiltIns;
    getDeclarationDescriptor(): ClassifierDescriptor;
    getParameters(): TypeParameterDescriptor[];
    // private getRefinedSupertypes(): KotlinType[];
    getSupertypes(): KotlinType[];
    hashCode(): number;
    isDenotable(): boolean;
    refine(arg0: KotlinTypeRefiner): TypeConstructor;
    toString(): string;
}