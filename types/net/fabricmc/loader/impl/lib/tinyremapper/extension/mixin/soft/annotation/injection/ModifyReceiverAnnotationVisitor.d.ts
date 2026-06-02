import type { CommonData } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { CommonInjectionAnnotationVisitor } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/soft/annotation/injection/CommonInjectionAnnotationVisitor.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class ModifyReceiverAnnotationVisitor extends CommonInjectionAnnotationVisitor {
    constructor(arg0: CommonData, arg1: AnnotationVisitor, arg2: string[])
}