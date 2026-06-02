import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Handle } from '../../../../org/objectweb/asm/Handle.d.ts'
import type { Label } from '../../../../org/objectweb/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class AnalyzerAdapter extends MethodVisitor {
    constructor(arg0: number, arg1: string, arg2: number, arg3: string, arg4: string, arg5: MethodVisitor)
    constructor(arg0: string, arg1: number, arg2: string, arg3: string, arg4: MethodVisitor)
    // private labels: Label[];
    locals: Object[];
    // private maxLocals: number;
    // private maxStack: number;
    // private owner: string;
    stack: Object[];
    uninitializedTypes: Map<Object, Object>;
    // private execute(arg0: number, arg1: number, arg2: string): void;
    // private get(arg0: number): Object;
    // private pop(): Object;
    // private pop(arg0: number): void;
    // private pop(arg0: string): void;
    // private push(arg0: Object): void;
    // private pushDescriptor(arg0: string): void;
    // private set(arg0: number, arg1: Object): void;
    visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitFrame(arg0: number, arg1: number, arg2: Object[], arg3: number, arg4: Object[]): void;
    visitIincInsn(arg0: number, arg1: number): void;
    visitInsn(arg0: number): void;
    visitIntInsn(arg0: number, arg1: number): void;
    visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: Handle, arg3: Object[]): void;
    visitJumpInsn(arg0: number, arg1: Label): void;
    visitLabel(arg0: Label): void;
    visitLdcInsn(arg0: Object): void;
    visitLocalVariable(arg0: string, arg1: string, arg2: string, arg3: Label, arg4: Label, arg5: number): void;
    visitLookupSwitchInsn(arg0: Label, arg1: number[], arg2: Label[]): void;
    visitMaxs(arg0: number, arg1: number): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
    visitMultiANewArrayInsn(arg0: string, arg1: number): void;
    visitTableSwitchInsn(arg0: number, arg1: number, arg2: Label, arg3: Label[]): void;
    visitTypeInsn(arg0: number, arg1: string): void;
    visitVarInsn(arg0: number, arg1: number): void;
}