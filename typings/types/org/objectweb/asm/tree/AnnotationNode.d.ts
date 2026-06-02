import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class AnnotationNode extends AnnotationVisitor {
    constructor(arg0: number, arg1: string)
    constructor(arg0: string)
    constructor(arg0: Object[])
    desc: string;
    values: Object[];
    accept(arg0: AnnotationVisitor): void;
    check(arg0: number): void;
    visit(arg0: string, arg1: Object): void;
    visitAnnotation(arg0: string, arg1: string): AnnotationVisitor;
    visitArray(arg0: string): AnnotationVisitor;
    visitEnd(): void;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
}