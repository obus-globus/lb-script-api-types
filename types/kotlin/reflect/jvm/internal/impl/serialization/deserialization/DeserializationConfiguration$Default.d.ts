import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
import type { DeserializationConfiguration } from '../../../../../../../kotlin/reflect/jvm/internal/impl/serialization/deserialization/DeserializationConfiguration.d.ts'
export class DeserializationConfiguration$Default extends Object implements DeserializationConfiguration {
    static INSTANCE: DeserializationConfiguration$Default;
    private constructor()
    getAllowUnstableDependencies(): boolean;
    getMetadataVersion(): MetadataVersion;
    getPreserveDeclarationsOrdering(): boolean;
    getReportErrorsOnPreReleaseDependencies(): boolean;
    getSkipMetadataVersionCheck(): boolean;
    getSkipPrereleaseCheck(): boolean;
    getTypeAliasesAllowed(): boolean;
}