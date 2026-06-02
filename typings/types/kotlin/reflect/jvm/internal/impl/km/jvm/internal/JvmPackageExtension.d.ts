import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KmProperty } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { KmExtensionType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmExtensionType.d.ts'
import type { KmPackageExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmPackageExtension.d.ts'
import type { JvmPackageExtension$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/internal/JvmPackageExtension$Companion.d.ts'
export class JvmPackageExtension extends Object implements KmPackageExtension {
    static Companion: JvmPackageExtension$Companion;
    static TYPE: KmExtensionType;
    constructor()
    readonly localDelegatedProperties: KmProperty[];
    readonly moduleName: string;
    getLocalDelegatedProperties(): KmProperty[];
    getModuleName(): string;
    getType(): KmExtensionType;
    setModuleName(arg0: string): void;
}