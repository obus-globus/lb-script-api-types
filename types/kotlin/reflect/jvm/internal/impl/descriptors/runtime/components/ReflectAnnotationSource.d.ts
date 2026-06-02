import type { Annotation } from '../../../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { SourceElement } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceElement.d.ts'
import type { SourceFile } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/descriptors/SourceFile.d.ts'
export class ReflectAnnotationSource extends Object implements SourceElement {
    static NO_SOURCE: SourceElement;
    constructor(arg0: Annotation)
    readonly annotation: Annotation;
    getAnnotation(): Annotation;
    getContainingFile(): SourceFile;
}