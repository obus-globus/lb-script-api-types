import type { Object } from '../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../org/objectweb/asm/Attribute.d.ts'
import type { TypePath } from '../../../org/objectweb/asm/TypePath.d.ts'
export abstract class RecordComponentVisitor extends Object {
    constructor(arg0: number)
    constructor(arg0: number, arg1: RecordComponentVisitor)
    // private api: number;
    delegate: RecordComponentVisitor;
    getDelegate(): RecordComponentVisitor;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitEnd(): void;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
}