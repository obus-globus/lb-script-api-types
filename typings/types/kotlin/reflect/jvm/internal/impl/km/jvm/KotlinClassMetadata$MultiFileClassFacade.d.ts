import type { Metadata } from '../../../../../../../kotlin/Metadata.d.ts'
import type { JvmMetadataVersion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmMetadataVersion.d.ts'
import type { KotlinClassMetadata } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/KotlinClassMetadata.d.ts'
import type { KotlinClassMetadata$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/KotlinClassMetadata$Companion.d.ts'
export class KotlinClassMetadata$MultiFileClassFacade extends KotlinClassMetadata {
    static Companion: KotlinClassMetadata$Companion;
    constructor(arg0: Metadata, arg1: boolean)
    constructor(arg0: string[], arg1: JvmMetadataVersion, arg2: number)
    // private flags: number;
    readonly partClassNames: string[];
    // private version: JvmMetadataVersion;
    getPartClassNames(): string[];
}