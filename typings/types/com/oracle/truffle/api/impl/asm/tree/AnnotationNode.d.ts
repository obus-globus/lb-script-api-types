import type { AnnotationVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AnnotationNode extends AnnotationVisitor {
    constructor(api: number, descriptor: string)
    constructor(descriptor: string)
    constructor(values: Object[])
    desc: string;
    values: Object[];
    accept(annotationVisitor: AnnotationVisitor): void;
    check(api: number): void;
    visit(name: string, value: Object): void;
    visitAnnotation(name: string, descriptor: string): AnnotationVisitor;
    visitArray(name: string): AnnotationVisitor;
    visitEnd(): void;
    visitEnum(name: string, descriptor: string, value: string): void;
}