import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KmConstructorExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmConstructorExtension.d.ts'
import type { KmExtensionType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmExtensionType.d.ts'
import type { JvmMethodSignature } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmMethodSignature.d.ts'
import type { JvmConstructorExtension$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/internal/JvmConstructorExtension$Companion.d.ts'
export class JvmConstructorExtension extends Object implements KmConstructorExtension {
    static Companion: JvmConstructorExtension$Companion;
    static TYPE: KmExtensionType;
    constructor()
    readonly signature: JvmMethodSignature;
    getSignature(): JvmMethodSignature;
    getType(): KmExtensionType;
    setSignature(arg0: JvmMethodSignature): void;
}