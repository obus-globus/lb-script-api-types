import type { Metadata } from '../../../../../../../kotlin/Metadata.d.ts'
import type { KmClass } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmClass.d.ts'
import type { JvmMetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmMetadataVersion.d.ts'
import type { KotlinClassMetadata } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/KotlinClassMetadata.d.ts'
import type { KotlinClassMetadata$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/KotlinClassMetadata$Companion.d.ts'
export class KotlinClassMetadata$Class extends KotlinClassMetadata {
    static Companion: KotlinClassMetadata$Companion;
    constructor(arg0: Metadata, arg1: boolean)
    constructor(arg0: KmClass, arg1: JvmMetadataVersion, arg2: number)
    // private flags: number;
    readonly kmClass: KmClass;
    // private version: JvmMetadataVersion;
    getKmClass(): KmClass;
}