import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class CheckAnnotationAdapter extends AnnotationVisitor {
    constructor(arg0: AnnotationVisitor)
    constructor(arg0: AnnotationVisitor, arg1: boolean)
    // private useNamedValue: boolean;
    // private visitEndCalled: boolean;
    // private checkName(arg0: string): void;
    // private checkVisitEndNotCalled(): void;
    visit(arg0: string, arg1: Object): void;
    visitAnnotation(arg0: string, arg1: string): AnnotationVisitor;
    visitArray(arg0: string): AnnotationVisitor;
    visitEnd(): void;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
}