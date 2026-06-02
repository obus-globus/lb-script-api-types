import type { AnnotationVisitor } from '../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../../../org/objectweb/asm/Attribute.d.ts'
import type { FieldVisitor } from '../../../../../../org/objectweb/asm/FieldVisitor.d.ts'
export class Segment$SegmentFieldVisitor extends FieldVisitor {
    constructor(null_: Segment$SegmentFieldVisitor)
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitEnd(): void;
}