import type { CommonData } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { MemberInfo } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/soft/data/MemberInfo.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { AnnotationNode } from '../../../../../../../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
export class ModifyVariableAnnotationVisitor extends AnnotationNode {
    constructor(arg0: CommonData, arg1: AnnotationVisitor, arg2: string[])
    // private data: CommonData;
    readonly delegate: AnnotationVisitor;
    // private methods: MemberInfo[];
    // private targets: string[];
    visitArray(arg0: string): AnnotationVisitor;
    visitEnd(): void;
}