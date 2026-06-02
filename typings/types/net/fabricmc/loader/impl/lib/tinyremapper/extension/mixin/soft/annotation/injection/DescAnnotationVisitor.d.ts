import type { Object } from '../../../../../../../../../../../java/lang/Object.d.ts'
import type { TrMember$MemberType } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMember$MemberType.d.ts'
import type { CommonData } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
import type { Type } from '../../../../../../../../../../../org/objectweb/asm/Type.d.ts'
export class DescAnnotationVisitor extends AnnotationVisitor {
    constructor(arg0: string[], arg1: CommonData, arg2: AnnotationVisitor, arg3: TrMember$MemberType)
    // private args: Type[];
    // private data: CommonData;
    // private expectedType: TrMember$MemberType;
    // private owner: Type;
    // private ret: Type;
    // private targets: string[];
    // private value: string;
    visit(arg0: string, arg1: Object): void;
    visitArray(arg0: string): AnnotationVisitor;
    visitEnd(): void;
}