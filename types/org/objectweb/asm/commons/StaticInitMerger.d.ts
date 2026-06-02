import type { ClassVisitor } from '../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class StaticInitMerger extends ClassVisitor {
    constructor(arg0: number, arg1: string, arg2: ClassVisitor)
    constructor(arg0: string, arg1: ClassVisitor)
    // private mergedClinitVisitor: MethodVisitor;
    // private numClinitMethods: number;
    // private owner: string;
    // private renamedClinitMethodPrefix: string;
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitEnd(): void;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
}