import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { LabelNode } from '../../../../org/objectweb/asm/tree/LabelNode.d.ts'
import type { TypeAnnotationNode } from '../../../../org/objectweb/asm/tree/TypeAnnotationNode.d.ts'
export class TryCatchBlockNode extends Object {
    constructor(arg0: LabelNode, arg1: LabelNode, arg2: LabelNode, arg3: string)
    end: LabelNode;
    handler: LabelNode;
    invisibleTypeAnnotations: TypeAnnotationNode[];
    start: LabelNode;
    type: string;
    visibleTypeAnnotations: TypeAnnotationNode[];
    accept(arg0: MethodVisitor): void;
    updateIndex(arg0: number): void;
}