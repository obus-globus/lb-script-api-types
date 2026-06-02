import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../org/objectweb/asm/Attribute.d.ts'
import type { ClassVisitor } from '../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { RecordComponentVisitor } from '../../../../org/objectweb/asm/RecordComponentVisitor.d.ts'
import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
import type { AnnotationNode } from '../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { TypeAnnotationNode } from '../../../../org/objectweb/asm/tree/TypeAnnotationNode.d.ts'
export class RecordComponentNode extends RecordComponentVisitor {
    constructor(arg0: number, arg1: string, arg2: string, arg3: string)
    constructor(arg0: string, arg1: string, arg2: string)
    attrs: Attribute[];
    descriptor: string;
    invisibleAnnotations: AnnotationNode[];
    invisibleTypeAnnotations: TypeAnnotationNode[];
    name: string;
    signature: string;
    visibleAnnotations: AnnotationNode[];
    visibleTypeAnnotations: TypeAnnotationNode[];
    accept(arg0: ClassVisitor): void;
    check(arg0: number): void;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitEnd(): void;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
}