import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { MxMember } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/MxMember.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class ShadowAnnotationVisitor extends AnnotationVisitor {
    constructor(arg0: E[], arg1: AnnotationVisitor, arg2: MxMember, arg3: string[])
    // private member: MxMember;
    // private prefix: string;
    // private targets: string[];
    // private tasks: E[];
    visit(arg0: string, arg1: Object): void;
    visitEnd(): void;
}