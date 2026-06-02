import type { TypePath } from '../../../../../../../com/oracle/truffle/api/impl/asm/TypePath.d.ts'
import type { AnnotationNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/AnnotationNode.d.ts'
export class TypeAnnotationNode extends AnnotationNode {
    constructor(typeRef: number, typePath: TypePath, descriptor: string)
    constructor(api: number, typeRef: number, typePath: TypePath, descriptor: string)
    typePath: TypePath;
    typeRef: number;
}