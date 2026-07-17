import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Pattern } from '../../../../../../java/util/regex/Pattern.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AsmRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/AsmRemapper.d.ts'
import type { TinyRemapper } from '../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/TinyRemapper.d.ts'
import type { AnnotationVisitor } from '../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Handle } from '../../../../../../org/objectweb/asm/Handle.d.ts'
import type { Label } from '../../../../../../org/objectweb/asm/Label.d.ts'
import type { MethodVisitor } from '../../../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { MethodRemapper } from '../../../../../../org/objectweb/asm/commons/MethodRemapper.d.ts'
import type { MethodNode } from '../../../../../../org/objectweb/asm/tree/MethodNode.d.ts'
export class AsmClassRemapper$AsmMethodRemapper extends MethodRemapper {
    constructor(arg0: MethodVisitor, arg1: AsmRemapper, arg2: string, arg3: MethodNode, arg4: boolean, arg5: boolean, arg6: boolean, arg7: Pattern, arg8: boolean)
    // private checkPackageAccess: boolean;
    // private inferNameFromSameLvIndex: boolean;
    // private invalidLvNamePattern: Pattern;
    // private methodNode: MethodNode;
    // private nameCounts: JavaMap<string, number>;
    // private output: MethodVisitor;
    // private owner: string;
    // private renameInvalidLocals: boolean;
    // private skipLocalMapping: boolean;
    // private tr: TinyRemapper;
    createAnnotationRemapper(arg0: string, arg1: AnnotationVisitor): AnnotationVisitor;
    createAnnotationRemapper(arg0: AnnotationVisitor): AnnotationVisitor;
    // private getLambdaImplementedMethod(arg0: string, arg1: string, arg2: Handle, arg3: string[], ...arg4: Object[]): Handle;
    // private getNameFromType(arg0: string, arg1: boolean): string;
    // private isValidLvName(arg0: string): boolean;
    // private processLocals(): void;
    visitEnd(): void;
    visitFieldInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitInvokeDynamicInsn(arg0: string, arg1: string, arg2: Handle, ...arg3: Object[]): void;
    visitLdcInsn(arg0: Object): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string): void;
    visitMethodInsn(arg0: number, arg1: string, arg2: string, arg3: string, arg4: boolean): void;
    visitMultiANewArrayInsn(arg0: string, arg1: number): void;
    visitTryCatchBlock(arg0: Label, arg1: Label, arg2: Label, arg3: string): void;
    visitTypeInsn(arg0: number, arg1: string): void;
}