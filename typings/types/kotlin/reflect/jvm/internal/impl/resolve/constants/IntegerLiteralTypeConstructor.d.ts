import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Lazy } from '../../../../../../../kotlin/Lazy.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { ModuleDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ModuleDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { IntegerLiteralTypeConstructor$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/resolve/constants/IntegerLiteralTypeConstructor$Companion.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
export class IntegerLiteralTypeConstructor extends Object implements TypeConstructor {
    static Companion: IntegerLiteralTypeConstructor$Companion;
    private constructor(arg0: number, arg1: ModuleDescriptor, arg2: KotlinType[])
    constructor(arg0: number, arg1: ModuleDescriptor, arg2: (Object | null)[], arg3: DefaultConstructorMarker)
    // private module: ModuleDescriptor;
    readonly possibleTypes: KotlinType[];
    // private supertypes$delegate: Lazy<Object>;
    // private type: SimpleType;
    // private value: number;
    getBuiltIns(): KotlinBuiltIns;
    getDeclarationDescriptor(): ClassifierDescriptor;
    getParameters(): TypeParameterDescriptor[];
    getPossibleTypes(): KotlinType[];
    getSupertypes(): KotlinType[];
    // private getSupertypes(): KotlinType[];
    // private isContainsOnlyUnsignedTypes(): boolean;
    isDenotable(): boolean;
    refine(arg0: KotlinTypeRefiner): TypeConstructor;
    toString(): string;
    // private valueToString(): string;
}