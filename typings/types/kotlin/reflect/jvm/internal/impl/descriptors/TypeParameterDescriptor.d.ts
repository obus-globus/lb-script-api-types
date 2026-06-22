import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { SourceElement } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { StorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { Variance } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
import type { TypeParameterMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeParameterMarker.d.ts'
export interface TypeParameterDescriptor extends Object, ClassifierDescriptor, TypeParameterMarker{
    getContainingDeclaration(): DeclarationDescriptor;
    getDefaultType(): SimpleType;
    getIndex(): number;
    getName(): Name;
    getOriginal(): TypeParameterDescriptor;
    getSource(): SourceElement;
    getStorageManager(): StorageManager;
    getTypeConstructor(): TypeConstructor;
    getUpperBounds(): KotlinType[];
    getVariance(): Variance;
    isCapturedFromOuterDeclaration(): boolean;
    isReified(): boolean;
}