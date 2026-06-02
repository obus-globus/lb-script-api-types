import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { MetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
export interface DeserializationConfiguration extends Object{
    getAllowUnstableDependencies(): boolean;
    getMetadataVersion(): MetadataVersion;
    getPreserveDeclarationsOrdering(): boolean;
    getReportErrorsOnPreReleaseDependencies(): boolean;
    getSkipMetadataVersionCheck(): boolean;
    getSkipPrereleaseCheck(): boolean;
    getTypeAliasesAllowed(): boolean;
}