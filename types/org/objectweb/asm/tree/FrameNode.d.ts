import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { LabelNode } from '../../../../org/objectweb/asm/tree/LabelNode.d.ts'
export class FrameNode extends AbstractInsnNode {
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
    private constructor()
    constructor(arg0: number, arg1: number, arg2: Object[], arg3: number, arg4: Object[])
    local: Object[];
    stack: Object[];
    type: number;
    accept(arg0: MethodVisitor): void;
    clone(arg0: Map<LabelNode, LabelNode>): AbstractInsnNode;
    getType(): number;
}