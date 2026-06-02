import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { LabelNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/LabelNode.d.ts'
import type { TypeAnnotationNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/TypeAnnotationNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class TryCatchBlockNode extends Object {
    constructor(start: LabelNode, end: LabelNode, handler: LabelNode, type: string)
    end: LabelNode;
    handler: LabelNode;
    invisibleTypeAnnotations: TypeAnnotationNode[];
    start: LabelNode;
    type: string;
    visibleTypeAnnotations: TypeAnnotationNode[];
    accept(methodVisitor: MethodVisitor): void;
    updateIndex(index: number): void;
}