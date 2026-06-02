import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ClassTweaker } from '../../../../../../../net/fabricmc/loader/impl/lib/classtweaker/api/ClassTweaker.d.ts'
import type { ClassVisitor } from '../../../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../../org/objectweb/asm/MethodVisitor.d.ts'
import type { Type } from '../../../../../../../org/objectweb/asm/Type.d.ts'
import type { FieldNode } from '../../../../../../../org/objectweb/asm/tree/FieldNode.d.ts'
export class EnumExtensionClassVisitor extends ClassVisitor {
    constructor(arg0: number, arg1: ClassVisitor, arg2: ClassTweaker)
    // private addedConstants: string[];
    // private classTweaker: ClassTweaker;
    // private currentType: Type;
    // private existingConstants: FieldNode[];
    // private postVisitTasks: () => void[];
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitEnd(): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
}