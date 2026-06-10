import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClassVisitor } from '../../../../../org/objectweb/asm/ClassVisitor.d.ts'
import type { FieldVisitor } from '../../../../../org/objectweb/asm/FieldVisitor.d.ts'
import type { MethodVisitor } from '../../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class ClassStripper extends ClassVisitor {
    constructor(arg0: number, arg1: ClassVisitor, arg2: string[], arg3: string[], arg4: string[])
    // private className: string;
    // private stripFields: string[];
    // private stripInterfaces: string[];
    // private stripMethods: string[];
    visit(arg0: number, arg1: number, arg2: string, arg3: string, arg4: string, arg5: string[]): void;
    visitField(arg0: number, arg1: string, arg2: string, arg3: string, arg4: Object): FieldVisitor;
    visitMethod(arg0: number, arg1: string, arg2: string, arg3: string, arg4: string[]): MethodVisitor;
}