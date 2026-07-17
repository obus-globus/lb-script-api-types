import type { JavaMap } from '../../../../../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../../../../../java/lang/Object.d.ts'
import type { TrClass } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrClass.d.ts'
import type { TrMethod } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrMethod.d.ts'
import type { CommonData } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { Pair } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/Pair.d.ts'
import type { MemberInfo } from '../../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/soft/data/MemberInfo.d.ts'
export class CommonInjectionAnnotationVisitor$InjectMethodMappable extends Object {
    constructor(arg0: CommonData, arg1: MemberInfo, arg2: string[])
    // private data: CommonData;
    // private info: MemberInfo;
    // private targets: TrClass[];
    // private canInject(arg0: string, arg1: number, arg2: JavaMap<Pair<string, string>, TrClass[]>): boolean;
    // private canInject(arg0: string, arg1: string, arg2: JavaMap<Pair<string, string>, TrClass[]>): boolean;
    // private resolvePartials(arg0: TrClass, arg1: string, arg2: string): TrMethod[];
    result(): MemberInfo[];
}