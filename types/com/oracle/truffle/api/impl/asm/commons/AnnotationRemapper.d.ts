import type { AnnotationVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { Remapper } from '../../../../../../../com/oracle/truffle/api/impl/asm/commons/Remapper.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AnnotationRemapper extends AnnotationVisitor {
    constructor(annotationVisitor: AnnotationVisitor, remapper: Remapper)
    constructor(api: number, annotationVisitor: AnnotationVisitor, remapper: Remapper)
    constructor(api: number, descriptor: string, annotationVisitor: AnnotationVisitor, remapper: Remapper)
    constructor(descriptor: string, annotationVisitor: AnnotationVisitor, remapper: Remapper)
    // private descriptor: string;
    // private remapper: Remapper;
    createAnnotationRemapper(annotationVisitor: AnnotationVisitor): AnnotationVisitor;
    createAnnotationRemapper(descriptor: string, annotationVisitor: AnnotationVisitor): AnnotationVisitor;
    // private mapAnnotationAttributeName(name: string): string;
    orDeprecatedValue(deprecatedAnnotationVisitor: AnnotationVisitor): AnnotationVisitor;
    visit(name: string, value: Object): void;
    visitAnnotation(name: string, descriptor: string): AnnotationVisitor;
    visitArray(name: string): AnnotationVisitor;
    visitEnum(name: string, descriptor: string, value: string): void;
}