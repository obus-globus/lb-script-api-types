import type { CommonData } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class SliceAnnotationVisitor extends AnnotationVisitor {
    constructor(arg0: CommonData, arg1: AnnotationVisitor, arg2: string[])
    // private data: CommonData;
    // private targets: string[];
    visitAnnotation(arg0: string, arg1: string): AnnotationVisitor;
}