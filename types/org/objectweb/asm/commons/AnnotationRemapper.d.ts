import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Remapper } from '../../../../org/objectweb/asm/commons/Remapper.d.ts'
export class AnnotationRemapper extends AnnotationVisitor {
    constructor(arg0: number, arg1: string, arg2: AnnotationVisitor, arg3: Remapper)
    constructor(arg0: number, arg1: AnnotationVisitor, arg2: Remapper)
    constructor(arg0: string, arg1: AnnotationVisitor, arg2: Remapper)
    constructor(arg0: AnnotationVisitor, arg1: Remapper)
    // private descriptor: string;
    // private remapper: Remapper;
    createAnnotationRemapper(arg0: string, arg1: AnnotationVisitor): AnnotationVisitor;
    createAnnotationRemapper(arg0: AnnotationVisitor): AnnotationVisitor;
    // private mapAnnotationAttributeName(arg0: string): string;
    orDeprecatedValue(arg0: AnnotationVisitor): AnnotationVisitor;
    visit(arg0: string, arg1: Object): void;
    visitAnnotation(arg0: string, arg1: string): AnnotationVisitor;
    visitArray(arg0: string): AnnotationVisitor;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
}