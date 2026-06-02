import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class IntegerValueTypeConstructor extends Object implements TypeConstructor {
    // private module: ModuleDescriptor;
    readonly supertypes: KotlinType[];
    // private value: number;
    getBuiltIns(): KotlinBuiltIns;
    getDeclarationDescriptor(): void;
    getParameters(): TypeParameterDescriptor[];
    getSupertypes(): E[];
    isDenotable(): boolean;
    refine(arg0: KotlinTypeRefiner): TypeConstructor;
    toString(): string;
}