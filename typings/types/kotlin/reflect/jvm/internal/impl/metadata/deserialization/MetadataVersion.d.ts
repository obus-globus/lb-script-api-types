import type { BinaryVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/BinaryVersion.d.ts'
import type { MetadataVersion$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion$Companion.d.ts'
export class MetadataVersion extends BinaryVersion {
    static Companion: MetadataVersion$Companion;
    static INSTANCE: MetadataVersion;
    static INSTANCE_NEXT: MetadataVersion;
    static INVALID_VERSION: MetadataVersion;
    constructor(...arg0: number[])
    constructor(arg0: number[], arg1: boolean)
    // private isStrictSemantics: boolean;
    isCompatible(arg0: MetadataVersion): boolean;
    // private isCompatibleInternal(arg0: MetadataVersion): boolean;
    isCompatibleWithCurrentCompilerVersion(): boolean;
    isStrictSemantics(): boolean;
    lastSupportedVersionWithThisLanguageVersion(arg0: boolean): MetadataVersion;
    // private newerThan(arg0: MetadataVersion): boolean;
    next(): MetadataVersion;
}