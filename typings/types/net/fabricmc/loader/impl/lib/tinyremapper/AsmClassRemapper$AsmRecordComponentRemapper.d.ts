import type { AsmRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/AsmRemapper.d.ts'
import type { AnnotationVisitor } from '../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { RecordComponentVisitor } from '../../../../../../org/objectweb/asm/RecordComponentVisitor.d.ts'
import type { RecordComponentRemapper } from '../../../../../../org/objectweb/asm/commons/RecordComponentRemapper.d.ts'
export class AsmClassRemapper$AsmRecordComponentRemapper extends RecordComponentRemapper {
    constructor(arg0: RecordComponentVisitor, arg1: AsmRemapper)
    createAnnotationRemapper(arg0: string, arg1: AnnotationVisitor): AnnotationVisitor;
}