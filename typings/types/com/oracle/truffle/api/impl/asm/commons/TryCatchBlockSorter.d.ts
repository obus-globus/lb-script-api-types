import type { MethodVisitor } from '../../../../../../../com/oracle/truffle/api/impl/asm/MethodVisitor.d.ts'
import type { MethodNode } from '../../../../../../../com/oracle/truffle/api/impl/asm/tree/MethodNode.d.ts'
export class TryCatchBlockSorter extends MethodNode {
    constructor(methodVisitor: MethodVisitor, access: number, name: string, descriptor: string, signature: string, exceptions: string[])
    constructor(api: number, methodVisitor: MethodVisitor, access: number, name: string, descriptor: string, signature: string, exceptions: string[])
    visitEnd(): void;
}