import type { MxMember } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/MxMember.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { MethodVisitor } from '../../../../../../../../../org/objectweb/asm/MethodVisitor.d.ts'
export class HardTargetMixinMethodVisitor extends MethodVisitor {
    constructor(arg0: E[], arg1: MethodVisitor, arg2: MxMember, arg3: string[])
    // private data: E[];
    // private method: MxMember;
    // private targets: string[];
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
}