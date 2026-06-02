import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../../org/objectweb/asm/Type.d.ts'
import type { AnnotationNode } from '../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
export class SugarParameter extends Object {
    constructor(arg0: AnnotationNode, arg1: Type, arg2: Type, arg3: number, arg4: number)
    genericType: Type;
    lvtIndex: number;
    paramIndex: number;
    sugar: AnnotationNode;
    type: Type;
}