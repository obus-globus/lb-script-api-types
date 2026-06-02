import type { Object } from '../../../../../../../../../../../java/lang/Object.d.ts'
import type { CommonData } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class AtAnnotationVisitor$AtSecondPassAnnotationVisitor extends AnnotationVisitor {
    constructor(arg0: CommonData, arg1: AnnotationVisitor, arg2: string, arg3: string[])
    // private data: CommonData;
    // private targets: string[];
    // private value: string;
    visit(arg0: string, arg1: Object): void;
    visitAnnotation(arg0: string, arg1: string): AnnotationVisitor;
    visitArray(arg0: string): AnnotationVisitor;
}