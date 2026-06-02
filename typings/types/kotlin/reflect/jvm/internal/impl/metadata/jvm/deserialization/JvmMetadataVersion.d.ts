import type { BinaryVersion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/BinaryVersion.d.ts'
import type { BinaryVersion$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/BinaryVersion$Companion.d.ts'
import type { JvmMetadataVersion$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/jvm/deserialization/JvmMetadataVersion$Companion.d.ts'
export class JvmMetadataVersion extends BinaryVersion {
    static Companion: BinaryVersion$Companion;
    static Companion: JvmMetadataVersion$Companion;
    static INSTANCE: JvmMetadataVersion;
    static INSTANCE_NEXT: JvmMetadataVersion;
    static INVALID_VERSION: JvmMetadataVersion;
    constructor(arg0: number[])
    constructor(arg0: number[], arg1: boolean)
    // private isStrictSemantics: boolean;
    isCompatible(arg0: JvmMetadataVersion): boolean;
    // private isCompatibleInternal(arg0: JvmMetadataVersion): boolean;
    isStrictSemantics(): boolean;
    lastSupportedVersionWithThisLanguageVersion(arg0: boolean): JvmMetadataVersion;
    // private newerThan(arg0: JvmMetadataVersion): boolean;
    next(): JvmMetadataVersion;
}