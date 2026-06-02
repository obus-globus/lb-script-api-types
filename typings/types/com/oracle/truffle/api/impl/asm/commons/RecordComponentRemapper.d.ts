import type { AnnotationVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { RecordComponentVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/RecordComponentVisitor.d.ts'
import type { TypePath } from '../../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { Remapper } from '../../../../../../../com/oracle/truffle/api/impl/asm/commons/Remapper.d.ts'
export class RecordComponentRemapper extends RecordComponentVisitor {
    constructor(recordComponentVisitor: RecordComponentVisitor, remapper: Remapper)
    constructor(api: number, recordComponentVisitor: RecordComponentVisitor, remapper: Remapper)
    // private remapper: Remapper;
    createAnnotationRemapper(annotationVisitor: AnnotationVisitor): AnnotationVisitor;
    createAnnotationRemapper(descriptor: string, annotationVisitor: AnnotationVisitor): AnnotationVisitor;
    visitAnnotation(descriptor: string, visible: boolean): AnnotationVisitor;
    visitTypeAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
}