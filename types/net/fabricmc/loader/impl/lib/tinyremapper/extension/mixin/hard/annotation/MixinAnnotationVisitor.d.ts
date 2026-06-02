import type { AnnotationVisitor } from '../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class MixinAnnotationVisitor extends AnnotationVisitor {
    constructor(arg0: AnnotationVisitor, arg1: string[])
    // private targets: string[];
    visitArray(arg0: string): AnnotationVisitor;
}