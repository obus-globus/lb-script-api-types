import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { KmExtension } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmExtension.d.ts'
import type { KmExtensionType } from '../../../../../../../../kotlin/reflect/jvm/internal/impl/km/internal/extensions/KmExtensionType.d.ts'
export interface KmConstructorExtension extends Object, KmExtension{
    getType(): KmExtensionType;
}