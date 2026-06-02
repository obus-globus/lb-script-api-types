import type { AsmRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/AsmRemapper.d.ts'
import type { AnnotationVisitor } from '../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { FieldVisitor } from '../../../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { FieldRemapper } from '../../../../../../org/objectweb/asm/commons/FieldRemapper.d.ts'
export class AsmClassRemapper$AsmFieldRemapper extends FieldRemapper {
    constructor(arg0: FieldVisitor, arg1: AsmRemapper)
    createAnnotationRemapper(arg0: string, arg1: AnnotationVisitor): AnnotationVisitor;
}