import type { MxMember } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/MxMember.d.ts'
import type { SoftInterface } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/hard/data/SoftInterface.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class ImplementsAnnotationVisitor extends AnnotationVisitor {
    static visitMethod(paramarg0: E[], paramarg1: MxMember, paramarg2: SoftInterface[]): void;
    constructor(arg0: AnnotationVisitor, arg1: SoftInterface[])
    // private interfaces: SoftInterface[];
    visitArray(arg0: string): AnnotationVisitor;
}