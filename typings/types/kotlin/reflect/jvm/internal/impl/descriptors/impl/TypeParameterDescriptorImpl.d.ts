import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { SupertypeLoopChecker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SupertypeLoopChecker.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { AbstractTypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/AbstractTypeParameterDescriptor.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { Variance } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
export class TypeParameterDescriptorImpl extends AbstractTypeParameterDescriptor {
    static createForFurtherModification(paramarg0: DeclarationDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: boolean, paramarg3: Variance, paramarg4: Name, paramarg5: number, paramarg6: SourceElement, paramarg7: (param0: KotlinType) => void, paramarg8: SupertypeLoopChecker, paramarg9: StorageManager): TypeParameterDescriptorImpl;
    static createForFurtherModification(paramarg0: DeclarationDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: boolean, paramarg3: Variance, paramarg4: Name, paramarg5: number, paramarg6: SourceElement, paramarg7: StorageManager): TypeParameterDescriptorImpl;
    static createWithDefaultBound(paramarg0: DeclarationDescriptor, paramarg1: AnnotationDescriptor[], paramarg2: boolean, paramarg3: Variance, paramarg4: Name, paramarg5: number, paramarg6: StorageManager): TypeParameterDescriptor;
    static toString(paramarg0: DeclarationDescriptor): string;
    private constructor(arg0: DeclarationDescriptor, arg1: AnnotationDescriptor[], arg2: boolean, arg3: Variance, arg4: Name, arg5: number, arg6: SourceElement, arg7: (param0: KotlinType) => void, arg8: SupertypeLoopChecker, arg9: StorageManager)
    readonly initialized: boolean;
    // private reportCycleError: (param0: KotlinType) => void;
    readonly upperBounds: KotlinType[];
    addUpperBound(arg0: KotlinType): void;
    // private checkInitialized(): void;
    // private checkUninitialized(): void;
    // private doAddUpperBound(arg0: KotlinType): void;
    isInitialized(): boolean;
    // private nameForAssertions(): string;
    reportSupertypeLoopError(arg0: KotlinType): void;
    resolveUpperBounds(): KotlinType[];
    setInitialized(): void;
}