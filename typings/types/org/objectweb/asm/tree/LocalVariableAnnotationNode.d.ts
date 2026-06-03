import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
import type { LabelNode } from '../../../../org/objectweb/asm/tree/LabelNode.d.ts'
import type { TypeAnnotationNode } from '../../../../org/objectweb/asm/tree/TypeAnnotationNode.d.ts'
export class LocalVariableAnnotationNode extends TypeAnnotationNode {
    constructor(arg0: number, arg1: number, arg2: TypePath, arg3: LabelNode[], arg4: LabelNode[], arg5: number[], arg6: string)
    constructor(arg0: number, arg1: TypePath, arg2: LabelNode[], arg3: LabelNode[], arg4: number[], arg5: string)
    end: LabelNode[];
    index: number[];
    start: LabelNode[];
    accept(arg0: AnnotationVisitor): void;
    accept(arg0: MethodVisitor, arg1: boolean): void;
}