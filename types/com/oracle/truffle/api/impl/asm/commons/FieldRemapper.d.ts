import type { AnnotationVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { FieldVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/FieldVisitor.d.ts'
import type { TypePath } from '../../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { Remapper } from '../../../../../../../com/oracle/truffle/api/impl/asm/commons/Remapper.d.ts'
export class FieldRemapper extends FieldVisitor {
    constructor(fieldVisitor: FieldVisitor, remapper: Remapper)
    constructor(api: number, fieldVisitor: FieldVisitor, remapper: Remapper)
    // private remapper: Remapper;
    createAnnotationRemapper(annotationVisitor: AnnotationVisitor): AnnotationVisitor;
    createAnnotationRemapper(descriptor: string, annotationVisitor: AnnotationVisitor): AnnotationVisitor;
    visitAnnotation(descriptor: string, visible: boolean): AnnotationVisitor;
    visitTypeAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
}