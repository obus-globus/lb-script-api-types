import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { DefaultConstructorMarker } from '../../../../../../../kotlin/jvm/internal/DefaultConstructorMarker.d.ts'
import type { KotlinClassMetadata$Companion } from '../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/KotlinClassMetadata$Companion.d.ts'
export abstract class KotlinClassMetadata extends Object {
    static Companion: KotlinClassMetadata$Companion;
    private constructor()
    constructor(arg0: DefaultConstructorMarker)
    // private isAllowedToWrite: boolean;
    setAllowedToWrite$org_jetbrains_kotlin_kotlin_metadata_jvm(arg0: boolean): void;
}