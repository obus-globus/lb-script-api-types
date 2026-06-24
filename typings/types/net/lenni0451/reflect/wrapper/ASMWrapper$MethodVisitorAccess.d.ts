import type { ASMWrapper$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ASMWrapper$LabelAccess } from '../../../../net/lenni0451/reflect/wrapper/ASMWrapper$LabelAccess.d.ts'
export class ASMWrapper$MethodVisitorAccess extends Object {
    private constructor(arg0: Object)
    constructor(arg0: Object, arg1: ASMWrapper$1)
    // private methodVisitor: Object;
    isNull(): boolean;
    visitEnd(): void;
    visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitIincInsn(arg0: number, arg1: number): void;
    visitInsn(arg0: number): void;
    visitIntInsn(arg0: number, arg1: number): void;
    visitJumpInsn(arg0: number, arg1: ASMWrapper$LabelAccess): void;
    visitLabel(arg0: ASMWrapper$LabelAccess): void;
    visitLdcInsn(arg0: Object): void;
    visitMaxs(arg0: number, arg1: number): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
    visitMultiANewArrayInsn(arg0: string, arg1: number): void;
    visitTryCatchBlock(arg0: ASMWrapper$LabelAccess, arg1: ASMWrapper$LabelAccess, arg2: ASMWrapper$LabelAccess, arg3: string): void;
    visitTypeInsn(arg0: number, arg1: string): void;
    visitVarInsn(arg0: number, arg1: number): void;
}