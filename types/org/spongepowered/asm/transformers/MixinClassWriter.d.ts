import type { ClassReader } from '../../../../org/objectweb/asm/ClassReader.d.ts'
import type { ClassWriter } from '../../../../org/objectweb/asm/ClassWriter.d.ts'
export class MixinClassWriter extends ClassWriter {
    static COMPUTE_FRAMES: number;
    static COMPUTE_MAXS: number;
    constructor(arg0: number)
    constructor(arg0: ClassReader, arg1: number)
    getCommonSuperClass(arg0: string, arg1: string): string;
}