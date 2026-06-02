import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
import type { AnnotationNode } from '../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
export class TypeAnnotationNode extends AnnotationNode {
    constructor(arg0: number, arg1: number, arg2: TypePath, arg3: string)
    constructor(arg0: number, arg1: TypePath, arg2: string)
    typePath: TypePath;
    typeRef: number;
}