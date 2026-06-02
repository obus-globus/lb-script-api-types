import type { Object } from '../../../../java/lang/Object.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { LabelNode } from '../../../../org/objectweb/asm/tree/LabelNode.d.ts'
import type { TypeAnnotationNode } from '../../../../org/objectweb/asm/tree/TypeAnnotationNode.d.ts'
export abstract class AbstractInsnNode extends Object {
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
    constructor(arg0: number)
    // private index: number;
    invisibleTypeAnnotations: TypeAnnotationNode[];
    // private nextInsn: AbstractInsnNode;
    opcode: number;
    // private previousInsn: AbstractInsnNode;
    visibleTypeAnnotations: TypeAnnotationNode[];
    accept(arg0: MethodVisitor): void;
    acceptAnnotations(arg0: MethodVisitor): void;
    clone(arg0: Map<LabelNode, LabelNode>): AbstractInsnNode;
    cloneAnnotations(arg0: AbstractInsnNode): AbstractInsnNode;
    getNext(): AbstractInsnNode;
    getOpcode(): number;
    getPrevious(): AbstractInsnNode;
    getType(): number;
}