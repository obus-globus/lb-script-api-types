import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassVisitor } from '../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class PackageAccessFixer extends ClassVisitor {
    constructor(arg0: number, arg1: ClassVisitor)
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    visitInnerClass(arg0: string, arg1: string, arg2: string, arg3: number): void;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
}