import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
export interface OperationUtils$OperationContents extends Object{
    generate(arg0: number, arg1: (param0: AbstractInsnNode[]) => void): AbstractInsnNode[];
}