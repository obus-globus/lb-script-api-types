import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { DeclarationDescriptorVisitor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptorVisitor.d.ts'
import type { SourceElement } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { TypeParameterDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/TypeParameterDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { Name } from '../../../../../../kotlin/reflect/jvm/internal/impl/name/Name.d.ts'
import type { StorageManager } from '../../../../../../kotlin/reflect/jvm/internal/impl/storage/StorageManager.d.ts'
import type { KotlinType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/KotlinType.d.ts'
import type { SimpleType } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/SimpleType.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
import type { Variance } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/Variance.d.ts'
export class CapturedTypeParameterDescriptor extends Object implements TypeParameterDescriptor {
    constructor(arg0: TypeParameterDescriptor, arg1: DeclarationDescriptor, arg2: number)
    // private declarationDescriptor: DeclarationDescriptor;
    // private declaredTypeParametersCount: number;
    // private originalDescriptor: TypeParameterDescriptor;
    accept<R extends unknown, D extends unknown>(arg0: DeclarationDescriptorVisitor<R, D>, arg1: D): R;
    getAnnotations(): AnnotationDescriptor[];
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
    toString(): string;
}