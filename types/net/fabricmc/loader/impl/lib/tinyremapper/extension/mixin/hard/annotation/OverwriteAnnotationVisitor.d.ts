import type { MxMember } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/MxMember.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class OverwriteAnnotationVisitor extends AnnotationVisitor {
    constructor(arg0: E[], arg1: AnnotationVisitor, arg2: MxMember, arg3: string[])
    // private method: MxMember;
    // private targets: string[];
    // private tasks: E[];
    visitEnd(): void;
}