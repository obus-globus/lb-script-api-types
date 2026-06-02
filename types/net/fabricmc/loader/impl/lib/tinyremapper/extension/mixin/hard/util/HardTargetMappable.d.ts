import type { Optional } from '../../../../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../../../../java/lang/Object.d.ts'
import type { CommonData } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { MxMember } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/MxMember.d.ts'
export abstract class HardTargetMappable extends Object {
    constructor(arg0: CommonData, arg1: MxMember)
    // private data: CommonData;
    // private self: MxMember;
    getMappedName(): Optional<string>;
    result(): void;
}