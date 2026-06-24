import type { FunctionClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/builtins/functions/FunctionClassDescriptor.d.ts'
import type { SupertypeLoopChecker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SupertypeLoopChecker.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { AbstractClassTypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/AbstractClassTypeConstructor.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
export class FunctionClassDescriptor$FunctionTypeConstructor extends AbstractClassTypeConstructor {
    constructor(null_: FunctionClassDescriptor)
    computeSupertypes(): KotlinType[];
    getDeclarationDescriptor(): FunctionClassDescriptor;
    getParameters(): TypeParameterDescriptor[];
    getSupertypeLoopChecker(): SupertypeLoopChecker;
    isDenotable(): boolean;
    toString(): string;
}