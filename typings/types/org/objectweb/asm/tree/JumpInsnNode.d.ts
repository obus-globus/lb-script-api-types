import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { LabelNode } from '../../../../org/objectweb/asm/tree/LabelNode.d.ts'
export class JumpInsnNode extends AbstractInsnNode {
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
    constructor(arg0: number, arg1: LabelNode)
    label: LabelNode;
    accept(arg0: MethodVisitor): void;
    clone(arg0: Map<LabelNode, LabelNode>): AbstractInsnNode;
    getType(): number;
    setOpcode(arg0: number): void;
}