import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../org/objectweb/asm/Attribute.d.ts'
import type { FieldVisitor } from '../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
import type { Printer } from '../../../../org/objectweb/asm/util/Printer.d.ts'
export class TraceFieldVisitor extends FieldVisitor {
    constructor(arg0: FieldVisitor, arg1: Printer)
    constructor(arg0: Printer)
    p: Printer;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitEnd(): void;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
}