import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
import type { FqName } from '../../../../../../../kotlin/reflect/jvm/internal/impl/name/FqName.d.ts'
export class Annotations$DefaultImpls extends Object {
    static findAnnotation(paramarg0: AnnotationDescriptor[], paramarg1: FqName): AnnotationDescriptor;
    static hasAnnotation(paramarg0: AnnotationDescriptor[], paramarg1: FqName): boolean;
}