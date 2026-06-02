import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { LabelNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/LabelNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LocalVariableNode extends Object {
    constructor(name: string, descriptor: string, signature: string, start: LabelNode, end: LabelNode, index: number)
    desc: string;
    end: LabelNode;
    index: number;
    name: string;
    signature: string;
    start: LabelNode;
    accept(methodVisitor: MethodVisitor): void;
}