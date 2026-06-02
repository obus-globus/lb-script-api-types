import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AsmRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/AsmRemapper.d.ts'
import type { AnnotationVisitor } from '../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class AsmClassRemapper$AsmAnnotationRemapper extends AnnotationVisitor {
    constructor(arg0: string, arg1: AnnotationVisitor, arg2: AsmRemapper)
    // private descriptor: string;
    // private remapper: AsmRemapper;
    createAnnotationRemapper(arg0: string, arg1: AnnotationVisitor): AnnotationVisitor;
    mapAnnotationAttributeName(arg0: string, arg1: string): string;
    visit(arg0: string, arg1: Object): void;
    visitAnnotation(arg0: string, arg1: string): AnnotationVisitor;
    visitArray(arg0: string): AnnotationVisitor;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
}