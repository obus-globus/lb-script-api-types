import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { FieldVisitor } from '../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
import type { Remapper } from '../../../../org/objectweb/asm/commons/Remapper.d.ts'
export class FieldRemapper extends FieldVisitor {
    constructor(arg0: number, arg1: FieldVisitor, arg2: Remapper)
    constructor(arg0: FieldVisitor, arg1: Remapper)
    // private remapper: Remapper;
    createAnnotationRemapper(arg0: string, arg1: AnnotationVisitor): AnnotationVisitor;
    createAnnotationRemapper(arg0: AnnotationVisitor): AnnotationVisitor;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
}