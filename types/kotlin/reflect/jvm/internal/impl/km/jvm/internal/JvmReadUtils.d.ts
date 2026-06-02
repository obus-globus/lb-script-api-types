import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Metadata } from '../../../../../../../../kotlin/Metadata.d.ts'
import type { KmClass } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmClass.d.ts'
import type { KmLambda } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmLambda.d.ts'
import type { KmPackage } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmPackage.d.ts'
import type { KotlinClassMetadata } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/KotlinClassMetadata.d.ts'
import type { MetadataVersion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/metadata/deserialization/MetadataVersion.d.ts'
export class JvmReadUtils extends Object {
    static INSTANCE: JvmReadUtils;
    private constructor()
    // private checkMetadataVersionForRead(arg0: Metadata, arg1: boolean): void;
    // private isLessThan14(arg0: Metadata): boolean;
    readKmClass$kotlin_metadata_jvm(arg0: Metadata): KmClass;
    readKmLambda$kotlin_metadata_jvm(arg0: Metadata): KmLambda;
    readKmPackage$kotlin_metadata_jvm(arg0: Metadata): KmPackage;
    readMetadataImpl$kotlin_metadata_jvm(arg0: Metadata, arg1: boolean): KotlinClassMetadata;
    throwIfNotCompatible$kotlin_metadata_jvm(arg0: MetadataVersion, arg1: boolean): void;
}