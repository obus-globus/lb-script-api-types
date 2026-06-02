import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { AbstractInsnNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/AbstractInsnNode.d.ts'
import type { LabelNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/LabelNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LdcInsnNode extends AbstractInsnNode {
    static FIELD_INSN: number;
    static FRAME: number;
    static IINC_INSN: number;
    static INSN: number;
    static INT_INSN: number;
    static INVOKE_DYNAMIC_INSN: number;
    static JUMP_INSN: number;
    static LABEL: number;
    static LDC_INSN: number;
    static LINE: number;
    static LOOKUPSWITCH_INSN: number;
    static METHOD_INSN: number;
    static MULTIANEWARRAY_INSN: number;
    static TABLESWITCH_INSN: number;
    static TYPE_INSN: number;
    static VAR_INSN: number;
    constructor(value: Object)
    cst: Object;
    accept(methodVisitor: MethodVisitor): void;
    clone(clonedLabels: Map<LabelNode, LabelNode>): AbstractInsnNode;
    getType(): number;
}