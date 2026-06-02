import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Annotated } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/Annotated.d.ts'
import type { AnnotationDescriptor } from '../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotationDescriptor.d.ts'
export class AnnotatedImpl extends Object implements Annotated {
    constructor(arg0: AnnotationDescriptor[])
    readonly annotations: AnnotationDescriptor[];
    getAnnotations(): AnnotationDescriptor[];
}