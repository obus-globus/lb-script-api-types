import type { Consumer } from '../../../../../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { CommonData } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { MxMember } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/MxMember.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class ShadowAnnotationVisitor extends AnnotationVisitor {
    constructor(arg0: (param0: CommonData) => void[], arg1: AnnotationVisitor, arg2: MxMember, arg3: string[])
    // private member: MxMember;
    // private prefix: string;
    // private targets: string[];
    // private tasks: (param0: CommonData) => void[];
    visit(arg0: string, arg1: Object): void;
    visitEnd(): void;
}