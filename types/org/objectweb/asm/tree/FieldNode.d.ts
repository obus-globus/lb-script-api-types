import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../org/objectweb/asm/Attribute.d.ts'
import type { ClassVisitor } from '../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
import type { AnnotationNode } from '../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
import type { TypeAnnotationNode } from '../../../../org/objectweb/asm/tree/TypeAnnotationNode.d.ts'
export class FieldNode extends FieldVisitor {
    constructor(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: Object)
    constructor(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object)
    access: number;
    attrs: Attribute[];
    desc: string;
    invisibleAnnotations: AnnotationNode[];
    invisibleTypeAnnotations: TypeAnnotationNode[];
    name: string;
    signature: string;
    value: Object;
    visibleAnnotations: AnnotationNode[];
    visibleTypeAnnotations: TypeAnnotationNode[];
    accept(arg0: ClassVisitor): void;
    check(arg0: number): void;
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
    visitAttribute(arg0: Attribute): void;
    visitEnd(): void;
    visitTypeAnnotation(arg0: number, arg1: TypePath, arg2: string, arg3: boolean): AnnotationVisitor;
}