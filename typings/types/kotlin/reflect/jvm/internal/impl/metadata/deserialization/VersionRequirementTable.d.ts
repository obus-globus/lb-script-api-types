import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProtoBuf$VersionRequirement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirement.d.ts'
import type { VersionRequirementTable$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/VersionRequirementTable$Companion.d.ts'
export class VersionRequirementTable extends Object {
    static Companion: VersionRequirementTable$Companion;
    private constructor(arg0: ProtoBuf$VersionRequirement[])
    // private infos: ProtoBuf$VersionRequirement[];
    get(arg0: number): ProtoBuf$VersionRequirement;
}