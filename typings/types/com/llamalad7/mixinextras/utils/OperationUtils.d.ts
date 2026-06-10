import type { OperationUtils$OperationContents } from '../../../../com/llamalad7/mixinextras/utils/OperationUtils$OperationContents.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { AbstractInsnNode } from '../../../../org/objectweb/asm/tree/AbstractInsnNode.d.ts'
import type { ClassNode } from '../../../../org/objectweb/asm/tree/ClassNode.d.ts'
export class OperationUtils extends Object {
    static makeOperation(paramarg0: (Object | null)[], paramarg1: Type, paramarg2: AbstractInsnNode[], paramarg3: boolean, paramarg4: (Object | null)[], paramarg5: ClassNode, paramarg6: Type, paramarg7: string, paramarg8: (param0: number, param1: (param0: AbstractInsnNode[]) => void) => AbstractInsnNode[]): void;
    constructor()
}