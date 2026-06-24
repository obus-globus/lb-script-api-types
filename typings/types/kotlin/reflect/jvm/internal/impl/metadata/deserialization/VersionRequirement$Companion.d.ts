import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { NameResolver } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/NameResolver.d.ts'
import type { VersionRequirement } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/VersionRequirement.d.ts'
import type { VersionRequirementTable } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/VersionRequirementTable.d.ts'
export class VersionRequirement$Companion extends Object {
    private constructor()
    constructor(arg0: DefaultConstructorMarker)
    create(arg0: number, arg1: NameResolver, arg2: VersionRequirementTable): VersionRequirement;
}