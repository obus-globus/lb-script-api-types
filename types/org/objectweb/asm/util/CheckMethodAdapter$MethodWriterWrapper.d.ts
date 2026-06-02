import type { ClassWriter } from '../../../../org/objectweb/asm/ClassWriter.d.ts'
import type { MethodVisitor } from '../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class CheckMethodAdapter$MethodWriterWrapper extends MethodVisitor {
    constructor(arg0: number, arg1: number, arg2: ClassWriter, arg3: MethodVisitor)
    // private owner: ClassWriter;
    // private version: number;
    computesFrames(): boolean;
    computesMaxs(): boolean;
    requiresFrames(): boolean;
}