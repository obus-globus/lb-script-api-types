import type { AbstractTypeAliasDescriptor$typeConstructor$1 } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/features/FeatureSilentScreen$drawInventoryTag$1.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { DescriptorVisibility } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DescriptorVisibility.d.ts'
import type { Modality } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/Modality.d.ts'
import type { SourceElement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeAliasDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeAliasDescriptor.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { DeclarationDescriptorNonRootImpl } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/DeclarationDescriptorNonRootImpl.d.ts'
import type { TypeAliasConstructorDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/impl/TypeAliasConstructorDescriptor.d.ts'
import type { Name } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { NotNullLazyValue } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/NotNullLazyValue.d.ts'
import type { StorageManager } from '../../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { SimpleType } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
export abstract class AbstractTypeAliasDescriptor extends DeclarationDescriptorNonRootImpl implements TypeAliasDescriptor {
    static toString(paramarg0: DeclarationDescriptor): string;
    constructor(arg0: StorageManager, arg1: DeclarationDescriptor, arg2: AnnotationDescriptor[], arg3: Name, arg4: SourceElement, arg5: DescriptorVisibility)
    // private constructors$delegate: NotNullLazyValue<Object>;
    // private declaredTypeParametersImpl: TypeParameterDescriptor[];
    // private storageManager: StorageManager;
    readonly typeConstructor: AbstractTypeAliasDescriptor$typeConstructor$1;
    // private visibilityImpl: DescriptorVisibility;
    accept<R extends Object | number | string | boolean, D extends Object | number | string | boolean>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    computeDefaultType(): SimpleType;
    getClassDescriptor(): ClassDescriptor;
    getDeclaredTypeParameters(): TypeParameterDescriptor[];
    getDefaultType(): SimpleType;
    getExpandedType(): SimpleType;
    getModality(): Modality;
    getOriginal(): TypeAliasDescriptor;
    getStorageManager(): StorageManager;
    getTypeAliasConstructors(): TypeAliasConstructorDescriptor[];
    getTypeConstructor(): TypeConstructor;
    getTypeConstructorTypeParameters(): TypeParameterDescriptor[];
    getUnderlyingType(): SimpleType;
    getVisibility(): DescriptorVisibility;
    initialize(arg0: TypeParameterDescriptor[]): void;
    isActual(): boolean;
    isExpect(): boolean;
    isExternal(): boolean;
    isInner(): boolean;
    toString(): string;
}