import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KmExtensionType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmExtensionType.d.ts'
import type { KmPropertyExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmPropertyExtension.d.ts'
import type { JvmFieldSignature } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmFieldSignature.d.ts'
import type { JvmMethodSignature } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/JvmMethodSignature.d.ts'
import type { JvmPropertyExtension$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/internal/JvmPropertyExtension$Companion.d.ts'
export class JvmPropertyExtension extends Object implements KmPropertyExtension {
    static Companion: JvmPropertyExtension$Companion;
    static TYPE: KmExtensionType;
    constructor()
    readonly fieldSignature: JvmFieldSignature;
    readonly getterSignature: JvmMethodSignature;
    readonly jvmFlags: number;
    readonly setterSignature: JvmMethodSignature;
    readonly syntheticMethodForAnnotations: JvmMethodSignature;
    readonly syntheticMethodForDelegate: JvmMethodSignature;
    getFieldSignature(): JvmFieldSignature;
    getGetterSignature(): JvmMethodSignature;
    getJvmFlags(): number;
    getSetterSignature(): JvmMethodSignature;
    getSyntheticMethodForAnnotations(): JvmMethodSignature;
    getSyntheticMethodForDelegate(): JvmMethodSignature;
    getType(): KmExtensionType;
    setFieldSignature(arg0: JvmFieldSignature): void;
    setGetterSignature(arg0: JvmMethodSignature): void;
    setJvmFlags(arg0: number): void;
    setSetterSignature(arg0: JvmMethodSignature): void;
    setSyntheticMethodForAnnotations(arg0: JvmMethodSignature): void;
    setSyntheticMethodForDelegate(arg0: JvmMethodSignature): void;
}