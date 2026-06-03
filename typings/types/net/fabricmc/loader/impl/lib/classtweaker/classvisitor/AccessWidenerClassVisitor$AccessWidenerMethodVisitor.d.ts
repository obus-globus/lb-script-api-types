import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Handle } from '../../../../../../../org/objectweb/asm/Handle.d.ts'
import type { MethodVisitor } from '../../../../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class AccessWidenerClassVisitor$AccessWidenerMethodVisitor extends MethodVisitor {
    constructor(null_: AccessWidenerClassVisitor$AccessWidenerMethodVisitor, arg1: MethodVisitor)
    // private isTargetMethod(arg0: string, arg1: string, arg2: string): boolean;
    visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: Handle, arg3: Object[]): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
}