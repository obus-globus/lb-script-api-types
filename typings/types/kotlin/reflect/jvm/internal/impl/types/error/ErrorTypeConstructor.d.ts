import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { KotlinBuiltIns } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/KotlinBuiltIns.d.ts'
import type { ClassifierDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { KotlinTypeRefiner } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/checker/KotlinTypeRefiner.d.ts'
import type { ErrorTypeKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/error/ErrorTypeKind.d.ts'
export class ErrorTypeConstructor extends Object implements TypeConstructor {
    constructor(arg0: ErrorTypeKind, ...arg1: string[])
    // private debugText: string;
    // private formatParams: string[];
    readonly kind: ErrorTypeKind;
    getBuiltIns(): KotlinBuiltIns;
    getDeclarationDescriptor(): ClassifierDescriptor;
    getKind(): ErrorTypeKind;
    getParam(arg0: number): string;
    getParameters(): TypeParameterDescriptor[];
    getSupertypes(): KotlinType[];
    isDenotable(): boolean;
    refine(arg0: KotlinTypeRefiner): TypeConstructor;
    toString(): string;
}