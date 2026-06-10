import type { Optional } from '../../../../../../../../../../java/util/Optional.d.ts'
import type { Stream } from '../../../../../../../../../../java/util/stream/Stream.d.ts'
import type { TrClass } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/api/TrClass.d.ts'
import type { CommonData } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/CommonData.d.ts'
import type { MxMember } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/common/data/MxMember.d.ts'
import type { HardTargetMappable } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/hard/util/HardTargetMappable.d.ts'
import type { IConvertibleString } from '../../../../../../../../../../net/fabricmc/loader/impl/lib/tinyremapper/extension/mixin/hard/util/IConvertibleString.d.ts'
export abstract class ConvertibleMappable extends HardTargetMappable {
    constructor(arg0: CommonData, arg1: MxMember, arg2: string[])
    // private targets: TrClass[];
    getDesc(): string;
    getMappedName(): Optional<string>;
    getName(): IConvertibleString;
    mapMultiTarget(arg0: IConvertibleString, arg1: string): Stream<string>;
}