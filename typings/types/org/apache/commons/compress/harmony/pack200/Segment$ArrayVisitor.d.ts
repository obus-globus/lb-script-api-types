import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Segment } from '../../../../../../org/apache/commons/compress/harmony/pack200/Segment.d.ts'
import type { AnnotationVisitor } from '../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class Segment$ArrayVisitor extends AnnotationVisitor {
    constructor(null_: Segment, arg1: number[], arg2: string[], arg3: string[], arg4: Object[])
    // private caseArrayN: number[];
    // private indexInCaseArrayN: number;
    // private nameRU: string[];
    // private tags: string[];
    // private values: Object[];
    visit(arg0: string, arg1: Object): void;
    visitAnnotation(arg0: string, arg1: string): AnnotationVisitor;
    visitArray(arg0: string): AnnotationVisitor;
    visitEnd(): void;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
}