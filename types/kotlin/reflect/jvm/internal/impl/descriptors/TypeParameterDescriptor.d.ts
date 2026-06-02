import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClassifierDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/ClassifierDescriptor.d.ts'
import type { StorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { Variance } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
import type { TypeParameterMarker } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/model/TypeParameterMarker.d.ts'
export interface TypeParameterDescriptor extends Object, ClassifierDescriptor, TypeParameterMarker{
    getIndex(): number;
    getOriginal(): TypeParameterDescriptor;
    getStorageManager(): StorageManager;
    getTypeConstructor(): TypeConstructor;
    getUpperBounds(): KotlinType[];
    getVariance(): Variance;
    isCapturedFromOuterDeclaration(): boolean;
    isReified(): boolean;
}