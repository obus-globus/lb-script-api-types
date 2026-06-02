import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class AnnotationVisitor extends Object {
    constructor(arg0: number)
    constructor(arg0: number, arg1: AnnotationVisitor)
    // private api: number;
    // private av: AnnotationVisitor;
    getDelegate(): AnnotationVisitor;
    visit(arg0: string, arg1: Object): void;
    visitAnnotation(arg0: string, arg1: string): AnnotationVisitor;
    visitArray(arg0: string): AnnotationVisitor;
    visitEnd(): void;
    visitEnum(arg0: string, arg1: string, arg2: string): void;
}