import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KmAnnotation } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmAnnotation.d.ts'
import type { KmExtensionType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmExtensionType.d.ts'
import type { KmTypeExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmTypeExtension.d.ts'
import type { JvmTypeExtension$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/internal/JvmTypeExtension$Companion.d.ts'
export class JvmTypeExtension extends Object implements KmTypeExtension {
    static Companion: JvmTypeExtension$Companion;
    static TYPE: KmExtensionType;
    constructor()
    readonly annotations: KmAnnotation[];
    // private isRaw: boolean;
    equals(arg0: Object | null): boolean;
    getAnnotations(): KmAnnotation[];
    getType(): KmExtensionType;
    hashCode(): number;
    isRaw(): boolean;
    setRaw(arg0: boolean): void;
}