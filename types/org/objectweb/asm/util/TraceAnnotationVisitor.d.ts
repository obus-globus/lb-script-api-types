import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Printer } from '../../../../org/objectweb/asm/util/Printer.d.ts'
export class TraceAnnotationVisitor extends AnnotationVisitor {
    constructor(arg0: AnnotationVisitor, arg1: Printer)
    constructor(arg0: Printer)
    // private printer: Printer;
    visit(arg0: string, arg1: Object): void;
    visitAnnotation(arg0: string, arg1: string): AnnotationVisitor;
    visitArray(arg0: string): AnnotationVisitor;
    visitEnd(): void;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
}