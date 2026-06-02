import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { RecordComponentVisitor } from '../../../../org/objectweb/asm/RecordComponentVisitor.d.ts'
import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
import type { Remapper } from '../../../../org/objectweb/asm/commons/Remapper.d.ts'
export class RecordComponentRemapper extends RecordComponentVisitor {
    constructor(arg0: number, arg1: RecordComponentVisitor, arg2: Remapper)
    constructor(arg0: RecordComponentVisitor, arg1: Remapper)
    // private remapper: Remapper;
    createAnnotationRemapper(arg0: string, arg1: AnnotationVisitor): AnnotationVisitor;
    createAnnotationRemapper(arg0: AnnotationVisitor): AnnotationVisitor;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
}