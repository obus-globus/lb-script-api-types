import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { LabelNode } from '../../../../org/objectweb/asm/tree/LabelNode.d.ts'
export class LocalVariableNode extends Object {
    constructor(arg0: string, arg1: string, arg2: string, arg3: LabelNode, arg4: LabelNode, arg5: number)
    desc: string;
    end: LabelNode;
    index: number;
    name: string;
    signature: string;
    start: LabelNode;
    accept(arg0: MethodVisitor): void;
}