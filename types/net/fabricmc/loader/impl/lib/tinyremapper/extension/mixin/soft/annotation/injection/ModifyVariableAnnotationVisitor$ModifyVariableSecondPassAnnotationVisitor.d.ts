import type { Optional } from '../../../../../../../../../../../java/util/Optional.d.ts'
import type { TrClass } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrClass.d.ts'
import type { TrMethod } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMethod.d.ts'
import type { CommonData } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { CommonInjectionAnnotationVisitor } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/soft/annotation/injection/CommonInjectionAnnotationVisitor.d.ts'
import type { MemberInfo } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/soft/data/MemberInfo.d.ts'
import type { AnnotationVisitor } from '../../../../../../../../../../../org/objectweb/asm/AnnotationVisitor.d.ts'
export class ModifyVariableAnnotationVisitor$ModifyVariableSecondPassAnnotationVisitor extends CommonInjectionAnnotationVisitor {
    constructor(arg0: CommonData, arg1: AnnotationVisitor, arg2: string[], arg3: MemberInfo[])
    // private methods: MemberInfo[];
    // private targets: TrClass[];
    // private resolvePartial(arg0: TrClass, arg1: string, arg2: string): Optional<TrMethod>;
    visitArray(arg0: string): AnnotationVisitor;
}