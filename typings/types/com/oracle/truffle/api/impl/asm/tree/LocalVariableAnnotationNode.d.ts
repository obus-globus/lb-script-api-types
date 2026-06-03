import type { AnnotationVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/AnnotationVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { TypePath } from '../../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { LabelNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/LabelNode.d.ts'
import type { TypeAnnotationNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/TypeAnnotationNode.d.ts'
export class LocalVariableAnnotationNode extends TypeAnnotationNode {
    constructor(typeRef: number, typePath: TypePath, start: LabelNode[], end: LabelNode[], index: number[], descriptor: string)
    constructor(api: number, typeRef: number, typePath: TypePath, start: LabelNode[], end: LabelNode[], index: number[], descriptor: string)
    end: LabelNode[];
    index: number[];
    start: LabelNode[];
    accept(annotationVisitor: AnnotationVisitor): void;
    accept(methodVisitor: MethodVisitor, visible: boolean): void;
}