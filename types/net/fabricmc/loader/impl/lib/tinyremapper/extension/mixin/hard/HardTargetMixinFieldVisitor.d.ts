import type { MxMember } from '../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/MxMember.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { FieldVisitor } from '../../../../../../../../../org/objectweb/asm/FieldVisitor.d.ts'
export class HardTargetMixinFieldVisitor extends FieldVisitor {
    constructor(arg0: E[], arg1: FieldVisitor, arg2: MxMember, arg3: string[])
    // private field: MxMember;
    // private targets: string[];
    // private tasks: E[];
    visitAnnotation(arg0: string, arg1: boolean): AnnotationVisitor;
}