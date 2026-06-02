import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { MethodNode } from '../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export class TryCatchBlockSorter extends MethodNode {
    constructor(arg0: number, arg1: MethodVisitor, arg2: number, arg3: string, arg4: string, arg5: string, arg6: string[])
    constructor(arg0: MethodVisitor, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[])
    visitEnd(): void;
}