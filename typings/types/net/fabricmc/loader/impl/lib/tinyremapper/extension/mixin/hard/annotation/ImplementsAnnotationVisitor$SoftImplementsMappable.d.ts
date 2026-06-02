import type { Optional } from '../../../../../../../../../../java/util/Optional.d.ts'
import type { CommonData } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { MxMember } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/MxMember.d.ts'
import type { HardTargetMappable } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/hard/util/HardTargetMappable.d.ts'
export class ImplementsAnnotationVisitor$SoftImplementsMappable extends HardTargetMappable {
    constructor(arg0: CommonData, arg1: MxMember, arg2: E[])
    // private interfaces: E[];
    getMappedName(): Optional<string>;
}