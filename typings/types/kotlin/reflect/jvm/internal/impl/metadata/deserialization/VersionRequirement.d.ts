import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DeprecationLevel } from '../../../../../../../kotlin/DeprecationLevel.d.ts'
import type { ProtoBuf$VersionRequirement$VersionKind } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/ProtoBuf$VersionRequirement$VersionKind.d.ts'
import type { VersionRequirement$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/VersionRequirement$Companion.d.ts'
import type { VersionRequirement$Version } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/VersionRequirement$Version.d.ts'
export class VersionRequirement extends Object {
    static Companion: VersionRequirement$Companion;
    constructor(arg0: VersionRequirement$Version, arg1: ProtoBuf$VersionRequirement$VersionKind, arg2: DeprecationLevel, arg3: number, arg4: string)
    readonly errorCode: number;
    readonly kind: ProtoBuf$VersionRequirement$VersionKind;
    readonly level: DeprecationLevel;
    readonly message: string;
    readonly version: VersionRequirement$Version;
    getErrorCode(): number;
    getKind(): ProtoBuf$VersionRequirement$VersionKind;
    getLevel(): DeprecationLevel;
    getMessage(): string;
    getVersion(): VersionRequirement$Version;
    toString(): string;
}