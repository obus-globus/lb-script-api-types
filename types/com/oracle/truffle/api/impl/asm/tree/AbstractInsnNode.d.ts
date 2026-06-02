import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { LabelNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/LabelNode.d.ts'
import type { TypeAnnotationNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/TypeAnnotationNode.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
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
    constructor(opcode: number)
    // private index: number;
    invisibleTypeAnnotations: TypeAnnotationNode[];
    // private nextInsn: AbstractInsnNode;
    opcode: number;
    // private previousInsn: AbstractInsnNode;
    visibleTypeAnnotations: TypeAnnotationNode[];
    accept(methodVisitor: MethodVisitor): void;
    acceptAnnotations(methodVisitor: MethodVisitor): void;
    clone(clonedLabels: Map<LabelNode, LabelNode>): AbstractInsnNode;
    cloneAnnotations(insnNode: AbstractInsnNode): AbstractInsnNode;
    getNext(): AbstractInsnNode;
    getOpcode(): number;
    getPrevious(): AbstractInsnNode;
    getType(): number;
}