import type { CommonData } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { MxMember } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/MxMember.d.ts'
import type { ConvertibleMappable } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/hard/util/ConvertibleMappable.d.ts'
import type { IConvertibleString } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/hard/util/IConvertibleString.d.ts'
export class ShadowAnnotationVisitor$ShadowPrefixMappable extends ConvertibleMappable {
    constructor(arg0: CommonData, arg1: MxMember, arg2: E[], arg3: string)
    // private prefix: string;
    getDesc(): string;
    getName(): IConvertibleString;
}