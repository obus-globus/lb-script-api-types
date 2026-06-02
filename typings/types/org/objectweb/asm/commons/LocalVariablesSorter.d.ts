import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AnnotationVisitor } from '../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Label } from '../../../../org/objectweb/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { Type } from '../../../../org/objectweb/asm/Type.d.ts'
import type { TypePath } from '../../../../org/objectweb/asm/TypePath.d.ts'
export class LocalVariablesSorter extends MethodVisitor {
    constructor(arg0: number, arg1: number, arg2: string, arg3: MethodVisitor)
    constructor(arg0: number, arg1: string, arg2: MethodVisitor)
    // private firstLocal: number;
    // private nextLocal: number;
    // private remappedLocalTypes: Object[];
    // private remappedVariableIndices: number[];
    newLocal(arg0: Type): number;
    newLocalMapping(arg0: Type): number;
    // private remap(arg0: number, arg1: Type): number;
    // private setFrameLocal(arg0: number, arg1: Object): void;
    setLocalType(arg0: number, arg1: Type): void;
    updateNewLocals(arg0: Object[]): void;
    visitFrame(arg0: number, arg1: number, arg2: Object[], arg3: number, arg4: Object[]): void;
    visitIincInsn(arg0: number, arg1: number): void;
    visitLocalVariable(arg0: string, arg1: string, arg2: string, arg3: Label, arg4: Label, arg5: number): void;
    visitLocalVariableAnnotation(arg0: number, arg1: TypePath, arg2: Label[], arg3: Label[], arg4: number[], arg5: string, arg6: boolean): AnnotationVisitor;
    visitMaxs(arg0: number, arg1: number): void;
    visitVarInsn(arg0: number, arg1: number): void;
}