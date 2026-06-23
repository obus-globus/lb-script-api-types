import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { SupertypeLoopChecker } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SupertypeLoopChecker.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { DeclarationDescriptorNonRootImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/DeclarationDescriptorNonRootImpl.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { NotNullLazyValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { KotlinType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { Variance } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
export abstract class AbstractTypeParameterDescriptor extends DeclarationDescriptorNonRootImpl implements TypeParameterDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: StorageManager, arg1: DeclarationDescriptor, arg2: AnnotationDescriptor[], arg3: Name, arg4: Variance, arg5: boolean, arg6: number, arg7: SourceElement, arg8: SupertypeLoopChecker)
    readonly defaultType: NotNullLazyValue<SimpleType>;
    readonly index: number;
    readonly reified: boolean;
    readonly storageManager: StorageManager;
    readonly typeConstructor: NotNullLazyValue<TypeConstructor>;
    readonly variance: Variance;
    accept<R extends unknown, D extends unknown>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    getDefaultType(): SimpleType;
    getIndex(): number;
    getOriginal(): TypeParameterDescriptor;
    getStorageManager(): StorageManager;
    getTypeConstructor(): TypeConstructor;
    getUpperBounds(): KotlinType[];
    getVariance(): Variance;
    isCapturedFromOuterDeclaration(): boolean;
    isReified(): boolean;
    processBoundsWithoutCycles(arg0: KotlinType[]): KotlinType[];
    reportSupertypeLoopError(arg0: KotlinType): void;
    resolveUpperBounds(): KotlinType[];
}