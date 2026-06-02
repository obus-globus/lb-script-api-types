import type { CommonData } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class DefinitionAnnotationVisitor extends AnnotationVisitor {
    constructor(arg0: CommonData, arg1: AnnotationVisitor)
    // private data: CommonData;
    visitArray(arg0: string): AnnotationVisitor;
}