import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AnnotationVisitor extends Object {
    constructor(api: number)
    constructor(api: number, annotationVisitor: AnnotationVisitor)
    // private api: number;
    // private av: AnnotationVisitor;
    getDelegate(): AnnotationVisitor;
    visit(name: string, value: Object): void;
    visitAnnotation(name: string, descriptor: string): AnnotationVisitor;
    visitArray(name: string): AnnotationVisitor;
    visitEnd(): void;
    visitEnum(name: string, descriptor: string, value: string): void;
}