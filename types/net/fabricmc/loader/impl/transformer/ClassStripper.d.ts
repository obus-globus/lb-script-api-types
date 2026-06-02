import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassVisitor } from '../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class ClassStripper extends ClassVisitor {
    constructor(arg0: number, arg1: ClassVisitor, arg2: E[], arg3: E[], arg4: E[])
    // private className: string;
    // private stripFields: E[];
    // private stripInterfaces: E[];
    // private stripMethods: E[];
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
}