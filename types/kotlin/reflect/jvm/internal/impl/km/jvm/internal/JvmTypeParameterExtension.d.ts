import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmExtensionType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmExtensionType.d.ts'
import type { KmTypeParameterExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmTypeParameterExtension.d.ts'
import type { JvmTypeParameterExtension$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/internal/JvmTypeParameterExtension$Companion.d.ts'
export class JvmTypeParameterExtension extends Object implements KmTypeParameterExtension {
    static Companion: JvmTypeParameterExtension$Companion;
    static TYPE: KmExtensionType;
    constructor()
    readonly annotations: KmAnnotation[];
    getAnnotations(): KmAnnotation[];
    getType(): KmExtensionType;
}