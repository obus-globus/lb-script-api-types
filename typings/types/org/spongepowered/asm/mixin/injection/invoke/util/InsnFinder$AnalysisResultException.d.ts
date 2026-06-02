import type { RuntimeException } from '../../../../../../../java/lang/RuntimeException.d.ts'
import type { AbstractInsnNode } from '../../../../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export class InsnFinder$AnalysisResultException extends RuntimeException {
    constructor(arg0: AbstractInsnNode)
    readonly result: AbstractInsnNode;
    getResult(): AbstractInsnNode;
}