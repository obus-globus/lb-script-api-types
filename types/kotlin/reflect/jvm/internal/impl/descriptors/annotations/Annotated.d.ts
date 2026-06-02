import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
export interface Annotated extends Object{
    getAnnotations(): AnnotationDescriptor[];
}