import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Handle } from '../../../../../../org/objectweb/asm/Handle.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../../../org/objectweb/asm/MethodVisitor.d.ts'
export abstract class McVersionLookup$InsnFwdMethodVisitor extends MethodVisitor {
    constructor()
    visitAnyInsn(): void;
    visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitIincInsn(arg0: number, arg1: number): void;
    visitInsn(arg0: number): void;
    visitIntInsn(arg0: number, arg1: number): void;
    visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: Handle, arg3: Object[]): void;
    visitJumpInsn(arg0: number, arg1: Label): void;
    visitLdcInsn(arg0: Object): void;
    visitLookupSwitchInsn(arg0: Label, arg1: number[], arg2: Label[]): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
    visitMultiANewArrayInsn(arg0: string, arg1: number): void;
    visitTableSwitchInsn(arg0: number, arg1: number, arg2: Label, arg3: Label[]): void;
    visitTypeInsn(arg0: number, arg1: string): void;
    visitVarInsn(arg0: number, arg1: number): void;
}