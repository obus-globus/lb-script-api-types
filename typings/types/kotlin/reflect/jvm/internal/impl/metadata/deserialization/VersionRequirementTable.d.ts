import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { ProtoBuf$VersionRequirement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirement.d.ts'
import type { VersionRequirementTable$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/VersionRequirementTable$Companion.d.ts'
export class VersionRequirementTable extends Object {
    static Companion: VersionRequirementTable$Companion;
    constructor(arg0: (Object | null)[], arg1: DefaultConstructorMarker)
    // private infos: ProtoBuf$VersionRequirement[];
    get(arg0: number): ProtoBuf$VersionRequirement;
}