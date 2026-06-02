import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class Segment$SegmentAnnotationVisitor extends AnnotationVisitor {
    constructor(null_: Segment$SegmentAnnotationVisitor, arg1: number)
    constructor(null_: Segment$SegmentAnnotationVisitor, arg1: number, arg2: number, arg3: string, arg4: boolean)
    constructor(null_: Segment$SegmentAnnotationVisitor, arg1: number, arg2: string, arg3: boolean)
    // private caseArrayN: number[];
    // private context: number;
    // private desc: string;
    // private nameRU: string[];
    // private nestNameRU: string[];
    // private nestPairN: number[];
    // private nestTypeRS: string[];
    // private parameter: number;
    // private tags: string[];
    // private values: Object[];
    // private visible: boolean;
    visit(arg0: string, arg1: Object): void;
    visitAnnotation(arg0: string, arg1: string): AnnotationVisitor;
    visitArray(arg0: string): AnnotationVisitor;
    visitEnd(): void;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
}