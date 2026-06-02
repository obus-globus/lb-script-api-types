import type { Object } from '../../../../../../../../../../../java/lang/Object.d.ts'
import type { CommonData } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { AnnotationNode } from '../../../../../../../../../../../org/objectweb/asm/tree/AnnotationNode.d.ts'
export class AtAnnotationVisitor extends AnnotationNode {
    constructor(arg0: CommonData, arg1: AnnotationVisitor, arg2: string[])
    // private data: CommonData;
    readonly delegate: AnnotationVisitor;
    // private targets: string[];
    // private value: string;
    visit(arg0: string, arg1: Object): void;
    visitEnd(): void;
}