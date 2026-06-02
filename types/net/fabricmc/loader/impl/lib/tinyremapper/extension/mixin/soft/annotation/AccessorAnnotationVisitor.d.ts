import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { CommonData } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { MxMember } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/MxMember.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class AccessorAnnotationVisitor extends AnnotationVisitor {
    constructor(arg0: CommonData, arg1: AnnotationVisitor, arg2: MxMember, arg3: string[])
    // private data: CommonData;
    // private fieldDesc: string;
    // private isSoftTarget: boolean;
    // private method: MxMember;
    // private targets: string[];
    // private inferFieldName(): string;
    // private setAnnotationValue(arg0: string): void;
    visit(arg0: string, arg1: Object): void;
    visitEnd(): void;
}