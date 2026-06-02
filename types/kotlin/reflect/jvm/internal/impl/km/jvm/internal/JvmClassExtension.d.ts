import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KmProperty } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/KmProperty.d.ts'
import type { KmClassExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmClassExtension.d.ts'
import type { KmExtensionType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmExtensionType.d.ts'
import type { JvmClassExtension$Companion } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/jvm/internal/JvmClassExtension$Companion.d.ts'
export class JvmClassExtension extends Object implements KmClassExtension {
    static Companion: JvmClassExtension$Companion;
    constructor()
    readonly anonymousObjectOriginName: string;
    readonly jvmFlags: number;
    readonly localDelegatedProperties: KmProperty[];
    readonly moduleName: string;
    getAnonymousObjectOriginName(): string;
    getJvmFlags(): number;
    getLocalDelegatedProperties(): KmProperty[];
    getModuleName(): string;
    getType(): KmExtensionType;
    setAnonymousObjectOriginName(arg0: string): void;
    setJvmFlags(arg0: number): void;
    setModuleName(arg0: string): void;
}