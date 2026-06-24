import type { Metadata } from '../../../../../../../kotlin/Metadata.d.ts'
import type { KmPackage } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmPackage.d.ts'
import type { JvmMetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmMetadataVersion.d.ts'
import type { KotlinClassMetadata } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/KotlinClassMetadata.d.ts'
import type { KotlinClassMetadata$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/KotlinClassMetadata$Companion.d.ts'
export class KotlinClassMetadata$FileFacade extends KotlinClassMetadata {
    static Companion: KotlinClassMetadata$Companion;
    constructor(arg0: Metadata, arg1: boolean)
    constructor(arg0: KmPackage, arg1: JvmMetadataVersion, arg2: number)
    // private flags: number;
    readonly kmPackage: KmPackage;
    // private version: JvmMetadataVersion;
    getKmPackage(): KmPackage;
}