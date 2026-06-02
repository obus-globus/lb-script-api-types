import type { AnnotationVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { Attribute } from '../../../../../../../com/oracle/truffle/api/impl/asm/Attribute.d.ts'
import type { ClassVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/FieldVisitor.d.ts'
import type { TypePath } from '../../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { AnnotationNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/AnnotationNode.d.ts'
import type { TypeAnnotationNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/TypeAnnotationNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class FieldNode extends FieldVisitor {
    constructor(api: number, access: number, name: string, descriptor: string, signature: string, value: Object)
    constructor(access: number, name: string, descriptor: string, signature: string, value: Object)
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
    accept(classVisitor: ClassVisitor): void;
    check(api: number): void;
    visitAnnotation(descriptor: string, visible: boolean): AnnotationVisitor;
    visitAttribute(attribute: Attribute): void;
    visitEnd(): void;
    visitTypeAnnotation(typeRef: number, typePath: TypePath, descriptor: string, visible: boolean): AnnotationVisitor;
}