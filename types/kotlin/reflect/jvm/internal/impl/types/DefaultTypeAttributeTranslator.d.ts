import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { DeclarationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/DeclarationDescriptor.d.ts'
import type { AnnotationDescriptor } from '../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { TypeAttribute } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttribute.d.ts'
import type { TypeAttributeTranslator } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeAttributeTranslator.d.ts'
import type { TypeConstructor } from '../../../../../../kotlin/reflect/jvm/internal/impl/types/TypeConstructor.d.ts'
export class DefaultTypeAttributeTranslator extends Object implements TypeAttributeTranslator {
    static INSTANCE: DefaultTypeAttributeTranslator;
    private constructor()
    toAttributes(arg0: AnnotationDescriptor[], arg1: TypeConstructor, arg2: DeclarationDescriptor): TypeAttribute<Object>[];
}